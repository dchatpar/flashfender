"use client";

import { motion } from "framer-motion";
import { Play, Zap, LayoutDashboard, Image as ImageIcon, CheckCircle2, Upload, Wand2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Image from "next/image";

const demoSteps = [
    { icon: Upload, label: "Inventory Detected", color: "from-blue-500 to-cyan-400" },
    { icon: Wand2, label: "AI Processing", color: "from-purple-500 to-pink-500" },
    { icon: CheckCircle2, label: "Content Generated", color: "from-emerald-500 to-green-400" },
    { icon: Send, label: "Posted to 10+ Platforms", color: "from-orange-500 to-red-500" },
];

export default function DemoPage() {
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % demoSteps.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <main className="min-h-screen pt-24 pb-20 relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-100/30 blur-[120px] rounded-full pointer-events-none opacity-50 -z-10" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-100/30 blur-[120px] rounded-full pointer-events-none opacity-50 -z-10" />

            {/* Hero Section */}
            <section className="container mx-auto px-4 mb-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="inline-flex items-center space-x-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 mb-6 shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-sm font-medium text-slate-700">Live Interactive Demo</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter text-slate-900">
                        See FlashFender <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-purple-600 to-blue-600">In Action</span>
                    </h1>
                    <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                        Watch how easy it is to automate your entire inventory marketing workflow in under 2 minutes.
                    </p>
                </motion.div>
            </section>

            {/* Interactive Animated Demo */}
            <section className="container mx-auto px-4 mb-32 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-2xl"
                >
                    {/* Browser Toolbar Mockup */}
                    <div className="h-12 bg-slate-100 flex items-center px-4 space-x-2 border-b border-slate-200">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                        <div className="ml-4 flex-1 h-7 bg-white rounded-md flex items-center px-3 text-xs text-slate-600 font-mono border border-slate-200">
                            app.flashfender.com/dashboard/demo
                        </div>
                    </div>

                    {/* Animated Workflow Visualization */}
                    <div className="relative aspect-video bg-gradient-to-br from-slate-50 to-white p-12">
                        {/* Workflow Steps */}
                        <div className="overflow-x-auto">
                            <div className="flex items-center justify-between min-w-[600px] px-4">
                            {demoSteps.map((step, index) => (
                                <div key={index} className="flex flex-col items-center relative">
                                    {/* Step Circle */}
                                    <motion.div
                                        className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg mb-4 relative`}
                                        animate={{
                                            scale: activeStep === index ? [1, 1.2, 1] : 1,
                                            opacity: activeStep >= index ? 1 : 0.3,
                                        }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <step.icon className="w-10 h-10 text-white" />

                                        {/* Pulse Ring */}
                                        {activeStep === index && (
                                            <motion.div
                                                className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color}`}
                                                initial={{ scale: 1, opacity: 0.5 }}
                                                animate={{ scale: 1.5, opacity: 0 }}
                                                transition={{ duration: 1.5, repeat: Infinity }}
                                            />
                                        )}
                                    </motion.div>

                                    {/* Label */}
                                    <p className={`text-sm font-semibold text-center max-w-[120px] transition-colors ${activeStep === index ? 'text-slate-900' : 'text-slate-400'
                                        }`}>
                                        {step.label}
                                    </p>

                                    {/* Connecting Line */}
                                    {index < demoSteps.length - 1 && (
                                        <motion.div
                                            className="absolute top-10 left-[60px] w-[calc(100%+80px)] h-1 bg-gradient-to-r from-slate-200 to-slate-200"
                                            style={{ zIndex: -1 }}
                                        >
                                            <motion.div
                                                className={`h-full bg-gradient-to-r ${step.color}`}
                                                initial={{ width: "0%" }}
                                                animate={{ width: activeStep > index ? "100%" : "0%" }}
                                                transition={{ duration: 0.5 }}
                                            />
                                        </motion.div>
                                    )}
                                </div>
                            ))}
                        </div>
                        </div>

                        {/* Status Message */}
                        <motion.div
                            className="mt-16 text-center"
                            key={activeStep}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className={`inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r ${demoSteps[activeStep].color} text-white font-semibold shadow-lg`}>
                                {activeStep === 0 && <Upload className="w-5 h-5" />}
                                {activeStep === 1 && <Wand2 className="w-5 h-5" />}
                                {activeStep === 2 && <CheckCircle2 className="w-5 h-5" />}
                                {activeStep === 3 && <Send className="w-5 h-5" />}
                                <span>{demoSteps[activeStep].label}</span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* Deep Dive Features */}
            <section className="container mx-auto px-4 mb-24 max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-slate-900">What You&apos;ll Explore</h2>
                    <p className="text-slate-600 text-lg">A breakdown of the key workflows shown in the demo</p>
                </div>

                <div className="space-y-8">
                    {[
                        {
                            title: "The Command Center",
                            desc: "A unified view of your entire inventory status, agent performance, and posting queues across 10+ platforms.",
                            icon: LayoutDashboard,
                            gradient: "from-blue-500 to-cyan-400",
                            image: "/images/generated/dashboard-analytics.png"
                        },
                        {
                            title: "AI Image Studio",
                            desc: "Watch raw vehicle photos get automatically enhanced, background-swapped, and branded in seconds without Photoshop.",
                            icon: ImageIcon,
                            gradient: "from-purple-500 to-pink-500",
                            image: "/images/generated/car-studio-enhanced.png"
                        },
                        {
                            title: "Instant Multi-Posting",
                            desc: "Click once and watch the system distribute content to Craigslist, Facebook Marketplace, OfferUp, and more simultaneously.",
                            icon: Zap,
                            gradient: "from-orange-500 to-red-500",
                            image: "/images/generated/mobile-marketplace.png"
                        }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 hover:shadow-lg transition-all group"
                        >
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="flex-1">
                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                                        <item.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 text-slate-900">{item.title}</h3>
                                    <p className="text-slate-600 leading-relaxed mb-6">{item.desc}</p>
                                    <div className="flex items-center space-x-2 text-sm text-blue-600 font-medium cursor-pointer hover:text-blue-700 group-hover:translate-x-1 transition-transform">
                                        <Play className="w-4 h-4" />
                                        <span>Jump to section</span>
                                    </div>
                                </div>
                                <div className="flex-1 w-full relative h-64 rounded-2xl overflow-hidden border border-slate-200">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section className="container mx-auto px-4 text-center">
                <Button size="lg" className="bg-red-600 text-white hover:bg-red-700 px-8 h-14 text-lg rounded-full font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105">
                    Schedule Personalized Walkthrough
                </Button>
            </section>
        </main>
    );
}
