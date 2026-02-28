"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import {
    Sparkles,
    Zap,
    Shield,
    Users,
    BarChart3,
    Palette,
    ArrowRight,
    Play,
    CheckCircle2
} from "lucide-react";

const features = [
    {
        icon: Sparkles,
        title: "AI Content Generation",
        description: "Unique descriptions for every platform. No duplicate content penalties. Every listing gets fresh, engaging copy.",
        gradient: "from-red-600 to-orange-500",
        span: "large",
        stats: "100% Unique",
        bgImage: "/images/generated/dashboard-analytics.png",
        benefits: ["Platform-optimized copy", "SEO keywords included", "Multiple tone options", "5+ variations instantly"]
    },
    {
        icon: Palette,
        title: "Background Modification",
        description: "AI-powered background replacement for consistent branding. Studio-quality images every time.",
        gradient: "from-blue-600 to-cyan-500",
        span: "wide",
        stats: "Studio Quality",
        bgImage: "/images/generated/studio-background.png",
        benefits: ["Messy lot removal", "Consistent branding", "FB Marketplace compliant", "Batch processing"]
    },
    {
        icon: Shield,
        title: "Anti-Shadow Ban",
        description: "Smart posting patterns that avoid platform detection. Your accounts stay safe and active.",
        gradient: "from-emerald-500 to-green-400",
        span: "tall",
        stats: "99.9% Safe",
        bgImage: "/images/generated/ai-automotive-tech.png",
        benefits: ["Fingerprint spoofing", "Random delays", "IP rotation", "Account monitoring"]
    },
    {
        icon: Users,
        title: "Role-Based Access",
        description: "Team management with granular permissions. Control who can post, edit, or view analytics.",
        gradient: "from-purple-600 to-pink-500",
        span: "normal",
        stats: "Unlimited Users",
        bgImage: "/images/generated/team-meeting.png",
        benefits: ["Custom roles", "Approval workflows", "Activity logs", "SSO integration"]
    },
    {
        icon: BarChart3,
        title: "Analytics Dashboard",
        description: "Track performance across all platforms in real-time. Make data-driven decisions.",
        gradient: "from-amber-500 to-yellow-400",
        span: "normal",
        stats: "Real-time Data",
        bgImage: "/images/generated/dashboard-analytics.png",
        benefits: ["Cross-platform tracking", "ROI calculations", "Lead scoring", "Export reports"]
    },
    {
        icon: Zap,
        title: "Instant Posting",
        description: "Post to 10+ platforms in seconds, not hours. Scale your operations effortlessly.",
        gradient: "from-red-500 to-pink-500",
        span: "wide",
        stats: "30 sec avg",
        bgImage: "/images/generated/car-showroom.png",
        benefits: ["One-click publish", "Scheduled posting", "Bulk operations", "Priority queue"]
    },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
    const [isHovered, setIsHovered] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const Icon = feature.icon;

    const gridClass =
        feature.span === "large" ? "md:col-span-2 md:row-span-2" :
        feature.span === "wide" ? "md:col-span-2 md:row-span-1" :
        feature.span === "tall" ? "md:col-span-1 md:row-span-2" :
        "md:col-span-1 md:row-span-1";

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={gridClass}
        >
            <div 
                className="relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-2xl transition-all duration-500 group cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Background Image with Blur */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Image
                        src={feature.bgImage}
                        alt={feature.title}
                        fill
                        className="object-cover blur-sm scale-110"
                    />
                    <div className="absolute inset-0 bg-white/85" />
                </div>

                {/* Animated Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                {/* Radial Glow Effect */}
                <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${feature.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

                {/* Content */}
                <div className="relative z-10 p-6 md:p-8 h-full flex flex-col justify-between">
                    <div>
                        {/* Icon with Animated Ring */}
                        <div className="relative w-14 h-14 md:w-16 md:h-16 mb-5">
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity`} />
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity`} />
                            <div className={`relative w-full h-full bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                                <Icon className="w-7 h-7 text-white" />
                            </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-slate-900 group-hover:text-slate-950 transition-colors">
                            {feature.title}
                        </h3>

                        {/* Description */}
                        <p className="text-slate-600 leading-relaxed mb-4">
                            {feature.description}
                        </p>

                        {/* Benefits (shown on hover) */}
                        <motion.div
                            initial={false}
                            animate={{ height: isHovered ? "auto" : 0, opacity: isHovered ? 1 : 0 }}
                            className="overflow-hidden"
                        >
                            <div className="pt-2 space-y-2">
                                {feature.benefits?.map((benefit, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                                        <span>{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Stats Badge */}
                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${feature.gradient} text-white shadow-sm mt-4`}>
                            {feature.stats}
                        </div>
                    </div>

                    {/* Hover Arrow */}
                    <div className="flex items-center text-sm font-medium text-slate-700 group-hover:text-red-600 transition-colors mt-4 md:mt-6">
                        <span>Learn more</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>

                {/* Animated Border Gradient */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${feature.gradient} p-[2px]`}>
                    <div className="h-full w-full bg-white rounded-3xl" />
                </div>
            </div>
        </motion.div>
    );
}

export function FeatureBento() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">
            {/* Subtle Radial Glows */}
            <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-red-100/30 blur-[120px] rounded-full pointer-events-none opacity-50" />
            <div className="absolute bottom-0 left-0 w-[800px] h-[600px] bg-blue-100/30 blur-[120px] rounded-full pointer-events-none opacity-50" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-center mb-12 md:mb-20"
                >
                    <div className="inline-flex items-center space-x-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 mb-6 shadow-sm">
                        <Sparkles className="w-4 h-4 text-red-600" />
                        <span className="text-sm font-medium text-slate-700">Powerful Features</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 tracking-tighter text-slate-900">
                        Everything You Need to{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-purple-600 to-blue-600">
                            Dominate
                        </span>
                    </h2>

                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
                        Built for dealerships who refuse to settle for average reach.
                    </p>
                </motion.div>

                {/* Advanced Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[280px] md:auto-rows-[320px] gap-4 md:gap-6 max-w-7xl mx-auto">
                    {features.map((feature, index) => (
                        <FeatureCard key={feature.title} feature={feature} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
