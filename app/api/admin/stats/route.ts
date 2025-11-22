import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Job from '@/models/Job';
import Employer from '@/models/Employer';
import Seeker from '@/models/Seeker';

export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    
    const [
      totalJobs,
      activeJobs,
      totalEmployers,
      totalSeekers,
    ] = await Promise.all([
      Job.countDocuments(),
      Job.countDocuments({ status: 'active' }),
      Employer.countDocuments(),
      Seeker.countDocuments(),
    ]);
    
    const totalUsers = totalEmployers + totalSeekers;
    
    const recentJobs = await Job.find()
      .sort({ createdAt: -1 })
      .limit(10)
      .select('title company status createdAt');
    
    const recentEmployers = await Employer.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select('name email company createdAt');
    
    const recentSeekers = await Seeker.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .select('name email createdAt');
    
    const recentUsers = [
      ...recentEmployers.map((emp: any) => ({
        ...emp.toObject(),
        type: 'employer',
        joined: emp.createdAt
      })),
      ...recentSeekers.map((seeker: any) => ({
        ...seeker.toObject(),
        type: 'seeker',
        joined: seeker.createdAt
      }))
    ].sort((a, b) => {
      const dateA = new Date(a.joined).getTime();
      const dateB = new Date(b.joined).getTime();
      return dateB - dateA;
    }).slice(0, 10);
    
    const stats = {
      totalJobs,
      activeJobs,
      totalUsers,
      totalEmployers,
      totalSeekers,
      totalApplications: 0,
      revenue: '$0'
    };
    
    return NextResponse.json({
      success: true,
      data: {
        stats,
        recentJobs,
        recentUsers
      }
    });
  } catch (error: any) {
    console.error('Error fetching stats:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to fetch statistics' },
      { status: 500 }
    );
  }
}
