"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Star, Quote, ShieldCheck, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

const testimonials = [
  {
    name: "Michael Rodriguez",
    role: "Owner, Premium Auto Sales",
    content: "FlashFender increased our reach by 300%. We're posting to 8 platforms in the time it used to take for one. The AI content generation is game-changing. Our sales have literally doubled since we started using it.",
    rating: 5,
    highlight: "300% Reach Increase",
    video: null
  },
  {
    name: "Sarah Chen",
    role: "Managing Director, Elite Motors",
    content: "The AI content generation is incredible. Every post is unique and engaging. No more shadow bans. No more duplicate content penalties. We've been able to scale our operations without any of the usual headaches.",
    rating: 5,
    highlight: "Zero Shadow Bans",
    video: null
  },
  {
    name: "David Thompson",
    role: "General Manager, AutoHub",
    content: "ROI was immediate. We sold 40% more vehicles in the first month. The analytics dashboard gives us insights we never had before. It's like having a full marketing team working 24/7.",
    rating: 5,
    highlight: "40% More Sales",
    video: null
  },
  {
    name: "Jennifer Martinez",
    role: "Founder, QuickSell Motors",
    content: "I was skeptical at first, but after seeing the results, I'm a believer. The automation saves us 20+ hours per week on posting. That's time we can spend actually selling cars.",
    rating: 5,
    highlight: "20+ Hours Saved/Week",
    video: null
  },
  {
    name: "Robert Kim",
    role: "Director of Sales, Valley Auto Group",
    content: "The platform integration with our DMS was seamless. Within 24 hours we were fully operational. The support team has been incredible every step of the way.",
    rating: 5,
    highlight: "24hr Setup Time",
    video: null
  },
];

const companies = [
  "Premium Auto Sales", "Elite Motors", "AutoHub", "QuickSell Motors", "Valley Auto Group", "Metro Dealerships"
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isAutoPlay || !isInView) return;
    
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlay, isInView]);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const goToPrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  return (
    <section ref={containerRef} className="py-20 md:py-24 relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-100/30 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-white/90 border border-slate-200 rounded-full px-4 py-1.5 mb-6 hover:bg-white transition-colors shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-medium text-slate-700">Verified Success Stories</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 tracking-tight text-slate-900">
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>

          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Join 500+ dealerships using FlashFender to dominate their local market.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="relative bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
            {/* Quote Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-50/50 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl" />

            <div className="relative p-8 md:p-12">
              {/* Navigation */}
              <div className="absolute top-6 right-6 flex items-center gap-2">
                <button
                  onClick={goToPrev}
                  className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 text-slate-600" />
                </button>
                <button
                  onClick={goToNext}
                  className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5 text-slate-600" />
                </button>
              </div>

              {/* Auto-play Toggle */}
              <button
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className="absolute top-6 left-6 p-2 rounded-full hover:bg-slate-100 transition-colors"
                aria-label={isAutoPlay ? "Pause autoplay" : "Play autoplay"}
              >
                {isAutoPlay ? (
                  <Pause className="w-5 h-5 text-slate-400" />
                ) : (
                  <Play className="w-5 h-5 text-slate-400" />
                )}
              </button>

              {/* Testimonial Content */}
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Quote Icon */}
                  <div className="mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <Quote className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>

                  {/* Highlight Badge */}
                  <div className="inline-block px-4 py-1.5 bg-green-100 text-green-700 text-sm font-semibold rounded-full mb-6">
                    {testimonials[currentIndex].highlight}
                  </div>

                  {/* Content */}
                  <p className="text-lg md:text-xl text-slate-700 mb-8 leading-relaxed max-w-2xl">
                    &ldquo;{testimonials[currentIndex].content}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {testimonials[currentIndex].name.charAt(0)}
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-slate-900">{testimonials[currentIndex].name}</div>
                      <div className="text-sm text-slate-600">{testimonials[currentIndex].role}</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex 
                        ? "bg-red-600 w-8" 
                        : "bg-slate-300 hover:bg-slate-400"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <p className="text-sm text-slate-500 mb-6 uppercase tracking-wider">Trusted by dealerships nationwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            {companies.map((company) => (
              <div key={company} className="text-lg md:text-xl font-bold text-slate-400">
                {company}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
