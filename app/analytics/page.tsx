"use client";


import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    Eye,
    Users,
    Link as LinkIcon,
    TrendingUp,
    Download,
    LogOut,
    RefreshCw,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    getVisits,
    getAnalyticsSummary,
    clearTrackingData,
    type Visit,
} from "@/lib/tracking";
import { staggerContainer } from "@/lib/animations";

const DEFAULT_PASSWORD = "flashfender2026";

export default function AnalyticsPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [visits, setVisits] = useState<Visit[]>([]);
    const [summary, setSummary] = useState<ReturnType<typeof getAnalyticsSummary> | null>(null);
    const [filterSource, setFilterSource] = useState("");
    const [filterCampaign, setFilterCampaign] = useState("");

    const loadData = () => {
        const allVisits = getVisits();
        setVisits(allVisits);
        setSummary(getAnalyticsSummary());
    };

    // Check auth on mount
    useEffect(() => {
        const auth = sessionStorage.getItem("analytics_auth");
        if (auth === "true") {
            setIsAuthenticated(true);
            // Load data immediately
            loadData();
        }
    }, []);


    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === DEFAULT_PASSWORD) {
            setIsAuthenticated(true);
            sessionStorage.setItem("analytics_auth", "true");
            setError("");
            loadData();
        } else {
            setError("Invalid password");
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        sessionStorage.removeItem("analytics_auth");
        setPassword("");
    };

    const handleRefresh = () => {
        loadData();
    };

    const handleClearData = () => {
        if (confirm("Are you sure you want to clear all tracking data?")) {
            clearTrackingData();
            loadData();
        }
    };

    const handleExport = () => {
        const dataStr = JSON.stringify(visits, null, 2);
        const dataBlob = new Blob([dataStr], { type: "application/json" });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `flashfender-analytics-${Date.now()}.json`;
        link.click();
    };

    // Filter visits
    const filteredVisits = visits.filter((visit) => {
        if (filterSource && visit.utmSource !== filterSource) return false;
        if (filterCampaign && visit.utmCampaign !== filterCampaign) return false;
        return true;
    });

    // Login Screen
    if (!isAuthenticated) {
        return (
            <main className="min-h-screen flex items-center justify-center gradient-bg">
                <motion.div
                    className="w-full max-w-md"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <Card className="glass">
                        <CardHeader>
                            <CardTitle className="text-2xl text-center">
                                Analytics Dashboard
                            </CardTitle>
                            <p className="text-center text-muted-foreground">
                                Enter password to access tracking data
                            </p>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleLogin} className="space-y-4">
                                <div>
                                    <Input
                                        type="password"
                                        placeholder="Enter password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full"
                                    />
                                    {error && (
                                        <p className="text-red-500 text-sm mt-2">{error}</p>
                                    )}
                                </div>
                                <Button type="submit" className="w-full glow-purple">
                                    Login
                                </Button>
                                <p className="text-xs text-muted-foreground text-center">
                                    Default password: flashfender2026
                                </p>
                            </form>
                        </CardContent>
                    </Card>
                </motion.div>
            </main>
        );
    }

    // Analytics Dashboard
    return (
        <main className="min-h-screen pt-24 pb-20">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-4xl font-bold mb-2">
                            Analytics <span className="gradient-text">Dashboard</span>
                        </h1>
                        <p className="text-muted-foreground">
                            Track visitor activity and UTM campaign performance
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" onClick={handleRefresh}>
                            <RefreshCw size={16} className="mr-2" />
                            Refresh
                        </Button>
                        <Button variant="outline" onClick={handleExport}>
                            <Download size={16} className="mr-2" />
                            Export
                        </Button>
                        <Button variant="outline" onClick={handleLogout}>
                            <LogOut size={16} className="mr-2" />
                            Logout
                        </Button>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid md:grid-cols-4 gap-6 mb-8">
                    <Card className="glass">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-muted-foreground mb-1">
                                        Total Visits
                                    </p>
                                    <p className="text-3xl font-bold gradient-text">
                                        {summary?.totalVisits || 0}
                                    </p>
                                </div>
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                                    <Eye className="text-white" size={24} />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="glass">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-muted-foreground mb-1">
                                        Unique Visitors
                                    </p>
                                    <p className="text-3xl font-bold gradient-text">
                                        {summary?.uniqueVisitors || 0}
                                    </p>
                                </div>
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                                    <Users className="text-white" size={24} />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="glass">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-muted-foreground mb-1">
                                        UTM Sources
                                    </p>
                                    <p className="text-3xl font-bold gradient-text">
                                        {summary?.topSources.length || 0}
                                    </p>
                                </div>
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                                    <LinkIcon className="text-white" size={24} />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="glass">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-muted-foreground mb-1">
                                        Campaigns
                                    </p>
                                    <p className="text-3xl font-bold gradient-text">
                                        {summary?.topCampaigns.length || 0}
                                    </p>
                                </div>
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                                    <TrendingUp className="text-white" size={24} />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Top Sources */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <Card className="glass">
                        <CardHeader>
                            <CardTitle>Top UTM Sources</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {summary?.topSources.length ? (
                                <div className="space-y-3">
                                    {summary.topSources.map((source, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center justify-between"
                                        >
                                            <span className="font-medium">{source.source}</span>
                                            <span className="text-muted-foreground">
                                                {source.count} visits
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-muted-foreground text-center py-8">
                                    No UTM sources tracked yet
                                </p>
                            )}
                        </CardContent>
                    </Card>

                    <Card className="glass">
                        <CardHeader>
                            <CardTitle>Top Pages</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {summary?.topPages.length ? (
                                <div className="space-y-3">
                                    {summary.topPages.map((page, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center justify-between"
                                        >
                                            <span className="font-medium">{page.page}</span>
                                            <span className="text-muted-foreground">
                                                {page.count} visits
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-muted-foreground text-center py-8">
                                    No page data yet
                                </p>
                            )}
                        </CardContent>
                    </Card>
                </div>

                {/* Filters */}
                <Card className="glass mb-6">
                    <CardHeader>
                        <CardTitle>Filters</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    UTM Source
                                </label>
                                <select
                                    className="w-full px-3 py-2 rounded-md bg-input border border-border"
                                    value={filterSource}
                                    onChange={(e) => setFilterSource(e.target.value)}
                                >
                                    <option value="">All Sources</option>
                                    {summary?.topSources.map((source) => (
                                        <option key={source.source} value={source.source}>
                                            {source.source}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Campaign
                                </label>
                                <select
                                    className="w-full px-3 py-2 rounded-md bg-input border border-border"
                                    value={filterCampaign}
                                    onChange={(e) => setFilterCampaign(e.target.value)}
                                >
                                    <option value="">All Campaigns</option>
                                    {summary?.topCampaigns.map((campaign) => (
                                        <option key={campaign.campaign} value={campaign.campaign}>
                                            {campaign.campaign}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex items-end">
                                <Button
                                    variant="outline"
                                    onClick={() => {
                                        setFilterSource("");
                                        setFilterCampaign("");
                                    }}
                                    className="w-full"
                                >
                                    Clear Filters
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Recent Visits Table */}
                <Card className="glass">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle>
                                Recent Visits ({filteredVisits.length})
                            </CardTitle>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={handleClearData}
                            >
                                Clear All Data
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-border">
                                        <th className="text-left py-3 px-4">Timestamp</th>
                                        <th className="text-left py-3 px-4">Page</th>
                                        <th className="text-left py-3 px-4">Source</th>
                                        <th className="text-left py-3 px-4">Medium</th>
                                        <th className="text-left py-3 px-4">Campaign</th>
                                        <th className="text-left py-3 px-4">Referrer</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredVisits.length > 0 ? (
                                        filteredVisits
                                            .slice()
                                            .reverse()
                                            .slice(0, 50)
                                            .map((visit) => (
                                                <tr
                                                    key={visit.id}
                                                    className="border-b border-border/50 hover:bg-white/5"
                                                >
                                                    <td className="py-3 px-4 text-sm">
                                                        {new Date(visit.timestamp).toLocaleString()}
                                                    </td>
                                                    <td className="py-3 px-4 text-sm font-medium">
                                                        {visit.page}
                                                    </td>
                                                    <td className="py-3 px-4 text-sm">
                                                        {visit.utmSource || "-"}
                                                    </td>
                                                    <td className="py-3 px-4 text-sm">
                                                        {visit.utmMedium || "-"}
                                                    </td>
                                                    <td className="py-3 px-4 text-sm">
                                                        {visit.utmCampaign || "-"}
                                                    </td>
                                                    <td className="py-3 px-4 text-sm text-muted-foreground">
                                                        {visit.referrer}
                                                    </td>
                                                </tr>
                                            ))
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan={6}
                                                className="py-8 text-center text-muted-foreground"
                                            >
                                                No visits tracked yet. Share a tracking link to start
                                                collecting data.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
}
