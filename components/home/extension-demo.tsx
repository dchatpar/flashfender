"use client";

import { motion } from "framer-motion";
import { Check, MousePointer2 } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export function ChromeExtensionDemo() {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setStep((prev) => (prev + 1) % 4);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
                        Watch it <span className="text-red-600">Live</span>
                    </h2>
                    <p className="text-xl text-slate-600">
                        See how FlashFender automates your posting workflow in real-time.
                    </p>
                </div>

                <div className="relative aspect-video bg-[#18191A] rounded-xl border border-slate-300 shadow-2xl overflow-hidden max-w-4xl mx-auto">
                    {/* Mock Browser Header */}
                    <div className="h-10 bg-[#242526] border-b border-slate-700 flex items-center px-4 space-x-2">
                        <div className="flex space-x-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-amber-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <div className="flex-1 text-center text-xs text-white/50 font-mono">
                            facebook.com/marketplace/create
                        </div>
                    </div>

                    {/* Mock Facebook Content */}
                    <div className="p-8 grid grid-cols-12 gap-8 h-full">
                        {/* Sidebar */}
                        <div className="col-span-4 space-y-4">
                            <div className="h-4 w-32 bg-[#3A3B3C] rounded animate-pulse" />
                            <div className="space-y-6 mt-8">
                                <div className="space-y-2">
                                    <div className="h-3 w-20 bg-[#3A3B3C] rounded" />
<motion.div
                                        className="h-10 w-full bg-[#242526] border border-[#3A3B3C] rounded px-3 flex items-center text-sm text-white"
                                        initial={{ opacity: 0 }}
                                        animate={step >= 1 ? { borderColor: "#2E89FF", backgroundColor: "#242526", opacity: 1 } : {}}
                                    >
                                        {step >= 1 && (
                                            <motion.span
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                2024 BMW M4 Competition
                                            </motion.span>
                                        )}
                                    </motion.div>
                                </div>
                                <div className="space-y-2">
                                    <div className="h-3 w-16 bg-[#3A3B3C] rounded" />
                                    <motion.div
                                        className="h-10 w-full bg-[#242526] border border-[#3A3B3C] rounded px-3 flex items-center text-sm text-white"
                                        animate={step >= 1 ? { borderColor: "#2E89FF" } : {}}
                                    >
                                        {step >= 1 && (
                                            <motion.span
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.5, delay: 0.2 }}
                                            >
                                                $85,000
                                            </motion.span>
                                        )}
                                    </motion.div>
                                </div>
                                <motion.div
                                    className="h-10 w-32 bg-[#2E89FF] rounded-lg flex items-center justify-center text-white font-medium text-sm"
                                    animate={step >= 2 ? { scale: 0.95 } : {}}
                                >
                                    Publish
                                </motion.div>
                            </div>
                        </div>

                        {/* Preview Area */}
                        <div className="col-span-8 bg-[#242526] rounded-xl p-6 border border-[#3A3B3C]">
                            <div className="aspect-video bg-black/50 rounded-lg mb-4 relative overflow-hidden">
                                <Image
                                    src="/images/luxury_sports_car_pr/luxury_sports_car_pr_0e4545ce1e9d.jpg"
                                    alt="Car Preview"
                                    fill
                                    className="object-cover opacity-80"
                                />
                            </div>
                            <div className="h-6 w-3/4 bg-[#3A3B3C] rounded mb-2" />
                            <div className="h-4 w-1/4 bg-[#3A3B3C] rounded" />
                        </div>
                    </div>

                    {/* Pop-over Extension UI */}
                    <motion.div
                        className="absolute top-16 right-16 w-80 bg-white border border-slate-300 rounded-xl shadow-2xl p-4 overflow-hidden"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <div className="flex items-center justify-between mb-4 border-b border-slate-200 pb-2">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 bg-red-600 rounded-md flex items-center justify-center text-xs font-bold text-white">F</div>
                                <span className="font-semibold text-slate-900 text-sm">FlashFender</span>
                            </div>
                            <div className="text-[10px] text-green-600 flex items-center gap-1 font-medium">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                Active
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-center gap-2 text-xs text-slate-700">
                                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${step >= 1 ? 'bg-green-500 border-green-500 text-white' : 'border-slate-300 text-slate-400'}`}>
                                    {step >= 1 ? <Check size={10} /> : 1}
                                </div>
                                <span>Injecting vehicle data...</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-slate-700">
                                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${step >= 2 ? 'bg-green-500 border-green-500 text-white' : 'border-slate-300 text-slate-400'}`}>
                                    {step >= 2 ? <Check size={10} /> : 2}
                                </div>
                                <span>Generating localized description...</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-slate-700">
                                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${step >= 3 ? 'bg-green-500 border-green-500 text-white' : 'border-slate-300 text-slate-400'}`}>
                                    {step >= 3 ? <Check size={10} /> : 3}
                                </div>
                                <span>Publishing to Marketplace...</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Cursor Simulation */}
                    <motion.div
                        className="absolute z-50 pointer-events-none"
                        animate={{
                            x: step === 0 ? 100 : step === 1 ? 400 : 800,
                            y: step === 0 ? 300 : step === 1 ? 500 : 600,
                        }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    >
                        <MousePointer2 className="w-6 h-6 text-slate-900 drop-shadow-md fill-white" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
