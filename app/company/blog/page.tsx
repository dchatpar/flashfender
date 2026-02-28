"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const articles = [
    {
        title: "The Death of Manual Posting",
        excerpt: "Why dealerships relying on copy-paste are losing 40% of leads to automated competitors.",
        date: "Feb 2, 2026",
        category: "Industry",
        slug: "death-of-manual-posting"
    },
    {
        title: "How to Avoid Facebook Marketplace Shadow Bans",
        excerpt: "The ultimate guide to IP rotation, browser fingerprinting, and content variation.",
        date: "Jan 28, 2026",
        category: "Technical",
        slug: "avoid-shadow-bans"
    },
    {
        title: "AI vs Human Writers: A/B Testing Descriptions",
        excerpt: "We analyzed 50,000 listings. See which ones generated more messages.",
        date: "Jan 15, 2026",
        category: "Data Study",
        slug: "ai-vs-human-writers"
    }
];

export default function BlogPage() {
    return (
        <div className="min-h-screen pt-24 pb-20 container mx-auto px-4 bg-gradient-to-b from-white via-slate-50 to-white">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10" />

            <div className="max-w-4xl mx-auto mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">FlashFender <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-purple-600 to-blue-600">Insights</span></h1>
                <p className="text-xl text-slate-600">
                    Deep dives into automotive marketing, automation technology, and dealership growth.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -5 }}
                        className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col items-start"
                    >
                        <span className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-600 mb-4">
                            {article.category}
                        </span>
                        <h2 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors cursor-pointer">
                            {article.title}
                        </h2>
                        <p className="text-slate-600 mb-6 flex-1 text-sm leading-relaxed">
                            {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between w-full mt-auto border-t border-slate-100 pt-6">
                            <span className="text-sm text-slate-400 font-medium">{article.date}</span>
                            <Link href={`#`} className="flex items-center text-blue-600 font-bold text-sm hover:text-blue-700">
                                Read More <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
