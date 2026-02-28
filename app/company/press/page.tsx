"use client";

import { motion } from "framer-motion";
import { 
    Newspaper, 
    Download, 
    Mail, 
    ExternalLink,
    FileText,
    Building2,
    Calendar,
    ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const pressReleases = [
    {
        id: 1,
        title: "FlashFender Secures $12M Series A to Revolutionize Automotive Retail",
        date: "January 15, 2025",
        excerpt: "Funding led by prominent automotive VCs to accelerate AI-powered inventory distribution technology.",
        category: "Funding"
    },
    {
        id: 2,
        title: "FlashFender Reaches 500 Dealership Milestone",
        date: "December 3, 2024",
        excerpt: "The fastest-growing auto retail technology platform announces major customer growth.",
        category: "Company News"
    },
    {
        id: 3,
        title: "FlashFender Launches Version 2.0 with Multi-Platform Distribution",
        date: "October 22, 2024",
        excerpt: "New release enables dealers to post to 15+ platforms simultaneously with anti-shadowban technology.",
        category: "Product"
    },
    {
        id: 4,
        title: "FlashFender Partners with Major DMS Providers",
        date: "August 8, 2024",
        excerpt: "Strategic integrations with leading Dealer Management Systems streamline inventory workflows.",
        category: "Partnership"
    }
];

const mediaCoverage = [
    { name: "Forbes", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Forbes_logo.svg/200px-Forbes_logo.svg.png" },
    { name: "TechCrunch", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/TechCrunch_logo.svg/200px-TechCrunch_logo.svg.png" },
    { name: "Automotive News", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Automotive_News_Logo.svg/200px-Automotive_News_Logo.svg.png" },
    { name: "Car and Driver", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Car_and_Driver_logo.svg/200px-Car_and_Driver_logo.svg.png" },
    { name: "Motor Trend", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Motor_Trend_Logo.svg/200px-Motor_Trend_Logo.svg.png" },
    { name: "Wired", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Wired_logo.svg/200px-Wired_logo.svg.png" }
];

const brandAssets = [
    { name: "FlashFender Logo Pack", format: "ZIP", size: "2.4 MB" },
    { name: "Brand Guidelines", format: "PDF", size: "1.8 MB" },
    { name: "Product Screenshots", format: "ZIP", size: "15.2 MB" },
    { name: "Executive Headshots", format: "ZIP", size: "8.5 MB" }
];

export default function PressPage() {
    return (
        <main className="min-h-screen pt-24 pb-20 relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/30 blur-[120px] rounded-full pointer-events-none opacity-50 -z-10" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-100/30 blur-[120px] rounded-full pointer-events-none opacity-50 -z-10" />

            {/* Hero Section */}
            <section className="container mx-auto px-4 mb-20">
                <motion.div
                    className="text-center max-w-3xl mx-auto"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <motion.div variants={fadeInUp}>
                        <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 mb-6">
                            <Newspaper className="w-4 h-4 text-blue-600" />
                            <span className="text-sm font-medium text-blue-700">In the News</span>
                        </div>
                    </motion.div>

                    <motion.h1 
                        variants={fadeInUp}
                        className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter text-slate-900"
                    >
                        Press & <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-purple-600 to-blue-600">Media</span>
                    </motion.h1>

                    <motion.p 
                        variants={fadeInUp}
                        className="text-xl text-slate-600 leading-relaxed"
                    >
                        Latest news, press releases, and media resources from FlashFender.
                    </motion.p>
                </motion.div>
            </section>

            {/* Press Releases Section */}
            <section className="container mx-auto px-4 mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Press Releases</h2>
                    <p className="text-slate-600">Latest announcements and company news</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {pressReleases.map((release, index) => (
                        <motion.article
                            key={release.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg hover:border-slate-300 transition-all group cursor-pointer"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200">
                                    {release.category}
                                </span>
                                <div className="flex items-center text-slate-500 text-sm">
                                    <Calendar className="w-4 h-4 mr-1" />
                                    {release.date}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-red-600 transition-colors">
                                {release.title}
                            </h3>
                            <p className="text-slate-600 mb-4">
                                {release.excerpt}
                            </p>
                            <div className="flex items-center text-red-600 font-medium">
                                Read More <ArrowRight className="w-4 h-4 ml-1" />
                            </div>
                        </motion.article>
                    ))}
                </div>
            </section>

            {/* Media Coverage Section */}
            <section className="container mx-auto px-4 mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">As Seen In</h2>
                    <p className="text-slate-600">Media coverage and industry recognition</p>
                </motion.div>

                <div className="bg-white rounded-3xl p-12 border border-slate-200">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
                        {mediaCoverage.map((publication, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all"
                            >
                                <div className="text-center">
                                    <div className="h-12 flex items-center justify-center mb-2">
                                        <Building2 className="w-10 h-10 text-slate-400" />
                                    </div>
                                    <span className="text-sm font-medium text-slate-600">{publication.name}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Media Kit Section */}
            <section className="container mx-auto px-4 mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Media Kit</h2>
                    <p className="text-slate-600">Download brand assets and resources</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {brandAssets.map((asset, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg hover:border-slate-300 transition-all group cursor-pointer"
                        >
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                                <FileText className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">{asset.name}</h3>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-slate-500">{asset.format} • {asset.size}</span>
                                <Download className="w-4 h-4 text-slate-400 group-hover:text-red-600 transition-colors" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Press Contact Section */}
            <section className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 relative overflow-hidden"
                >
                    {/* Background Accent */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500/10 blur-[120px] rounded-full pointer-events-none" />

                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-4 text-white">Press Inquiries</h2>
                            <p className="text-slate-300 mb-6 leading-relaxed">
                                For media questions, interview requests, or additional information, please contact our press team.
                            </p>
                            <div className="flex items-center space-x-3 text-white">
                                <Mail className="w-5 h-5 text-red-500" />
                                <span>press@flashfender.com</span>
                            </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                            <h3 className="text-white font-semibold mb-4">Sign up for press releases</h3>
                            <form className="space-y-4">
                                <Input 
                                    type="email" 
                                    placeholder="Your email address" 
                                    className="bg-white/20 border-white/20 text-white placeholder:text-slate-400 h-12 rounded-xl"
                                />
                                <Button className="w-full bg-red-600 hover:bg-red-700 text-white h-12 rounded-xl font-semibold">
                                    Subscribe <ExternalLink className="ml-2 w-4 h-4" />
                                </Button>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
