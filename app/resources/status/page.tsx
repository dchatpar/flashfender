"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function StatusPage() {
    return (
        <div className="min-h-screen pt-24 pb-20 container mx-auto px-4 max-w-3xl bg-gradient-to-b from-white via-slate-50 to-white">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10" />

            <div className="text-center mb-12">
                <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 border border-green-200 px-4 py-2 rounded-full mb-6">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="font-bold">All Systems Operational</span>
                </div>
                <h1 className="text-4xl font-bold mb-4 text-slate-900">System Status</h1>
                <p className="text-slate-600">Last updated: Just now</p>
            </div>

            <div className="space-y-4">
                {[
                    { name: "API Gateway", status: "Operational", uptime: "99.99%" },
                    { name: "Image Processing Engine", status: "Operational", uptime: "99.95%" },
                    { name: "Chrome Profile Persistence", status: "Operational", uptime: "100.00%" },
                    { name: "Facebook Posting Agent", status: "Operational", uptime: "99.80%" },
                    { name: "Craigslist Posting Agent", status: "Operational", uptime: "99.90%" },
                    { name: "Dashboard UI", status: "Operational", uptime: "100.00%" }
                ].map((service, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow"
                    >
                        <div className="flex items-center space-x-4">
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-sm" />
                            <span className="font-medium text-lg text-slate-900">{service.name}</span>
                        </div>
                        <div className="flex items-center gap-6">
                            <span className="text-sm text-slate-500 hidden sm:block font-medium">{service.uptime} uptime</span>
                            <span className="text-green-600 font-bold bg-green-50 px-3 py-1 rounded-full text-sm">{service.status}</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-12 pt-12 border-t border-slate-200 text-center">
                <h3 className="text-lg font-bold mb-4 text-slate-900">Past Incidents</h3>
                <div className="text-slate-500 text-sm">
                    <p className="mb-2">No incidents reported today.</p>
                </div>
            </div>
        </div>
    );
}
