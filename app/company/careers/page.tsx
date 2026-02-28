"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, X, Upload, Heart, Zap, Users, Coffee } from "lucide-react";

const benefits = [
    { icon: Heart, title: "Health & Wellness", desc: "Comprehensive medical, dental, and vision coverage for you and your family." },
    { icon: Zap, title: "Remote-First", desc: "Work from anywhere. Quarterly team retreats in fun locations." },
    { icon: Coffee, title: "Unlimited PTO", desc: "Take what you need. We trust you to manage your own time." },
    { icon: Users, title: "Equity", desc: "Every employee gets meaningful equity. We're all owners here." },
    { icon: CheckCircle2, title: "Learning Budget", desc: "$2,000/year for courses, conferences, and books." },
    { icon: Heart, title: "Parental Leave", desc: "16 weeks paid leave for new parents, regardless of how you became one." },
];

const values = [
    "Ship every week. Perfection is the enemy of progress.",
    "Own the problem end-to-end. No passing the buck.",
    "Default to transparency. Share context, not just answers.",
    "Disagree and commit. Once decided, execute fully.",
];

export default function CareersPage() {
    const [selectedJob, setSelectedJob] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleApply = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            setTimeout(() => {
                setIsSuccess(false);
                setSelectedJob(null);
            }, 2000);
        }, 1500);
    };

    return (
        <div className="min-h-screen pt-24 pb-20 container mx-auto px-4 bg-gradient-to-b from-white via-slate-50 to-white">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10" />

            <div className="max-w-4xl mx-auto text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Pit Crew</span></h1>
                <p className="text-xl text-slate-600 mb-8">
                    We&apos;re building the operating system for modern dealerships. Fast-paced, high-impact, and fully remote.
                </p>
                <div className="flex justify-center gap-4 text-sm font-medium text-slate-700">
                    <span className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-green-500" /> Remote-First</span>
                    <span className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-green-500" /> Competitive Equity</span>
                    <span className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-green-500" /> Unlimited PTO</span>
                </div>
            </div>

            <div className="max-w-4xl mx-auto mb-20">
                <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 md:p-12 border border-slate-200">
                    <h2 className="text-2xl font-bold mb-6 text-slate-900 text-center">Why Join FlashFender?</h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-8">
                        We&apos;re not your typical startup. We move fast, ship constantly, and obsess over our customers&apos; success. 
                        Every line of code you write impacts 500+ dealerships and millions of car buyers. You&apos;ll work alongside 
                        former dealership operators who understand the pain points you&apos;re solving—because they lived them.
                    </p>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        No politics. No bureaucracy. Just talented people solving hard problems together. We hire the best, 
                        give them autonomy, and get out of their way.
                    </p>
                </div>
            </div>

            <div className="max-w-5xl mx-auto mb-20">
                <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Benefits & Perks</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-all"
                        >
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center mb-4">
                                <benefit.icon className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-slate-900">{benefit.title}</h3>
                            <p className="text-slate-600 text-sm">{benefit.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="max-w-3xl mx-auto mb-16">
                <h2 className="text-2xl font-bold text-center mb-8 text-slate-900">Our Operating Principles</h2>
                <div className="space-y-4">
                    {values.map((value, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-4 rounded-xl border border-slate-200 flex items-center"
                        >
                            <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-4 flex-shrink-0">
                                <span className="text-red-600 font-bold text-sm">{i + 1}</span>
                            </div>
                            <p className="text-slate-700 font-medium">{value}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
                {[
                    { title: "Senior Full Stack Engineer", dept: "Engineering", loc: "Remote (US/EU)" },
                    { title: "AI Research Scientist", dept: "Research", loc: "Remote (Global)" },
                    { title: "Enterprise Account Executive", dept: "Sales", loc: "New York / Remote" },
                    { title: "Customer Success Manager", dept: "Support", loc: "Remote (US)" }
                ].map((job, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between group hover:border-blue-500 hover:shadow-md transition-all"
                    >
                        <div>
                            <h3 className="text-xl font-bold mb-1 text-slate-900 group-hover:text-blue-600 transition-colors">{job.title}</h3>
                            <div className="flex items-center space-x-4 text-sm text-slate-500">
                                <span>{job.dept}</span>
                                <span>•</span>
                                <span>{job.loc}</span>
                            </div>
                        </div>
                        <Button
                            onClick={() => setSelectedJob(job.title)}
                            variant="outline"
                            className="opacity-0 group-hover:opacity-100 transition-opacity border-blue-200 text-blue-600 hover:bg-blue-50"
                        >
                            Apply Now
                        </Button>
                    </motion.div>
                ))}
            </div>

            {/* Application Modal */}
            <AnimatePresence>
                {selectedJob && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedJob(null)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl p-8 z-10"
                        >
                            <button
                                onClick={() => setSelectedJob(null)}
                                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {isSuccess ? (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle2 className="w-8 h-8 text-green-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Application Sent!</h3>
                                    <p className="text-slate-600">We&apos;ll be in touch soon.</p>
                                </div>
                            ) : (
                                <>
                                    <h2 className="text-2xl font-bold text-slate-900 mb-1">Apply for {selectedJob}</h2>
                                    <p className="text-slate-600 mb-6 text-sm">Join the team and help us ship faster.</p>

                                    <form onSubmit={handleApply} className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="firstName">First Name</Label>
                                                <Input id="firstName" placeholder="Jane" required />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="lastName">Last Name</Label>
                                                <Input id="lastName" placeholder="Doe" required />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input id="email" type="email" placeholder="jane@example.com" required />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="resume">Resume/CV</Label>
                                            <div className="border-2 border-dashed border-slate-200 rounded-lg p-6 text-center cursor-pointer hover:border-blue-400 hover:bg-blue-50/50 transition-colors">
                                                <Upload className="w-6 h-6 text-slate-400 mx-auto mb-2" />
                                                <p className="text-sm text-slate-600 font-medium">Click to upload or drag and drop</p>
                                                <p className="text-xs text-slate-400 mt-1">PDF, DOCX up to 10MB</p>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="coverLetter">Cover Letter (Optional)</Label>
                                            <Textarea id="coverLetter" placeholder="Tell us why you'd be a great fit..." className="h-24" />
                                        </div>

                                        <div className="pt-2">
                                            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white" disabled={isSubmitting}>
                                                {isSubmitting ? "Sending..." : "Submit Application"}
                                            </Button>
                                        </div>
                                    </form>
                                </>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
