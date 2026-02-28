"use client";

import { motion } from "framer-motion";
import { Search, User, CreditCard, LifeBuoy, ShieldAlert, MessageCircle, FileText } from "lucide-react";
import { Input } from "@/components/ui/input";

const categories = [
    { icon: User, title: "Account & Profile", desc: "Manage 2FA, team members, and permissions" },
    { icon: CreditCard, title: "Billing & Plans", desc: "Invoices, upgrades, and payment methods" },
    { icon: LifeBuoy, title: "Troubleshooting", desc: "Common errors and posting failures" },
    { icon: ShieldAlert, title: "Security & Safety", desc: "Avoiding bans and proxy configuration" },
    { icon: MessageCircle, title: "Community", desc: "Join our private Discord for strategies" },
    { icon: FileText, title: "API Usage", desc: "Webhooks and integration guides" }
];

export default function HelpCenterPage() {
    return (
        <div className="min-h-screen pt-24 pb-20 container mx-auto px-4 bg-gradient-to-b from-white via-slate-50 to-white">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10" />

            <div className="text-center max-w-3xl mx-auto mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">How can we help?</h1>
                <div className="relative max-w-xl mx-auto">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <Input
                        placeholder="Search for answers..."
                        className="pl-12 h-14 bg-white border-slate-200 rounded-full text-lg shadow-sm text-slate-900 focus-visible:ring-blue-500"
                    />
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
                {categories.map((cat, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -5 }}
                        className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-500/30 transition-all cursor-pointer"
                    >
                        <cat.icon className="w-8 h-8 text-blue-600 mb-4" />
                        <h3 className="text-xl font-bold mb-2 text-slate-900">{cat.title}</h3>
                        <p className="text-slate-600">{cat.desc}</p>
                    </motion.div>
                ))}
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm max-w-4xl mx-auto text-center">
                <h3 className="text-2xl font-bold mb-4 text-slate-900">Still need help?</h3>
                <p className="text-slate-600 mb-6">Our support team is available Mon-Fri, 9am - 5pm EST.</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors shadow-sm">
                    Contact Support
                </button>
            </div>
        </div>
    );
}
