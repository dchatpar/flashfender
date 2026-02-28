// Tracking utilities for UTM parameters and visitor analytics

export interface Visit {
    id: string;
    timestamp: number;
    page: string;
    referrer: string;
    utmSource?: string;
    utmMedium?: string;
    utmCampaign?: string;
    utmContent?: string;
    visitorId: string;
    sessionId: string;
    userAgent: string;
}

const STORAGE_KEY = "flashfender_visits";
const VISITOR_ID_KEY = "flashfender_visitor_id";
const SESSION_ID_KEY = "flashfender_session_id";
const SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes

// Generate unique ID
function generateId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

// Get or create visitor ID
export function getVisitorId(): string {
    if (typeof window === "undefined") return "";

    let visitorId = localStorage.getItem(VISITOR_ID_KEY);
    if (!visitorId) {
        visitorId = generateId();
        localStorage.setItem(VISITOR_ID_KEY, visitorId);
    }
    return visitorId;
}

// Get or create session ID
export function getSessionId(): string {
    if (typeof window === "undefined") return "";

    const stored = sessionStorage.getItem(SESSION_ID_KEY);
    const lastActivity = sessionStorage.getItem("last_activity");

    const now = Date.now();

    // Check if session expired
    if (stored && lastActivity) {
        const timeSinceActivity = now - parseInt(lastActivity);
        if (timeSinceActivity < SESSION_TIMEOUT) {
            sessionStorage.setItem("last_activity", now.toString());
            return stored;
        }
    }

    // Create new session
    const sessionId = generateId();
    sessionStorage.setItem(SESSION_ID_KEY, sessionId);
    sessionStorage.setItem("last_activity", now.toString());
    return sessionId;
}

// Extract UTM parameters from URL
export function getUTMParams(): {
    utmSource?: string;
    utmMedium?: string;
    utmCampaign?: string;
    utmContent?: string;
} {
    if (typeof window === "undefined") return {};

    const params = new URLSearchParams(window.location.search);

    return {
        utmSource: params.get("utm_source") || undefined,
        utmMedium: params.get("utm_medium") || undefined,
        utmCampaign: params.get("utm_campaign") || undefined,
        utmContent: params.get("utm_content") || undefined,
    };
}

// Track a visit
export function trackVisit(): void {
    if (typeof window === "undefined") return;

    const utmParams = getUTMParams();
    const visitorId = getVisitorId();
    const sessionId = getSessionId();

    const visit: Visit = {
        id: generateId(),
        timestamp: Date.now(),
        page: window.location.pathname,
        referrer: document.referrer || "direct",
        ...utmParams,
        visitorId,
        sessionId,
        userAgent: navigator.userAgent,
    };

    // Get existing visits
    const visits = getVisits();
    visits.push(visit);

    // Store (keep last 1000 visits)
    const recentVisits = visits.slice(-1000);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(recentVisits));
}

// Get all visits
export function getVisits(): Visit[] {
    if (typeof window === "undefined") return [];

    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];

    try {
        return JSON.parse(stored);
    } catch {
        return [];
    }
}

// Get visits filtered by UTM source
export function getVisitsBySource(source: string): Visit[] {
    return getVisits().filter((v) => v.utmSource === source);
}

// Get visits filtered by campaign
export function getVisitsByCampaign(campaign: string): Visit[] {
    return getVisits().filter((v) => v.utmCampaign === campaign);
}

// Get visits within date range
export function getVisitsByDateRange(startDate: Date, endDate: Date): Visit[] {
    const start = startDate.getTime();
    const end = endDate.getTime();
    return getVisits().filter((v) => v.timestamp >= start && v.timestamp <= end);
}

// Get analytics summary
export interface AnalyticsSummary {
    totalVisits: number;
    uniqueVisitors: number;
    topSources: { source: string; count: number }[];
    topPages: { page: string; count: number }[];
    topCampaigns: { campaign: string; count: number }[];
}

export function getAnalyticsSummary(): AnalyticsSummary {
    const visits = getVisits();

    // Unique visitors
    const uniqueVisitors = new Set(visits.map((v) => v.visitorId)).size;

    // Top sources
    const sourceCounts: Record<string, number> = {};
    visits.forEach((v) => {
        if (v.utmSource) {
            sourceCounts[v.utmSource] = (sourceCounts[v.utmSource] || 0) + 1;
        }
    });
    const topSources = Object.entries(sourceCounts)
        .map(([source, count]) => ({ source, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 10);

    // Top pages
    const pageCounts: Record<string, number> = {};
    visits.forEach((v) => {
        pageCounts[v.page] = (pageCounts[v.page] || 0) + 1;
    });
    const topPages = Object.entries(pageCounts)
        .map(([page, count]) => ({ page, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 10);

    // Top campaigns
    const campaignCounts: Record<string, number> = {};
    visits.forEach((v) => {
        if (v.utmCampaign) {
            campaignCounts[v.utmCampaign] = (campaignCounts[v.utmCampaign] || 0) + 1;
        }
    });
    const topCampaigns = Object.entries(campaignCounts)
        .map(([campaign, count]) => ({ campaign, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 10);

    return {
        totalVisits: visits.length,
        uniqueVisitors,
        topSources,
        topPages,
        topCampaigns,
    };
}

// Clear all tracking data
export function clearTrackingData(): void {
    if (typeof window === "undefined") return;
    localStorage.removeItem(STORAGE_KEY);
}
