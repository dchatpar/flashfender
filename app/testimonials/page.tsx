"use client";

import { motion } from "framer-motion";
import { 
    Quote, 
    Star, 
    Play, 
    ArrowRight,
    ThumbsUp,
    Users,
    TrendingUp,
    Building2
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const testimonials = [
    {
        id: 1,
        name: "Mike Rodriguez",
        role: "General Manager",
        dealership: "Prestige Auto Group",
        location: "Miami, FL",
        initials: "MR",
        quote: "FlashFender cut our posting time from 20 hours a week to 30 minutes. We used to manually post to 8 platforms - now it's completely automated.",
        stats: { label: "Time Saved", value: "90%" },
        rating: 5
    },
    {
        id: 2,
        name: "Sarah Chen",
        role: "Sales Director",
        dealership: "Valley Motors",
        location: "Phoenix, AZ",
        initials: "SC",
        quote: "The AI descriptions are incredible. Our click-through rate on Facebook Marketplace jumped 340% after switching to FlashFender.",
        stats: { label: "CTR Increase", value: "340%" },
        rating: 5
    },
    {
        id: 3,
        name: "James Wilson",
        role: "Owner",
        dealership: "Wilson Chevrolet",
        location: "Austin, TX",
        initials: "JW",
        quote: "Finally, a tool that actually works. We got shadowbanned constantly before - FlashFender's anti-ban technology is the real deal.",
        stats: { label: "Account Health", value: "100%" },
        rating: 5
    },
    {
        id: 4,
        name: "Elena Martinez",
        role: "Internet Manager",
        dealership: "Elite Imports",
        location: "Los Angeles, CA",
        initials: "EM",
        quote: "We doubled our online leads in 3 months. The multi-platform distribution is a game-changer for any dealership.",
        stats: { label: "Lead Increase", value: "2x" },
        rating: 5
    },
    {
        id: 5,
        name: "David Kim",
        role: "Fixed Ops Director",
        dealership: "Central Toyota",
        location: "Denver, CO",
        initials: "DK",
        quote: "The team collaboration features are fantastic. My sales team can now manage all our listings from one dashboard.",
        stats: { label: "Team Efficiency", value: "3x" },
        rating: 5
    },
    {
        id: 6,
        name: "Lisa Thompson",
        role: "Digital Marketing Manager",
        dealership: "Thompson Automotive",
        location: "Seattle, WA",
        initials: "LT",
        quote: "The ROI speaks for itself. We're seeing a 5x return on our FlashFender investment within the first quarter.",
        stats: { label: "ROI", value: "5x" },
        rating: 5
    }
];

const caseStudies = [
    {
        title: "How Prestige Auto Group Saved 90% on Posting Time",
        dealership: "Prestige Auto Group",
        location: "Miami, FL",
        metrics: [
            { label: "Time Saved/Week", value: "19.5 hours" },
            { label: "Platforms Posted", value: "12" },
            { label: "Leads/Month", value: "+215%" }
        ],
        image: "/images/car_dealership_exter/car_dealership_exter_8b8d21986655.jpg"
    },
    {
        title: "Valley Motors: 340% CTR Increase with AI Content",
        dealership: "Valley Motors",
        location: "Phoenix, AZ",
        metrics: [
            { label: "CTR Improvement", value: "340%" },
            { label: "Days to Sale", value: "-40%" },
            { label: "Views/Listing", value: "+280%" }
        ],
        image: "/images/luxury_suv_professio/luxury_suv_professio_3f6adc9c4f1e.jpg"
    }
];

const stats = [
    { icon: Users, value: "500+", label: "Active Dealerships" },
    { icon: Building2, value: "2M+", label: "Listings Published" },
    { icon: TrendingUp, value: "$4B+", label: "Inventory Sold" },
    { icon: ThumbsUp, value: "4.9/5", label: "Customer Rating" }
];

export default function TestimonialsPage() {
    return (
        <main className="min-h-screen pt-24 pb-20 relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial_gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/30 blur-[120px] rounded-full pointer-events-none opacity-50 -z-10" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-100/30 blur-[120px] rounded-full pointer-events-none opacity-50 -z-10" />

            <section className="container mx-auto px-4 mb-20">
                <motion.div
                    className="text-center max-w-3xl mx-auto"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <motion.div variants={fadeInUp}>
                        <div className="inline-flex items-center space-x-2 bg-yellow-50 border border-yellow-200 rounded-full px-4 py-1.5 mb-6">
                            <Star className="w-4 h-4 text-yellow-600" />
                            <span className="text-sm font-medium text-yellow-700">Customer Stories</span>
                        </div>
                    </motion.div>

                    <motion.h1 
                        variants={fadeInUp}
                        className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter text-slate-900"
                    >
                        Trusted by <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-purple-600 to-blue-600">500+ Dealerships</span>
                    </motion.h1>

                    <motion.p 
                        variants={fadeInUp}
                        className="text-xl text-slate-600 leading-relaxed"
                    >
                        Real results from real dealers. See why thousands of automotive retailers 
                        trust FlashFender to power their online sales.
                    </motion.p>
                </motion.div>
            </section>

            <section className="container mx-auto px-4 mb-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-6 rounded-2xl border border-slate-200 text-center hover:shadow-lg transition-all"
                        >
                            <stat.icon className="w-8 h-8 text-red-600 mx-auto mb-3" />
                            <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                            <div className="text-sm text-slate-600">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="container mx-auto px-4 mb-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-3xl p-8 border border-slate-200 hover:shadow-xl hover:border-slate-300 transition-all relative"
                        >
                            <div className="absolute top-6 right-6">
                                <Quote className="w-8 h-8 text-red-100" />
                            </div>

                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                ))}
                            </div>

                            <p className="text-slate-700 mb-6 leading-relaxed italic">
                                "{testimonial.quote}"
                            </p>

                            <div className="flex items-center gap-4 mb-4">
                                <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">{testimonial.initials}</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-slate-100">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-semibold text-slate-900">{testimonial.dealership}</p>
                                        <p className="text-xs text-slate-500">{testimonial.location}</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-2xl font-bold text-green-600">{testimonial.stats.value}</div>
                                        <div className="text-xs text-slate-500">{testimonial.stats.label}</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="container mx-auto px-4 mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Case Studies</h2>
                    <p className="text-slate-600">Deep dives into real results from our customers</p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-3xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all"
                        >
                            <div className="relative h-48 bg-slate-100">
                                <Image
                                    src={study.image}
                                    alt={study.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                    <Play className="w-16 h-16 text-white/80" />
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{study.title}</h3>
                                <p className="text-slate-600 mb-6">{study.dealership} • {study.location}</p>
                                <div className="grid grid-cols-3 gap-4">
                                    {study.metrics.map((metric, i) => (
                                        <div key={i} className="text-center p-3 bg-slate-50 rounded-xl">
                                            <div className="text-xl font-bold text-green-600">{metric.value}</div>
                                            <div className="text-xs text-slate-600">{metric.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="container mx-auto px-4 mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500/10 blur-[120px] rounded-full pointer-events-none" />

                    <div className="relative z-10">
                        <div className="flex items-center justify-center gap-2 mb-6">
                            <Play className="w-8 h-8 text-red-500" />
                            <span className="text-white font-medium">Video Testimonials</span>
                        </div>

                        <h2 className="text-3xl font-bold text-white mb-6">Hear from Our Customers</h2>
                        <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                            Watch real dealers share their experience with FlashFender and the results they've achieved.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 mb-10">
                            {[
                                "Mike R. - 90% Time Saved",
                                "Sarah C. - 340% CTR Increase",
                                "James W. - Zero Shadowbans"
                            ].map((video, index) => (
                                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/20 transition-colors cursor-pointer group">
                                    <div className="relative h-32 bg-slate-700 rounded-xl mb-3 flex items-center justify-center">
                                        <Play className="w-10 h-10 text-white/80 group-hover:scale-110 transition-transform" />
                                    </div>
                                    <p className="text-white text-sm font-medium">{video}</p>
                                </div>
                            ))}
                        </div>

                        <Button className="bg-red-600 hover:bg-red-700 text-white px-8 h-12 rounded-xl font-semibold">
                            Share Your Story <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </div>
                </motion.div>
            </section>

            <section className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-green-50 rounded-3xl p-12 border border-green-200 text-center"
                >
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Join These Success Stories?</h2>
                    <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                        Start your 14-day free trial today. No credit card required.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button className="bg-green-600 hover:bg-green-700 text-white px-8 h-12 rounded-xl font-semibold">
                            Start Free Trial
                        </Button>
                        <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100 px-8 h-12 rounded-xl font-semibold">
                            Schedule Demo
                        </Button>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
