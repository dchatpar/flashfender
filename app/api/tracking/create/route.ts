import { NextRequest, NextResponse } from 'next/server';
import { createCode } from '@/lib/tracking/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const description = body.description || '';
    const code = createCode(description);
    
    return NextResponse.json({
      success: true,
      code: code.code,
      url: `/t/${code.code}`,
      createdAt: code.createdAt
    });
  } catch {
    return NextResponse.json({ success: false, error: 'Failed to create code' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ success: false, error: 'Use POST to create a code' }, { status: 405 });
}
