import { NextRequest, NextResponse } from 'next/server';
import { setPassword } from '@/lib/tracking/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const password = body.password;

    if (!password || password.length < 4) {
      return NextResponse.json({ success: false, error: 'Password must be at least 4 characters' }, { status: 400 });
    }

    setPassword(password);
    return NextResponse.json({ success: true, message: 'Password set successfully' });
  } catch {
    return NextResponse.json({ success: false, error: 'Failed to set password' }, { status: 500 });
  }
}
