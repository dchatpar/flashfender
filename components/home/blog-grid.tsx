"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Clock, Filter, Grid3X3, List } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    title: "How to Write Facebook Marketplace Car Descriptions That Convert",
    excerpt: "Learn the secrets to writing descriptions that drive more leads and sales. Discover the key elements that make buyers take action.",
    image: "/images/generated/blog-content-writing.png",
    category: "Marketing",
    readTime: "5 min read",
    slug: "how-to-write-facebook-marketplace-descriptions",
    featured: true
  },
  {
    title: "Why Manual Posting is Killing Your Dealership's Digital Strategy",
    excerpt: "Discover why automation is key to scaling your inventory reach. Stop wasting time on repetitive tasks.",
    image: "/images/generated/dashboard-analytics.png",
    category: "Strategy",
    readTime: "7 min read",
    slug: "manual-posting-killing-strategy",
    featured: false
  },
  {
    title: "Can Dealerships Use Facebook Marketplace?",
    excerpt: "Everything you need to know about FB Marketplace rules for dealers. Stay compliant while maximizing reach.",
    image: "/images/generated/mobile-marketplace.png",
    category: "Compliance",
    readTime: "4 min read",
    slug: "can-dealerships-use-facebook-marketplace",
    featured: false
  },
  {
    title: "The Ultimate Guide to Car Photography for Online Listings",
    excerpt: "Professional tips to make your vehicles stand out. Lighting, angles, and editing tips that sell.",
    image: "/images/generated/car-photography-tips.png",
    category: "Photography",
    readTime: "8 min read",
    slug: "ultimate-guide-car-photography",
    featured: false
  },
  {
    title: "How AI is Revolutionizing Auto Dealership Marketing",
    excerpt: "Explore how artificial intelligence is transforming the automotive industry and boosting sales.",
    image: "/images/generated/ai-automotive-tech.png",
    category: "Technology",
    readTime: "6 min read",
    slug: "ai-revolutionizing-auto-marketing",
    featured: false
  },
  {
    title: "Top 10 Tips for Selling Cars Faster in 2026",
    excerpt: "Proven strategies to move inventory quickly. Pricing, presentation, and promotion tactics.",
    image: "/images/generated/car-showroom.png",
    category: "Sales",
    readTime: "5 min read",
    slug: "top-10-tips-selling-cars-faster",
    featured: false
  }
];

const categories = ["All", "Marketing", "Strategy", "Compliance", "Technology", "Sales", "Photography"];

export function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const filteredArticles = activeCategory === "All" 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

  return (
    <section ref={containerRef} className="py-20 md:py-24 px-4 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-50/50 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10"
        >
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
              Latest <span className="text-blue-600">Insights</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-xl">
              Tips, strategies, and updates to help you sell more cars.
            </p>
          </div>
          
          {/* Category Filter (Desktop) */}
          <div className="hidden md:flex items-center gap-2">
            {categories.slice(0, 5).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Mobile Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.1 }}
          className="md:hidden mb-6 overflow-x-auto flex gap-2 pb-2 -mx-4 px-4"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* View Toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.15 }}
          className="flex items-center justify-between mb-8"
        >
          <p className="text-slate-500 text-sm">
            {filteredArticles.length} article{filteredArticles.length !== 1 ? "s" : ""}
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === "grid" ? "bg-slate-100 text-slate-900" : "text-slate-400 hover:text-slate-600"
              }`}
              aria-label="Grid view"
            >
              <Grid3X3 className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === "list" ? "bg-slate-100 text-slate-900" : "text-slate-400 hover:text-slate-600"
              }`}
              aria-label="List view"
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Articles Grid/List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className={viewMode === "grid" 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" 
            : "space-y-6"
          }
        >
          {filteredArticles.map((article, index) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index }}
              className={viewMode === "list" ? "flex gap-6" : ""}
            >
              <Link href={`/blog/${article.slug}`} className="group block">
                <article className={`bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 ${
                  viewMode === "list" ? "flex flex-col md:flex-row" : ""
                }`}>
                  {/* Image */}
                  <div className={`relative overflow-hidden ${
                    viewMode === "list" ? "md:w-72 flex-shrink-0" : "aspect-[4/3]"
                  }`}>
                    <div className="absolute inset-0 bg-slate-200 group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-slate-700">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 md:p-6 flex-1">
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-slate-600 text-sm line-clamp-2 mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center text-blue-600 font-medium text-sm group-hover:underline">
                      Read Article 
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More / View All */}
        {filteredArticles.length >= 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Link 
              href="/blog"
              className="inline-flex items-center px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-medium transition-colors"
            >
              View All Articles
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
