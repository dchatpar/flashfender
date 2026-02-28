"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Users, DollarSign, Car, ArrowUpRight, Sparkles } from "lucide-react";

const stats = [
  { 
    label: "Vehicles Listed", 
    value: 146, 
    suffix: "", 
    icon: Car,
    color: "from-blue-500 to-blue-600",
    description: "Active listings managed"
  },
  { 
    label: "Engagements", 
    value: 850000, 
    suffix: "K+", 
    icon: Users,
    color: "from-purple-500 to-purple-600",
    description: "Total user interactions"
  },
  { 
    label: "Cars Sold", 
    value: 15, 
    suffix: "+", 
    icon: DollarSign,
    color: "from-green-500 to-green-600",
    description: "In a single month"
  },
];

const performanceData = [
  { label: "Listing Views", value: 92, change: "+124%", color: "from-blue-500" },
  { label: "Message Volume", value: 78, change: "+85%", color: "from-purple-500" },
  { label: "Sales Conversion", value: 65, change: "+45%", color: "from-green-500" },
  { label: "Lead Quality", value: 88, change: "+67%", color: "from-orange-500" },
];

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [inView, value]);

  // Format large numbers
  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(0) + "K";
    return num.toString();
  };

  return (
    <span>
      {formatNumber(count)}{suffix}
    </span>
  );
}

function StatCard({ stat, index, inView }: { stat: typeof stats[0]; index: number; inView: boolean }) {
  const Icon = stat.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} mb-4">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={inView} />
      </div>
      <div className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-1">
        {stat.label}
      </div>
      <div className="text-xs text-slate-500">
        {stat.description}
      </div>
    </motion.div>
  );
}

export function Results() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={containerRef}
      className="py-20 md:py-24 px-4 bg-slate-900 text-white relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
      </div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5"
            >
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium text-green-400">Proven Results</span>
            </motion.div>

            {/* Title */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
            >
              Proven Results <br />
              <span className="text-blue-400">That Speak Volumes</span>
            </motion.h2>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-300 leading-relaxed"
            >
              Dealerships using FlashFender&apos;s automotive listing tool are rapidly closing more deals on Facebook Marketplace. 
              One user exploded in sales growth in just 30 days of setup.
            </motion.p>

            {/* Stats Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-3 gap-6 pt-4"
            >
              {stats.map((stat, index) => (
                <StatCard key={stat.label} stat={stat} index={index} inView={isInView} />
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a 
                href="/demo"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-full font-medium transition-colors"
              >
                See How It Works
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a 
                href="/testimonials"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full font-medium transition-colors"
              >
                Read Success Stories
              </a>
            </motion.div>
          </div>

          {/* Right Side - Performance Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-20 blur-xl" />

            <div className="relative bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 md:p-8 shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white">Monthly Performance</h3>
                  <p className="text-sm text-slate-400">Real-time analytics dashboard</p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/20 border border-green-500/30 rounded-full">
                  <Sparkles className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-medium text-green-400">Live</span>
                </div>
              </div>

              {/* Performance Bars */}
              <div className="space-y-5">
                {performanceData.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-slate-300">{item.label}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-green-400">{item.change}</span>
                      </div>
                    </div>
                    <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${item.value}%` } : {}}
                        transition={{ duration: 1, delay: 0.8 + index * 0.15 }}
                        className={`h-full bg-gradient-to-r ${item.color} to-transparent rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Summary Stats */}
              <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-700/50">
                <div className="text-center p-3 bg-slate-700/30 rounded-xl">
                  <div className="text-2xl font-bold text-white">2.4x</div>
                  <div className="text-xs text-slate-400">ROI Increase</div>
                </div>
                <div className="text-center p-3 bg-slate-700/30 rounded-xl">
                  <div className="text-2xl font-bold text-white">847</div>
                  <div className="text-xs text-slate-400">Leads This Month</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
