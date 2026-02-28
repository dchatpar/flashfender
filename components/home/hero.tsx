"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Check, Zap, ChevronDown, MousePointer2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [counters, setCounters] = useState({ platforms: 0, seconds: 0, unique: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Counter animation
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounters({
        platforms: Math.round(10 * easeOut),
        seconds: Math.round(30 * easeOut),
        unique: Math.round(100 * easeOut)
      });

      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight * 0.8, behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-red-100/40 rounded-full blur-[150px] animate-pulse"
          style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }}
        />
        <div 
          className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-100/40 rounded-full blur-[150px] animate-pulse"
          style={{ animationDelay: "2s", transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)` }}
        />
        <div 
          className="absolute top-[30%] left-[30%] w-[40%] h-[40%] bg-purple-100/30 rounded-full blur-[100px]"
          style={{ transform: `translate(${mousePosition.x * -0.2}px, ${mousePosition.y * -0.2}px)` }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-red-500/20 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
              animation: `float-particle ${8 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Centered Content */}
          <div className="text-center space-y-8">
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-white/90 border border-slate-200 rounded-full px-5 py-2.5 hover:bg-white transition-colors backdrop-blur-md shadow-sm group cursor-pointer"
              onClick={scrollToContent}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-slate-700 group-hover:text-red-600 transition-colors">v2.0 Now Available</span>
              <ChevronDown className="w-4 h-4 text-slate-500" />
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter leading-[1.1]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block text-slate-900">
                Scale Your
              </span>
              <span className="block gradient-text bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-purple-600 to-blue-600">
                Inventory Reach
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-lg md:text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              The only AI-powered platform that auto-posts your vehicles to 10+ marketplaces instantly. 
              <span className="text-slate-900 font-medium"> No shadow bans. No manual work. No limits.</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="magnetic-button text-lg px-8 py-6 bg-red-600 text-white hover:bg-red-700 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 w-full sm:w-auto"
              >
                Start Free Trial
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 rounded-full border-slate-300 hover:bg-slate-100 backdrop-blur-sm transition-all hover:scale-105 text-slate-700 w-full sm:w-auto"
              >
                <Play className="mr-2" size={20} />
                Watch Demo
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="pt-8 flex flex-wrap items-center justify-center gap-6 md:gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-green-600" />
                </div>
                <span className="font-medium">500+ Dealerships</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                  <Zap className="w-3 h-3 text-blue-600" />
                </div>
                <span className="font-medium">10+ Platforms</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <div className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-purple-600" />
                </div>
                <span className="font-medium">99.9% Uptime</span>
              </div>
            </motion.div>

            {/* Stats Cards */}
            <motion.div
              ref={statsRef}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {/* Stat 1 */}
              <div className="glass p-5 md:p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all group cursor-pointer">
                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">
                  {counters.platforms}<span className="text-red-600 text-2xl">+</span>
                </div>
                <div className="text-sm text-slate-600 font-medium">Platforms Supported</div>
              </div>

              {/* Stat 2 */}
              <div className="glass p-5 md:p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all group cursor-pointer">
                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">
                  {counters.seconds}<span className="text-blue-600 text-xl ml-1">sec</span>
                </div>
                <div className="text-sm text-slate-600 font-medium">Average Post Time</div>
              </div>

              {/* Stat 3 */}
              <div className="glass p-5 md:p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all group cursor-pointer">
                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">
                  {counters.unique}<span className="text-green-600 text-2xl">%</span>
                </div>
                <div className="text-sm text-slate-600 font-medium">Unique Content</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={scrollToContent}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-slate-400"
        >
          <MousePointer2 className="w-5 h-5 mb-2" />
          <div className="w-6 h-10 rounded-full border-2 border-slate-300 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-3 bg-slate-400 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>

      <style jsx global>{`
        @keyframes float-particle {
          0%, 100% { 
            transform: translateY(0) translateX(0); 
            opacity: 0; 
          }
          10% { opacity: 0.6; }
          50% { 
            transform: translateY(-50px) translateX(20px); 
            opacity: 0.3; 
          }
          90% { opacity: 0.6; }
          100% { 
            transform: translateY(-100px) translateX(-10px); 
            opacity: 0; 
          }
        }
      `}</style>
    </section>
  );
}
