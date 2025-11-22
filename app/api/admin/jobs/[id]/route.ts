import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Job from '@/models/Job';

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();
    const { id } = params;
    const body = await request.json();
    
    const job = await Job.findByIdAndUpdate(
      id,
      { $set: body },
      { new: true, runValidators: true }
    );
    
    if (!job) {
      return NextResponse.json(
        { success: false, error: 'Job not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true, data: job });
  } catch (error: any) {
    console.error('Error updating job:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to update job' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();
    const { id } = params;
    
    const job = await Job.findByIdAndDelete(id);
    
    if (!job) {
      return NextResponse.json(
        { success: false, error: 'Job not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ 
      success: true, 
      message: 'Job deleted successfully' 
    });
  } catch (error: any) {
    console.error('Error deleting job:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to delete job' },
      { status: 500 }
    );
  }
}
