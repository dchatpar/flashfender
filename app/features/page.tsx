"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
    Bot,
    Shield,
    Palette,
    Zap,
    BarChart3,
    Users,
    Calendar,
    CheckCircle2,
    ArrowRight,
    Play,
    Pause,
    X,
    ChevronRight,
    Star
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

// Key Features for Zig-Zag Layout
const mainFeatures = [
    {
        title: "AI-Powered Content Generation",
        description: "Stop writing generic descriptions. Our AI analyzes your vehicle's make, model, and specs to generate engaging, platform-optimized content in seconds.",
        benefits: [
            "Tone adjustment (Urgent, Professional, Casual)",
            "Automatic emoji placement for engagement",
            "SEO keyword optimization included",
            "Generates 5+ variations instantly"
        ],
        image: "/images/generated/ai-automotive-tech.png",
        icon: Bot,
        gradient: "from-red-600 to-orange-500"
    },
    {
        title: "Professional Background Replacement",
        description: "Messy dealership lots kill sales. We instantly replace clutter with clean, premium backgrounds that build trust. Plus, changing pixel data ensures every image is unique—keeping you fully compliant with Facebook's duplicate content policies.",
        benefits: [
            "Converts 3x better than lot photos",
            "100% Facebook Marketplace Compliant",
            "Prevents 'Duplicate Listing' flags",
            "Batch process entire inventory"
        ],
        image: "/images/generated/studio-background.png",
        icon: Palette,
        gradient: "from-blue-600 to-cyan-500"
    },
    {
        title: "Intelligent Anti-Shadow Ban",
        description: "Posting too fast triggers spam filters. Our system mimics human behavior with randomized delays, device signatures, and IP rotation to keep your accounts safe.",
        benefits: [
            "Fingerprint spoofing technology",
            "Randomized posting intervals",
            "Duplicate content prevention",
            "Account health monitoring"
        ],
        image: "/images/generated/dashboard-analytics.png",
        icon: Shield,
        gradient: "from-emerald-500 to-green-400"
    }
];

// Secondary Features for Grid
const gridFeatures = [
    {
        icon: Zap,
        title: "Chrome Extension",
        description: "Post directly from your browser without logging into a dashboard."
    },
    {
        icon: Users,
        title: "Team Management",
        description: "Assign roles and permissions for your sales team and managers."
    },
    {
        icon: Calendar,
        title: "Smart Scheduling",
        description: "Queue posts to go live during peak engagement hours automatically."
    },
    {
        icon: BarChart3,
        title: "ROI Analytics",
        description: "Track views, leads, and sales attributed to each platform."
    }
];

// Video tutorials
const videoTutorials = [
    { title: "Getting Started", duration: "2:30", thumbnail: "/images/blog-1.jpg" },
    { title: "AI Content Generation", duration: "3:45", thumbnail: "/images/blog-2.jpg" },
    { title: "Background Replacement", duration: "4:15", thumbnail: "/images/blog-3.jpg" },
];

// Feature tabs
const featureTabs = [
    { id: "posting", label: "Posting" },
    { id: "ai", label: "AI Features" },
    { id: "analytics", label: "Analytics" },
    { id: "team", label: "Team" },
];

export default function FeaturesPage() {
    const [activeTab, setActiveTab] = useState("posting");
    const [playingVideo, setPlayingVideo] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    return (
        <main className="min-h-screen pt-24 pb-20 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10" />

            <div ref={containerRef}>
                {/* Hero Section */}
                <section className="container mx-auto px-4 mb-16 md:mb-24 text-center relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            <span className="text-sm font-medium text-blue-700">Version 2.0 Now Live</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tighter text-slate-900">
                            Tools Built for <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-purple-600 to-blue-600">Domination</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8">
                            FlashFender isn&apos;t just a posting tool. It&apos;s a comprehensive inventory marketing engine designed to multiply your dealership&apos;s reach 10x.
                        </p>

                        {/* Feature Tabs */}
                        <div className="flex flex-wrap justify-center gap-2 mb-8">
                            {featureTabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`px-5 py-2.5 rounded-full font-medium transition-all ${
                                        activeTab === tab.id
                                            ? "bg-red-600 text-white shadow-lg shadow-red-600/20"
                                            : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                                    }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* Zig Zag Sections */}
                <div className="space-y-16 md:space-y-24 container mx-auto px-4 mb-16 md:mb-24">
                    {mainFeatures.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                                }`}
                            >
                                {/* Text Content */}
                                <div className="flex-1">
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">{feature.title}</h2>
                                    <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                        {feature.description}
                                    </p>
                                    <ul className="space-y-3">
                                        {feature.benefits.map((benefit, i) => (
                                            <li key={i} className="flex items-center space-x-3">
                                                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                                                <span className="text-slate-700">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Image Showcase */}
                                <div className="flex-1 w-full">
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        className="relative aspect-video rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-xl group"
                                    >
                                        <Image
                                            src={feature.image}
                                            alt={feature.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        {/* Overlay Gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                                        {/* Floating UI Element Mockup */}
                                        <div className="absolute bottom-6 left-6 right-6">
                                            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-slate-200 shadow-lg">
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient}`} />
                                                    <span className="text-xs font-mono text-slate-600">AI_PROCESSING_COMPLETE</span>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Video Tutorials Section */}
                <section className="container mx-auto px-4 mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Video Tutorials</h2>
                        <p className="text-slate-600">Learn how to get the most out of FlashFender</p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {videoTutorials.map((video, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="group cursor-pointer"
                            >
                                <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-200 mb-3">
                                    <div className="absolute inset-0 bg-slate-300 group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                            <Play className="w-6 h-6 text-slate-900 ml-1" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 rounded text-xs text-white font-medium">
                                        {video.duration}
                                    </div>
                                </div>
                                <h3 className="font-semibold text-slate-900 group-hover:text-red-600 transition-colors">
                                    {video.title}
                                </h3>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Secondary Grid */}
                <section className="container mx-auto px-4 mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">But Wait, There&apos;s More</h2>
                        <p className="text-slate-600">Every tool you need to manage your inventory workflow</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {gridFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all"
                            >
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center mb-4 shadow-lg`}>
                                    <feature.icon className="w-6 h-6 text-white" />
                                </div>
                                <h4 className="text-lg font-bold mb-2 text-slate-900">{feature.title}</h4>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 md:p-16 border border-slate-200 shadow-xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 blur-[150px] -z-10" />
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-100/50 blur-[150px] -z-10" />

                        <div className="relative z-10 text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Ready to Automate Your Dealership?</h2>
                            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                                Join 500+ dealerships posting smarter, faster, and more safely with FlashFender.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 h-14 text-lg rounded-full shadow-lg shadow-red-600/20 w-full sm:w-auto">
                                    Start 14-Day Free Trial
                                </Button>
                                <Button size="lg" variant="outline" className="border-slate-300 hover:bg-slate-50 text-slate-900 px-8 h-14 text-lg rounded-full w-full sm:w-auto">
                                    View Demo <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </section>
            </div>
        </main>
    );
}
