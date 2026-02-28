"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, TrendingUp, MapPin, Clock } from "lucide-react";

interface VisitorData {
  count: number;
  trend: number;
  topCountries: { country: string; count: number }[];
  lastUpdated: string;
}

const MOCK_DATA: VisitorData = {
  count: 1247,
  trend: 12.5,
  topCountries: [
    { country: "United States", count: 623 },
    { country: "Canada", count: 187 },
    { country: "United Kingdom", count: 142 },
    { country: "Germany", count: 98 },
    { country: "Australia", count: 76 },
  ],
  lastUpdated: new Date().toISOString(),
};

export function LiveVisitorCounter() {
  const [data, setData] = useState<VisitorData>(MOCK_DATA);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => ({
        ...prev,
        count: prev.count + Math.floor(Math.random() * 5) - 2,
        lastUpdated: new Date().toISOString(),
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="flex items-center gap-2 px-4 py-2 glass rounded-full text-sm font-medium text-white hover:bg-white/10 transition-colors"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        <Users className="w-4 h-4" />
        <span>{formatNumber(data.count)} online</span>
      </button>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-full right-0 mt-3 w-80 glass-dark rounded-2xl p-5 z-50"
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold text-white">Live Visitors</h4>
              <div className="flex items-center gap-1 text-green-400 text-sm">
                <TrendingUp className="w-3 h-3" />
                <span>+{data.trend}%</span>
              </div>
            </div>

            <div className="mb-5">
              <div className="text-4xl font-bold text-white mb-1">
                {formatNumber(data.count)}
              </div>
              <div className="text-xs text-white/50">Active right now</div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs text-white/70">
                <MapPin className="w-3 h-3" />
                <span>Top Regions</span>
              </div>
              {data.topCountries.slice(0, 4).map((item, index) => (
                <div key={item.country} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-white/50">{index + 1}.</span>
                    <span className="text-sm text-white/80">{item.country}</span>
                  </div>
                  <span className="text-sm text-white/60">{item.count}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-white/40">
              <Clock className="w-3 h-3" />
              <span>Updated {new Date(data.lastUpdated).toLocaleTimeString()}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function AnimatedCounter({ value, duration = 2000 }: { value: number; duration?: number }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startTime: number;
    const startValue = displayValue;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.floor(startValue + (value - startValue) * easeOut));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value, duration]);

  return <>{displayValue.toLocaleString()}</>;
}

export function StatsSection() {
  const stats = [
    { label: "Active Dealers", value: 500, suffix: "+" },
    { label: "Vehicles Posted", value: 125000, suffix: "+" },
    { label: "Platforms Supported", value: 12, suffix: "" },
    { label: "Uptime", value: 99.9, suffix: "%" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
            <AnimatedCounter value={stat.value} />
            {stat.suffix}
          </div>
          <div className="text-sm text-white/60">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}
