"use client";

import { motion } from "framer-motion";
import { 
    Database, 
    Sparkles, 
    Settings, 
    Rocket,
    ArrowRight,
    Image,
    FileText,
    Send,
    BarChart3,
    Zap,
    Shield
} from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Button } from "@/components/ui/button";

const steps = [
    {
        number: "01",
        icon: Database,
        title: "Connect Your Inventory",
        description: "Link your dealership website or DMS. We automatically sync your entire inventory - every vehicle, photos, and detail.",
        gradient: "from-blue-500 to-cyan-400",
        features: [
            "Works with any website",
            "Real-time inventory sync",
            "Automatic new vehicle detection",
            "Supports 10,000+ vehicle catalogs"
        ]
    },
    {
        number: "02",
        icon: Sparkles,
        title: "AI Generates Content",
        description: "Our AI creates platform-specific descriptions and enhances your photos. Every listing gets unique content to avoid duplicates.",
        gradient: "from-purple-500 to-pink-500",
        features: [
            "Unique descriptions per platform",
            "AI background enhancement",
            "SEO-optimized copy",
            "Multiple tone options"
        ]
    },
    {
        number: "03",
        icon: Settings,
        title: "Customize & Approve",
        description: "Review and tweak anything before posting. Adjust pricing, swap photos, edit descriptions - you're always in control.",
        gradient: "from-orange-500 to-red-500",
        features: [
            "Easy dashboard editor",
            "Bulk editing tools",
            "Team collaboration",
            "Approval workflows"
        ]
    },
    {
        number: "04",
        icon: Rocket,
        title: "Auto-Post Everywhere",
        description: "Hit publish and we distribute to Facebook Marketplace, Craigslist, OfferUp, Autotrader, and 10+ more platforms.",
        gradient: "from-emerald-500 to-green-500",
        features: [
            "15+ platforms supported",
            "Anti-shadowban technology",
            "Scheduled posting",
            "Human-like behavior"
        ]
    }
];

const timelineFeatures = [
    { icon: Image, label: "Photo Enhancement", color: "from-purple-500 to-pink-500" },
    { icon: FileText, label: "Content Generation", color: "from-blue-500 to-cyan-500" },
    { icon: Send, label: "Multi-Platform Post", color: "from-orange-500 to-red-500" },
    { icon: BarChart3, label: "Lead Tracking", color: "from-emerald-500 to-green-500" }
];

export default function HowItWorksPage() {
    return (
        <main className="min-h-screen pt-24 pb-20 relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/30 blur-[120px] rounded-full pointer-events-none opacity-50 -z-10" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-100/30 blur-[120px] rounded-full pointer-events-none opacity-50 -z-10" />

            <section className="container mx-auto px-4 mb-20">
                <motion.div
                    className="text-center max-w-3xl mx-auto"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <motion.div variants={fadeInUp}>
                        <div className="inline-flex items-center space-x-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 mb-6">
                            <Zap className="w-4 h-4 text-green-600" />
                            <span className="text-sm font-medium text-green-700">Simple Process</span>
                        </div>
                    </motion.div>

                    <motion.h1 
                        variants={fadeInUp}
                        className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter text-slate-900"
                    >
                        From Inventory to <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-purple-600 to-blue-600">Sales</span> in 4 Steps
                    </motion.h1>

                    <motion.p 
                        variants={fadeInUp}
                        className="text-xl text-slate-600 leading-relaxed"
                    >
                        Set up in minutes. Automate everything. Watch your inventory sell faster.
                    </motion.p>
                </motion.div>
            </section>

            <section className="container mx-auto px-4 mb-20">
                <div className="relative">
                    <div className="hidden md:block absolute left-[3.25rem] top-8 bottom-0 w-0.5 -z-10">
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-200 via-purple-200 to-transparent opacity-50" />
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-60 animate-pulse" />
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDuration: '3s' }} />
                    </div>

                    <div className="space-y-0">
                        {steps.map((step, index) => (
                            <div key={index}>
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="relative"
                                >
                                    <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                                        <div className="flex-shrink-0 flex items-start justify-center md:justify-start">
                                            <div className={`w-26 h-26 md:w-28 md:h-28 rounded-3xl bg-gradient-to-br ${step.gradient} p-[2px] shadow-lg`}>
                                                <div className="w-full h-full bg-white rounded-[22px] flex flex-col items-center justify-center relative overflow-hidden group">
                                                    <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
                                                    <step.icon className="w-8 h-8 text-slate-700 mb-2 relative z-10" />
                                                    <span className="text-3xl font-bold text-slate-900 relative z-10">{step.number}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex-1">
                                            <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all relative overflow-hidden group">
                                                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 blur-[80px] transition-opacity duration-500 rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2`} />

                                                <h3 className="text-3xl font-bold mb-4 text-slate-900">{step.title}</h3>
                                                <p className="text-xl text-slate-700 font-medium mb-6">
                                                    {step.description}
                                                </p>

                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                    {step.features.map((feature, i) => (
                                                        <div key={i} className="flex items-center space-x-3 bg-slate-50 rounded-lg p-3 border border-slate-200">
                                                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${step.gradient}`} />
                                                            <span className="text-sm font-medium text-slate-700">{feature}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {index < steps.length - 1 && (
                                    <motion.div
                                        className="hidden md:flex items-center justify-center py-8 ml-[3.25rem]"
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3, duration: 0.5 }}
                                    >
                                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${steps[index + 1].gradient} flex items-center justify-center shadow-lg animate-bounce`} style={{ animationDuration: '2s', animationDelay: `${index * 0.3}s` }}>
                                            <ArrowRight className="w-6 h-6 text-white" strokeWidth={2.5} />
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4 mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">What Happens Behind the Scenes</h2>
                    <p className="text-slate-600">Powerful automation working for you</p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {timelineFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-6 rounded-2xl border border-slate-200 text-center hover:shadow-lg transition-all"
                        >
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                                <feature.icon className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="font-semibold text-slate-900">{feature.label}</h3>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 md:p-24 text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500/10 blur-[120px] rounded-full pointer-events-none" />

                    <div className="relative z-10">
                        <div className="flex items-center justify-center gap-2 mb-6">
                            <Shield className="w-6 h-6 text-green-500" />
                            <span className="text-green-400 font-medium">Trusted by 500+ Dealerships</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            Ready to Automate Your Sales?
                        </h2>
                        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                            Join thousands of dealers posting smarter, faster, and more safely with FlashFender.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 h-14 text-lg rounded-full shadow-lg shadow-red-600/20">
                                Start 14-Day Free Trial
                            </Button>
                            <Button variant="outline" className="border-slate-600 text-white hover:bg-slate-800 px-8 h-14 text-lg rounded-full">
                                Watch Demo <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
