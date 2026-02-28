"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function CTA() {
    return (
        <section className="py-32 relative overflow-hidden">
            {/* Background Image with Light Overlay */}
            <div className="absolute inset-0">
                <Image
                    src="/images/generated/dealership-night.png"
                    alt="Dealership"
                    fill
                    className="object-cover opacity-10"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-slate-50/90 to-white/95" />
                <div className="absolute inset-0 bg-gradient-to-r from-red-50/40 to-blue-50/40" />
            </div>

            {/* Animated Orbs */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-red-200/30 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        className="inline-block mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="glass-strong px-6 py-3 rounded-full inline-flex items-center space-x-3 border border-red-200 shadow-sm">
                            <Sparkles className="w-5 h-5 text-red-600 animate-pulse" />
                            <span className="text-sm font-medium text-slate-900">Start Your Free Trial Today</span>
                        </div>
                    </motion.div>

                    {/* Headline */}
                    <motion.h2
                        className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter text-slate-900"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Ready to{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-blue-600">10X Your Reach</span>?
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Join 500+ dealerships using FlashFender to automate their posting and sell more vehicles
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                size="lg"
                                className="magnetic-button glow-red group text-lg px-12 py-8 bg-red-600 hover:bg-red-700 relative overflow-hidden shadow-lg"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500"
                                    initial={{ x: "-100%" }}
                                    whileHover={{ x: "0%" }}
                                    transition={{ duration: 0.3 }}
                                />
                                <span className="relative z-10 flex items-center font-semibold text-xl text-white">
                                    Start Free Trial
                                    <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={24} />
                                </span>
                            </Button>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button
                                size="lg"
                                variant="outline"
                                className="glass-strong group text-lg px-12 py-8 border-slate-300 hover:border-blue-400 hover:shadow-lg"
                            >
                                <span className="text-xl text-slate-900">Talk to Sales</span>
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div
                        className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-600"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                            <span>No credit card required</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                            <span>14-day free trial</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                            <span>Cancel anytime</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
