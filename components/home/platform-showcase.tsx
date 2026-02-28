"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Layers,
  Timer,
  Sparkles,
  Globe,
  Car,
  ShoppingCart,
  Facebook,
  Instagram,
  Monitor,
  Smartphone,
  ArrowRight,
  CheckCircle2,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Platform data with icons and colors
const platforms = [
  { 
    name: "Facebook", 
    icon: Facebook, 
    color: "text-blue-600", 
    bg: "bg-blue-50", 
    border: "hover:border-blue-300",
    description: "Reach millions of buyers on the world's largest social marketplace",
    stats: "2B+ monthly users"
  },
  { 
    name: "Instagram", 
    icon: Instagram, 
    color: "text-pink-600", 
    bg: "bg-pink-50", 
    border: "hover:border-pink-300",
    description: "Showcase vehicles with stunning visuals to engaged audiences",
    stats: "500M+ daily active users"
  },
  { 
    name: "Autotrader", 
    icon: Car, 
    color: "text-orange-600", 
    bg: "bg-orange-50", 
    border: "hover:border-orange-300",
    description: "Target serious car buyers with high-intent search traffic",
    stats: "4M+ monthly visits"
  },
  { 
    name: "Cars.com", 
    icon: Monitor, 
    color: "text-purple-600", 
    bg: "bg-purple-50", 
    border: "hover:border-purple-300",
    description: "Connect with verified dealers and quality buyers",
    stats: "3M+ monthly users"
  },
  { 
    name: "eBay Motors", 
    icon: ShoppingCart, 
    color: "text-red-600", 
    bg: "bg-red-50", 
    border: "hover:border-red-300",
    description: "Global marketplace with powerful listing tools",
    stats: "1B+ listings"
  },
  { 
    name: "Craigslist", 
    icon: Globe, 
    color: "text-indigo-600", 
    bg: "bg-indigo-50", 
    border: "hover:border-indigo-300",
    description: "Local reach with massive organic traffic",
    stats: "80M+ monthly users"
  },
  { 
    name: "OfferUp", 
    icon: Smartphone, 
    color: "text-green-600", 
    bg: "bg-green-50", 
    border: "hover:border-green-300",
    description: "Mobile-first local marketplace for quick sales",
    stats: "30M+ downloads"
  },
  { 
    name: "CarGurus", 
    icon: Car, 
    color: "text-blue-500", 
    bg: "bg-blue-50", 
    border: "hover:border-blue-300",
    description: "Data-driven pricing insights for faster deals",
    stats: "15M+ monthly visits"
  },
];

export function PlatformShowcase() {
  const [selectedPlatform, setSelectedPlatform] = useState<typeof platforms[0] | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section ref={containerRef} className="py-20 md:py-24 relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-indigo-100/30 blur-[100px] rounded-[100%] pointer-events-none" />

      {/* Dot Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #000 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-white/90 border border-slate-200 rounded-full px-4 py-1.5 mb-6 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="text-sm font-medium text-slate-700">Universal Compatibility</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 tracking-tight text-slate-900">
            Post to <span className="gradient-text">10+ Platforms</span> Instantly
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            One click to reach millions of buyers across Facebook, Instagram, Autotrader, and more.
          </p>
        </motion.div>

        {/* Platform Grid with Infinite Marquee */}
        <motion.div
          className="mb-16 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          <div className="flex animate-marquee gap-6">
            {/* Double the platforms for seamless loop */}
            {[...platforms, ...platforms].map((platform, index) => (
              <motion.div
                key={`${platform.name}-${index}`}
                whileHover={{ scale: 1.05, y: -5 }}
                onClick={() => setSelectedPlatform(platform)}
                className={`glass flex-shrink-0 w-40 md:w-48 p-6 rounded-2xl border border-slate-200 ${platform.border} transition-all cursor-pointer shadow-sm hover:shadow-md`}
              >
                <div className={`w-14 h-14 ${platform.bg} rounded-xl flex items-center justify-center mb-4 mx-auto`}>
                  <platform.icon className={`w-7 h-7 ${platform.color}`} />
                </div>
                <h3 className="text-center font-semibold text-slate-900 text-sm">{platform.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
        >
          {/* Stat 1 */}
          <motion.div
            className="glass p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden"
            whileHover={{ y: -5 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-100/50 rounded-full blur-2xl" />
            <div className="relative">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <Layers className="w-6 h-6 text-red-600" />
              </div>
              <div className="text-5xl font-bold mb-2 text-slate-900">
                10<span className="text-red-600">+</span>
              </div>
              <h3 className="font-semibold mb-2 text-slate-900">Platforms Supported</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Instantly sync your entire inventory across every major marketplace with a single click.
              </p>
            </div>
          </motion.div>

          {/* Stat 2 */}
          <motion.div
            className="glass p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden"
            whileHover={{ y: -5 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 rounded-full blur-2xl" />
            <div className="relative">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Timer className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-5xl font-bold mb-2 text-slate-900">
                30<span className="text-blue-600 text-3xl">sec</span>
              </div>
              <h3 className="font-semibold mb-2 text-slate-900">Average Post Time</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                From AI logic generation to live listing in seconds. Speed that scales with your inventory.
              </p>
            </div>
          </motion.div>

          {/* Stat 3 */}
          <motion.div
            className="glass p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden"
            whileHover={{ y: -5 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-100/50 rounded-full blur-2xl" />
            <div className="relative">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-5xl font-bold mb-2 text-slate-900">
                100<span className="text-green-600">%</span>
              </div>
              <h3 className="font-semibold mb-2 text-slate-900">Unique Content</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                AI generates varied, human-like descriptions for every post to prevent shadow bans.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Platform Detail Modal */}
      {selectedPlatform && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPlatform(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div className={`w-16 h-16 ${selectedPlatform.bg} rounded-2xl flex items-center justify-center`}>
                <selectedPlatform.icon className={`w-8 h-8 ${selectedPlatform.color}`} />
              </div>
              <button
                onClick={() => setSelectedPlatform(null)}
                className="p-2 rounded-full hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5 text-slate-500" />
              </button>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-2">{selectedPlatform.name}</h3>
            <p className="text-slate-600 mb-6">{selectedPlatform.description}</p>

            <div className="bg-slate-50 rounded-xl p-4 mb-6">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>{selectedPlatform.stats}</span>
              </div>
            </div>

            <Button className="w-full bg-red-600 hover:bg-red-700 text-white rounded-full">
              Connect {selectedPlatform.name}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
