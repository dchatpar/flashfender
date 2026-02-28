"use client";

import { useEffect } from "react";
import { trackVisit } from "@/lib/tracking";

export function Tracker() {
    useEffect(() => {
        // Track visit on mount
        trackVisit();

        // Track on route change (for client-side navigation)
        const handleRouteChange = () => {
            trackVisit();
        };

        // Listen for popstate (back/forward navigation)
        window.addEventListener("popstate", handleRouteChange);

        return () => {
            window.removeEventListener("popstate", handleRouteChange);
        };
    }, []);

    return null; // This component doesn't render anything
}
