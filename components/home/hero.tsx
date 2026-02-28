"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ParticleCanvas } from "@/components/effects/particle-canvas";
import { HudStatBox } from "@/components/ui/hud-label";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight * 0.8, behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex overflow-hidden bg-quantum-bg-primary">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 tech-grid opacity-50" />

      {/* Split Screen Layout */}
      <div className="relative w-full min-h-screen grid grid-cols-1 lg:grid-cols-2">

        {/* Center Divider */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-quantum-border z-20 hidden lg:block" />

        {/* LEFT PANE - Typography & UI */}
        <div className="relative z-10 flex flex-col justify-center px-6 lg:px-16 py-20 lg:py-0">
          {/* Background Schematic (barely visible) */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 800 600">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-quantum-cyan" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              {/* Quantum circuit lines */}
              <path d="M 100 200 L 200 200 L 200 150 L 300 150 L 300 250 L 400 250" fill="none" stroke="currentColor" strokeWidth="1" className="text-quantum-cyan" />
              <path d="M 150 400 L 250 400 L 250 350 L 350 350 L 350 450 L 450 450" fill="none" stroke="currentColor" strokeWidth="1" className="text-quantum-violet" />
              <circle cx="300" cy="250" r="8" fill="none" stroke="currentColor" strokeWidth="1" className="text-quantum-cyan" />
              <circle cx="350" cy="450" r="8" fill="none" stroke="currentColor" strokeWidth="1" className="text-quantum-violet" />
            </svg>
          </div>

          <div className="max-w-xl">
            {/* Overline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6 }}
              className="font-mono text-xs tracking-[0.3em] uppercase text-quantum-cyan mb-6"
            >
              <span className="opacity-50">{'//'}</span> Generate Once, Publish Everywhere
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span className="block text-white">
                One piece of
              </span>
              <span className="block text-quantum-cyan font-light">
                content.
              </span>
              <span className="block text-white mt-2">
                Every platform.
              </span>
              <span className="block text-quantum-violet font-light">
                Instantly.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="font-mono text-sm text-white/60 leading-relaxed mb-8 max-w-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Zero-latency neural bridging enables simultaneous multi-platform syndication.
              Our quantum-ready architecture processes vehicle data streams with{' '}
              <span className="text-quantum-cyan">sub-millisecond</span> precision.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Sign in with tech brackets */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-quantum-cyan to-quantum-violet rounded-lg opacity-50 blur transition duration-500 group-hover:opacity-100" />
                <Button
                  size="lg"
                  className="relative bg-quantum-bg-primary/80 backdrop-blur-sm border border-quantum-cyan/30 text-white hover:bg-quantum-cyan/10 rounded-lg font-mono text-sm px-6 py-3"
                >
                  Sign in
                </Button>
              </div>

              {/* Learn more - solid */}
              <Button
                size="lg"
                className="bg-quantum-cyan text-quantum-bg-primary hover:bg-white font-semibold rounded-lg px-6 py-3 transition-all hover:scale-105"
              >
                Learn more
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <HudStatBox value="128Q" label="Quantum" />
              <HudStatBox value="0.01ms" label="Latency" />
              <HudStatBox value="10+" label="Platforms" />
              <HudStatBox value="99.9%" label="Uptime" />
            </motion.div>
          </div>
        </div>

        {/* RIGHT PANE - Particle Visualization */}
        <div className="relative hidden lg:block">
          {/* Particle Canvas */}
          <div className="absolute inset-0">
            <ParticleCanvas particleCount={8000} />
          </div>

          {/* HUD Labels floating over particles */}
          <div className="absolute inset-0 pointer-events-none z-10">
            {/* HUD Label 1 */}
            <motion.div
              className="absolute top-1/4 right-1/4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="hud-label">
                <span className="text-quantum-cyan">Cryo-State:</span> 15mK
              </div>
              {/* HUD Line */}
              <svg className="absolute -left-24 top-1/2 w-24 h-px" viewBox="0 0 96 1">
                <line x1="0" y1="0" x2="96" y2="0" stroke="rgba(0, 255, 255, 0.3)" strokeWidth="1" />
              </svg>
            </motion.div>

            {/* HUD Label 2 */}
            <motion.div
              className="absolute top-1/3 left-1/4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="hud-label">
                <span className="text-quantum-violet">Entanglement:</span> 847:1
              </div>
              {/* HUD Line */}
              <svg className="absolute -right-24 top-1/2 w-24 h-px" viewBox="0 0 96 1">
                <line x1="96" y1="0" x2="0" y2="0" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="1" />
              </svg>
            </motion.div>

            {/* HUD Label 3 */}
            <motion.div
              className="absolute bottom-1/3 right-1/3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="hud-label">
                <span className="text-quantum-magenta">Neural Sync:</span> Active
              </div>
            </motion.div>

            {/* HUD Label 4 */}
            <motion.div
              className="absolute bottom-1/4 left-1/3"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <div className="hud-label">
                <span className="text-quantum-orange">Processing:</span> 2.4TB/s
              </div>
            </motion.div>
          </div>

          {/* Radial Glow Backlight */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none">
            <div
              className="w-full h-full rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(0, 255, 255, 0.15) 0%, rgba(139, 92, 246, 0.08) 40%, transparent 70%)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Mobile version - stacked layout */}
      <div className="lg:hidden relative min-h-screen">
        <ParticleCanvas particleCount={3000} className="!fixed" />

        <div className="relative z-10 flex flex-col justify-center px-6 py-20">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-mono text-xs tracking-[0.3em] uppercase text-quantum-cyan mb-6"
            >
              <span className="opacity-50">{'//'}</span> Generate Once, Publish Everywhere
            </motion.div>

            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span className="block text-white">
                One piece of
              </span>
              <span className="block text-quantum-cyan font-light">
                content.
              </span>
              <span className="block text-white mt-2">
                Every platform.
              </span>
              <span className="block text-quantum-violet font-light">
                Instantly.
              </span>
            </motion.h1>

            <motion.p
              className="font-mono text-sm text-white/60 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Zero-latency neural bridging enables simultaneous multi-platform syndication.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Button
                size="lg"
                className="bg-quantum-bg-primary/80 backdrop-blur-sm border border-quantum-cyan/30 text-white rounded-lg font-mono text-sm px-6 py-3"
              >
                Sign in
              </Button>
              <Button
                size="lg"
                className="bg-quantum-cyan text-quantum-bg-primary hover:bg-white font-semibold rounded-lg px-6 py-3"
              >
                Learn more
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <HudStatBox value="128Q" label="Quantum" />
              <HudStatBox value="0.01ms" label="Latency" />
              <HudStatBox value="10+" label="Platforms" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={scrollToContent}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-quantum-cyan/50"
        >
          <div className="w-6 h-10 rounded-full border border-quantum-cyan/30 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-quantum-cyan/50 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
