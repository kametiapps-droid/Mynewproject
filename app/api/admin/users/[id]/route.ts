import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Employer from '@/models/Employer';
import Seeker from '@/models/Seeker';

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();
    const { id } = params;
    const body = await request.json();
    const { type, ...updateData } = body;
    
    let user;
    
    if (type === 'employer') {
      user = await Employer.findByIdAndUpdate(
        id,
        { $set: updateData },
        { new: true, runValidators: true }
      ).select('-password');
    } else if (type === 'seeker') {
      user = await Seeker.findByIdAndUpdate(
        id,
        { $set: updateData },
        { new: true, runValidators: true }
      ).select('-password');
    }
    
    if (!user) {
      return NextResponse.json(
        { success: false, error: 'User not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ 
      success: true, 
      data: { ...user.toObject(), type } 
    });
  } catch (error: any) {
    console.error('Error updating user:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to update user' },
      { status: 500 }
    );
  }
}
