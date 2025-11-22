import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Job from '@/models/Job';

export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    
    const searchParams = request.nextUrl.searchParams;
    const status = searchParams.get('status');
    const search = searchParams.get('search');
    
    let query: any = {};
    
    if (status && status !== 'all') {
      query.status = status;
    }
    
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { company: { $regex: search, $options: 'i' } },
      ];
    }
    
    const jobs = await Job.find(query).sort({ createdAt: -1 });
    
    return NextResponse.json({ success: true, data: jobs });
  } catch (error: any) {
    console.error('Error fetching jobs:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to fetch jobs' },
      { status: 500 }
    );
  }
}
