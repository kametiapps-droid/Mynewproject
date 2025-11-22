import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Seeker from '@/models/Seeker';
import bcrypt from 'bcryptjs';

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const body = await request.json();
    
    const { email, password, name } = body;
    
    const existingSeeker = await Seeker.findOne({ email });
    if (existingSeeker) {
      return NextResponse.json({ success: false, error: 'Email already registered' }, { status: 400 });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    const seeker = await Seeker.create({
      email,
      password: hashedPassword,
      name,
    });
    
    return NextResponse.json({ success: true, data: { id: seeker._id, email: seeker.email } }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to create seeker account' }, { status: 500 });
  }
}
