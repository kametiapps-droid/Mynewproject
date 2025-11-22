import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Employer from '@/models/Employer';
import Seeker from '@/models/Seeker';

export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    
    const searchParams = request.nextUrl.searchParams;
    const type = searchParams.get('type');
    const search = searchParams.get('search');
    
    let users: any[] = [];
    
    if (type === 'employer' || !type || type === 'all') {
      let query: any = {};
      if (search) {
        query.$or = [
          { name: { $regex: search, $options: 'i' } },
          { email: { $regex: search, $options: 'i' } },
          { company: { $regex: search, $options: 'i' } },
        ];
      }
      
      const employers = await Employer.find(query)
        .select('-password')
        .sort({ createdAt: -1 });
      
      users.push(...employers.map((emp: any) => ({
        ...emp.toObject(),
        type: 'employer'
      })));
    }
    
    if (type === 'seeker' || !type || type === 'all') {
      let query: any = {};
      if (search) {
        query.$or = [
          { name: { $regex: search, $options: 'i' } },
          { email: { $regex: search, $options: 'i' } },
        ];
      }
      
      const seekers = await Seeker.find(query)
        .select('-password')
        .sort({ createdAt: -1 });
      
      users.push(...seekers.map((seeker: any) => ({
        ...seeker.toObject(),
        type: 'seeker'
      })));
    }
    
    users.sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return dateB - dateA;
    });
    
    return NextResponse.json({ success: true, data: users });
  } catch (error: any) {
    console.error('Error fetching users:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to fetch users' },
      { status: 500 }
    );
  }
}
