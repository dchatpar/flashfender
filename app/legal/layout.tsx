"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const sidebarItems = [
    { href: "/legal/privacy", label: "Privacy Policy" },
    { href: "/legal/terms", label: "Terms of Service" },
    { href: "/legal/cookie-policy", label: "Cookie Policy" },
    { href: "/legal/gdpr", label: "GDPR Compliance" },
];

export default function LegalLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <div className="min-h-screen pt-24 pb-20 container mx-auto px-4 bg-gradient-to-b from-white via-slate-50 to-white">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10" />

            <div className="grid md:grid-cols-4 gap-8">
                {/* Sidebar Navigation */}
                <aside className="md:col-span-1">
                    <div className="sticky top-24 space-y-2">
                        <h3 className="font-bold text-lg mb-4 px-3 text-slate-900">Legal Center</h3>
                        <nav className="flex flex-col space-y-1">
                            {sidebarItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "px-3 py-2 rounded-lg text-sm transition-colors font-medium",
                                        pathname === item.href
                                            ? "bg-blue-50 text-blue-600"
                                            : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                                    )}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </aside>

                {/* Content Area */}
                <main className="md:col-span-3">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="prose prose-slate max-w-none bg-white p-8 rounded-2xl border border-slate-200 shadow-sm"
                    >
                        {children}
                    </motion.div>
                </main>
            </div>
        </div>
    );
}
