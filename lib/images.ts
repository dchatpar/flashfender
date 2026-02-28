import { NextRequest, NextResponse } from 'next/server';

const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY || '';
const PEXELS_API_KEY = process.env.PEXELS_API_KEY || '';
const MIN_WIDTH = 1920;
const MIN_HEIGHT = 1080;

export interface SourcedImage {
  id: string;
  url: string;
  thumbnailUrl: string;
  photographer: string;
  photographerUrl: string;
  source: 'unsplash' | 'pexels';
  width: number;
  height: number;
  alt: string;
  downloadUrl: string;
  isHD: boolean;
  isRelevant: boolean;
  relevanceScore: number;
}

export interface ImageSearchQuery {
  query: string;
  page?: number;
  perPage?: number;
}

async function searchUnsplash(query: string, page = 1, perPage = 20): Promise<SourcedImage[]> {
  if (!UNSPLASH_ACCESS_KEY) return [];
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&page=${page}&per_page=${perPage}&orientation=landscape`,
      { headers: { 'Authorization': `Client-ID ${UNSPLASH_ACCESS_KEY}` } }
    );
    if (!response.ok) return [];
    const data = await response.json();
    return data.results?.map((photo: any) => ({
      id: `unsplash-${photo.id}`,
      url: photo.urls.regular,
      thumbnailUrl: photo.urls.thumb,
      photographer: photo.user.name,
      photographerUrl: photo.user.links.html,
      source: 'unsplash' as const,
      width: photo.width,
      height: photo.height,
      alt: photo.alt_description || photo.description || query,
      downloadUrl: photo.urls.full,
      isHD: photo.width >= MIN_WIDTH && photo.height >= MIN_HEIGHT,
      isRelevant: calculateRelevance(photo, query),
      relevanceScore: calculateRelevanceScore(photo, query),
    })) || [];
  } catch { return []; }
}

async function searchPexels(query: string, page = 1, perPage = 20): Promise<SourcedImage[]> {
  if (!PEXELS_API_KEY) return [];
  try {
    const response = await fetch(
      `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&page=${page}&per_page=${perPage}&orientation=landscape`,
      { headers: { 'Authorization': PEXELS_API_KEY } }
    );
    if (!response.ok) return [];
    const data = await response.json();
    return data.photos?.map((photo: any) => ({
      id: `pexels-${photo.id}`,
      url: photo.src.large2x,
      thumbnailUrl: photo.src.tiny,
      photographer: photo.photographer,
      photographerUrl: photo.photographer_url,
      source: 'pexels' as const,
      width: photo.width,
      height: photo.height,
      alt: photo.alt || query,
      downloadUrl: photo.src.original,
      isHD: photo.width >= MIN_WIDTH && photo.height >= MIN_HEIGHT,
      isRelevant: calculateRelevance(photo, query),
      relevanceScore: calculateRelevanceScore(photo, query),
    })) || [];
  } catch { return []; }
}

function calculateRelevance(photo: any, query: string): boolean {
  const q = query.toLowerCase();
  const altText = (photo.alt_description || '').toLowerCase();
  const description = (photo.description || '').toLowerCase();
  const combined = `${altText} ${description}`;
  const words = q.split(' ').filter(w => w.length > 2);
  const matches = words.filter(word => combined.includes(word));
  return matches.length / words.length >= 0.5;
}

function calculateRelevanceScore(photo: any, query: string): number {
  let score = 0;
  const q = query.toLowerCase();
  if (photo.alt_description?.toLowerCase().includes(q)) score += 40;
  if (photo.description?.toLowerCase().includes(q)) score += 30;
  if (photo.width >= 2560 || photo.height >= 1440) score += 20;
  return Math.min(score, 100);
}

export async function searchImages(searchQuery: ImageSearchQuery): Promise<SourcedImage[]> {
  const { query, page = 1, perPage = 20 } = searchQuery;
  const [unsplashResults, pexelsResults] = await Promise.all([
    searchUnsplash(query, page, perPage),
    searchPexels(query, page, perPage),
  ]);
  return [...unsplashResults, ...pexelsResults]
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    .slice(0, perPage);
}

export const FLASHFENDER_IMAGE_CATEGORIES = {
  hero: { query: 'luxury car dealership showroom' },
  features: { query: 'car sales technology dashboard' },
  platformShowcase: { query: 'car dealership social media marketing' },
  testimonials: { query: 'business professional portrait' },
  cta: { query: 'modern office workspace' },
  extensionDemo: { query: 'chrome extension interface' },
  pricing: { query: 'subscription pricing plan' },
  analytics: { query: 'analytics charts data visualization' },
  about: { query: 'modern office building' },
  careers: { query: 'team collaboration meeting' },
  contact: { query: 'customer support call center' },
  blog: { query: 'automotive industry news' },
  documentation: { query: 'programming code documentation' },
  apiReference: { query: 'api developer documentation' },
  status: { query: 'server room data center' },
};

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const query = searchParams.get('q') || '';
  const page = parseInt(searchParams.get('page') || '1');
  const perPage = parseInt(searchParams.get('per_page') || '20');
  const source = searchParams.get('source');
  const hdOnly = searchParams.get('hd') === 'true';

  if (!query) return NextResponse.json({ error: 'Query required' }, { status: 400 });

  let results: SourcedImage[];
  if (source === 'unsplash') results = await searchUnsplash(query, page, perPage);
  else if (source === 'pexels') results = await searchPexels(query, page, perPage);
  else results = await searchImages({ query, page, perPage });

  if (hdOnly) results = results.filter(img => img.isHD);

  return NextResponse.json({ success: true, query, count: results.length, images: results });
}
