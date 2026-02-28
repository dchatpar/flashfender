import { NextRequest, NextResponse } from 'next/server';
import { getCodeStats, recordClick } from '@/lib/tracking/db';

const REDIRECT_URL = process.env.TRACKING_REDIRECT_URL || 'https://flashfender.com';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ code: string }> }
) {
  const { code } = await params;
  const codeData = getCodeStats(code);

  if (!codeData) {
    return NextResponse.json({ error: 'Code not found' }, { status: 404 });
  }

  const headers = request.headers;
  const ip = headers.get('x-forwarded-for')?.split(',')[0] || 
              headers.get('x-real-ip') || 
              'unknown';
  const userAgent = headers.get('user-agent') || 'unknown';
  const referrer = headers.get('referer') || 'unknown';

  recordClick(code, {
    timestamp: new Date().toISOString(),
    ip,
    userAgent,
    referrer
  });

  return NextResponse.redirect(new URL(REDIRECT_URL), 302);
}
