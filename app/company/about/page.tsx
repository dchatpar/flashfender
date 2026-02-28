"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Users, Target, Zap, Heart, Lightbulb, Shield, ArrowRight, MapPin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const companyValues = [
    { icon: Heart, title: "Customer Obsession", desc: "We measure success by our customers' inventory moving faster.", gradient: "from-red-500 to-orange-500" },
    { icon: Lightbulb, title: "Ship Fast, Learn Faster", desc: "Weekly releases. Real feedback. Constant iteration.", gradient: "from-blue-500 to-cyan-500" },
    { icon: Shield, title: "Reliability First", desc: "When dealerships post, systems must work. No exceptions.", gradient: "from-green-500 to-emerald-500" },
    { icon: Zap, title: "Own the Problem", desc: "We don't pass tickets. We solve them end-to-end.", gradient: "from-purple-500 to-pink-500" },
];

const timeline = [
    { year: "2023", title: "FlashFender Founded", desc: "Started in a Detroit garage with a laptop and a vision." },
    { year: "2023", title: "First 10 Dealerships", desc: "Word of mouth brought our first beta customers." },
    { year: "2024", title: "AI Engine Launch", desc: "Released our proprietary image enhancement and content generation." },
    { year: "2024", title: "500+ Dealerships", desc: "Crossed the 500 customer milestone with zero marketing spend." },
    { year: "2025", title: "Version 2.0 Release", desc: "Complete platform overhaul with multi-platform posting." },
];

const stats = [
    { value: "2M+", label: "Listings Processed", gradient: "from-red-500 to-orange-500" },
    { value: "$4B+", label: "Inventory Sold", gradient: "from-blue-500 to-cyan-500" },
    { value: "500+", label: "Active Dealerships", gradient: "from-green-500 to-emerald-500" },
    { value: "25+", label: "Team Members", gradient: "from-purple-500 to-pink-500" },
];

const team = [
    { name: "Alex V.", role: "Founder & CEO", location: "Detroit, MI" },
    { name: "Sarah Chen", role: "Head of AI", location: "San Francisco, CA" },
    { name: "Marcus J.", role: "Dealership Success", location: "Austin, TX" },
    { name: "David Kim", role: "CTO", location: "Vancouver, BC" },
    { name: "Elena Rodriguez", role: "Head of Product", location: "New York, NY" },
    { name: "James Singh", role: "Lead Developer", location: "London, UK" },
    { name: "Sophia Lewis", role: "Marketing Director", location: "Los Angeles, CA" },
    { name: "Ryan Taylor", role: "Customer Success", location: "Toronto, ON" },
];

export default function AboutPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    return (
        <main ref={containerRef} className="min-h-screen pt-24 pb-20 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-100/30 blur-[150px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/30 blur-[150px] rounded-full" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="max-w-4xl mx-auto text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900">
                        Driven by <span className="gradient-text">Automation</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
                        We are a team of engineers, gearheads, and data scientists on a mission to eliminate manual drudgery from the automotive industry.
                    </p>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.1 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.1 + index * 0.1 }}
                            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center hover:shadow-lg transition-shadow"
                        >
                            <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1`}>
                                {stat.value}
                            </div>
                            <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Our Story */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 }}
                    className="max-w-3xl mx-auto mb-20"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-slate-900">Our Story</h2>
                    <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm">
                        <p className="text-lg text-slate-600 leading-relaxed mb-6">
                            FlashFender was born from frustration. Our founder, Alex, spent 8 years managing a large dealership group in Detroit. Every Monday morning, he&apos;d watch his team manually post 200+ vehicles across Craigslist, Facebook Marketplace, OfferUp, and a dozen other platforms. Hours of repetitive work. Constant typos. Missed posting windows. And worst of all—Shadowbanned accounts because they posted too fast.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed mb-6">
                            He tried every tool on the market. They either didn&apos;t work, got accounts banned, or cost a fortune. So he built his own—initially just a simple script to auto-post to Craigslist. That script grew into an AI-powered platform handling image enhancement, content generation, anti-shadowban technology, and multi-platform distribution.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Today, we&apos;re a team of 25 (and growing) former dealership operators, ML engineers, and full-stack developers—all working remotely across 4 continents. We&apos;ve processed over 2 million vehicle listings and our customers have sold $4B+ in inventory through our platform. And we&apos;re just getting started.
                        </p>
                    </div>
                </motion.div>

                {/* Values Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 }}
                    className="mb-20"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">What We Believe</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {companyValues.map((value, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.3 + i * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-all"
                            >
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                                    <value.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-slate-900">{value.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Timeline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 }}
                    className="mb-20"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">Our Journey</h2>
                    <div className="max-w-3xl mx-auto">
                        {timeline.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.4 + i * 0.15 }}
                                className="flex gap-4 md:gap-6 pb-8 last:pb-0"
                            >
                                <div className="flex flex-col items-center">
                                    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br ${['from-red-500', 'from-orange-500', 'from-blue-500', 'from-green-500', 'from-purple-500'][i % 5]} to-orange-500 flex items-center justify-center text-white font-bold shadow-lg shrink-0`}>
                                        {item.year.slice(-2)}
                                    </div>
                                    {i < timeline.length - 1 && (
                                        <div className="w-0.5 h-full bg-slate-200 mt-4" />
                                    )}
                                </div>
                                <div className="flex-1 bg-white p-5 md:p-6 rounded-2xl border border-slate-200 hover:shadow-md transition-all">
                                    <h3 className="text-lg font-bold mb-1 text-slate-900">{item.title}</h3>
                                    <p className="text-slate-600 text-sm">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Team Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900">Meet the Crew</h2>
                    <p className="text-center text-slate-600 mb-12 max-w-xl mx-auto">
                        Former dealership operators turned engineers. We build what we&apos;ve lived.
                    </p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        {team.map((member, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.5 + i * 0.05 }}
                                whileHover={{ y: -5 }}
                                className="bg-white p-4 md:p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-all"
                            >
                                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4 bg-slate-100">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${['from-red-500', 'from-blue-500', 'from-green-500', 'from-purple-500', 'from-orange-500', 'from-cyan-500', 'from-pink-500', 'from-indigo-500'][i % 8]} to-slate-400 opacity-80`} />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-4xl font-bold text-white">{member.name.charAt(0)}</span>
                                    </div>
                                </div>
                                <h3 className="font-bold text-slate-900">{member.name}</h3>
                                <p className="text-blue-600 font-medium text-sm">{member.role}</p>
                                <div className="flex items-center gap-1 text-xs text-slate-500 mt-1">
                                    <MapPin className="w-3 h-3" />
                                    <span>{member.location}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7 }}
                    className="mt-20 text-center"
                >
                    <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
                        
                        <div className="relative z-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Want to join the team?</h2>
                            <p className="text-slate-300 mb-8 max-w-xl mx-auto">
                                We&apos;re always looking for talented people who understand the automotive industry.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8">
                                    View Open Positions
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                                <Button variant="outline" className="border-slate-600 text-white hover:bg-slate-800 rounded-full px-8">
                                    Contact Us
                                </Button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
