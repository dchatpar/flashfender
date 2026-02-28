import { NextRequest, NextResponse } from 'next/server';
import { getAllCodes, verifyPassword } from '@/lib/tracking/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const password = body.password;

    if (!verifyPassword(password)) {
      return NextResponse.json({ success: false, error: 'Invalid password' }, { status: 401 });
    }

    const codes = getAllCodes();
    const stats = Object.values(codes).map(code => ({
      code: code.code,
      description: code.description,
      createdAt: code.createdAt,
      clickCount: code.clicks.length,
      uniqueVisitors: new Set(code.clicks.map(c => c.ip).filter(Boolean)).size,
      lastClick: code.clicks.length > 0 ? code.clicks[code.clicks.length - 1].timestamp : null
    })).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    return NextResponse.json({ success: true, stats });
  } catch {
    return NextResponse.json({ success: false, error: 'Failed to get stats' }, { status: 500 });
  }
}
