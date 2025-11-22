import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Employer from '@/models/Employer';
import bcrypt from 'bcryptjs';

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const body = await request.json();
    
    const { email, password, name, company } = body;
    
    const existingEmployer = await Employer.findOne({ email });
    if (existingEmployer) {
      return NextResponse.json({ success: false, error: 'Email already registered' }, { status: 400 });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    const employer = await Employer.create({
      email,
      password: hashedPassword,
      name,
      company,
    });
    
    return NextResponse.json({ success: true, data: { id: employer._id, email: employer.email } }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to create employer account' }, { status: 500 });
  }
}
