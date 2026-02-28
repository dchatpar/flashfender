"use client";

import { motion } from "framer-motion";
import { WistiaVideo } from "@/components/ui/wistia-video";

export function VideoShowcase() {
    return (
        <section className="py-24 px-6 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
                        See How It <span className="text-red-600">Works</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Watch our comprehensive guide and platform demo to see how FlashFender transforms your dealership's marketing.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Usage Guide */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
                            <div className="p-1">
                                <WistiaVideo videoId="owkchvelbj" />
                            </div>
                        </div>
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Usage Guide</h3>
                            <p className="text-slate-600">Step-by-step walkthrough of the platform features.</p>
                        </div>
                    </motion.div>

                    {/* App Demo */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
                            <div className="p-1">
                                <WistiaVideo videoId="fgwpwbcr7d" />
                            </div>
                        </div>
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Platform Demo</h3>
                            <p className="text-slate-600">See the platform in action with real-world examples.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
