"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Send, MessageSquare, Twitter, Linkedin, Facebook, Instagram, CheckCircle2, Loader2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const socialLinks = [
    { icon: Twitter, label: "Twitter", href: "#", color: "hover:bg-blue-400" },
    { icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:bg-blue-600" },
    { icon: Facebook, label: "Facebook", href: "#", color: "hover:bg-blue-500" },
    { icon: Instagram, label: "Instagram", href: "#", color: "hover:bg-pink-500" },
];

const faqs = [
    { q: "How quickly can I get set up?", a: "Most dealerships are up and running within 24 hours. Our team handles the entire onboarding process." },
    { q: "Do you offer training?", a: "Yes! Every customer gets a dedicated onboarding call and access to our video training library." },
    { q: "What platforms do you support?", a: "We support 10+ platforms including Facebook Marketplace, Craigslist, OfferUp, and Autotrader." },
    { q: "Is there a contract?", a: "No long-term contracts. Month-to-month billing with no cancellation fees." },
];

const departments = [
    { name: "Sales", email: "sales@flashfender.com", response: "Within 2 hours" },
    { name: "Support", email: "support@flashfender.com", response: "Within 4 hours" },
    { name: "Partnerships", email: "partners@flashfender.com", response: "Within 24 hours" },
];

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        message: ""
    });

    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    const validateForm = () => {
        const newErrors: Record<string, string> = {};
        
        if (!formData.firstName) newErrors.firstName = "First name is required";
        if (!formData.lastName) newErrors.lastName = "Last name is required";
        if (!formData.email) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";
        if (!formData.message) newErrors.message = "Message is required";
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!validateForm()) return;
        
        setIsSubmitting(true);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        setIsSubmitting(false);
        setIsSuccess(true);
    };

    const handleInput = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: "" }));
        }
    };

    if (isSuccess) {
        return (
            <main className="min-h-screen pt-24 pb-20 flex items-center justify-center bg-gradient-to-b from-white via-slate-50 to-white">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center p-8"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                        className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                        <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </motion.div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Message Sent!</h2>
                    <p className="text-slate-600 mb-8 max-w-md">
                        Thank you for reaching out. We'll get back to you within 2 hours during business hours.
                    </p>
                    <Button 
                        onClick={() => setIsSuccess(false)}
                        className="bg-red-600 hover:bg-red-700 text-white rounded-full"
                    >
                        Send Another Message
                    </Button>
                </motion.div>
            </main>
        );
    }

    return (
        <main ref={containerRef} className="min-h-screen pt-24 pb-20 relative overflow-hidden flex flex-col justify-center bg-gradient-to-b from-white via-slate-50 to-white">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/30 blur-[120px] rounded-full pointer-events-none opacity-50 -z-10" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-100/30 blur-[120px] rounded-full pointer-events-none opacity-50 -z-10" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                    {/* Left Column: Info & Branding */}
                    <div className="pt-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight text-slate-900">
                                Let&apos;s Scale <br />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-purple-600 to-blue-600">Your Sales.</span>
                            </h1>
                            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
                                Ready to automate your inventory? Our team is ready to set up your custom demo environment.
                            </p>

                            {/* Response Time Banner */}
                            <div className="mb-8 p-4 bg-green-50 rounded-xl border border-green-200">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                                    <p className="text-green-700 font-medium">Average response time: 2 hours during business hours</p>
                                </div>
                            </div>

                            <div className="space-y-6 mb-8">
                                <div className="flex items-start space-x-4 group cursor-pointer">
                                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center group-hover:bg-blue-100 group-hover:border-blue-300 transition-all">
                                        <Mail className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1 text-slate-900">Email Us</h3>
                                        <p className="text-slate-600 group-hover:text-blue-600 transition-colors">hello@flashfender.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4 group cursor-pointer">
                                    <div className="w-12 h-12 rounded-xl bg-green-50 border border-green-200 flex items-center justify-center group-hover:bg-green-100 group-hover:border-green-300 transition-all">
                                        <MessageSquare className="w-5 h-5 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1 text-slate-900">Live Chat</h3>
                                        <p className="text-slate-600">Available Mon-Fri, 9am - 6pm EST</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4 group cursor-pointer">
                                    <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center group-hover:bg-red-100 group-hover:border-red-300 transition-all">
                                        <MapPin className="w-5 h-5 text-red-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1 text-slate-900">HQ</h3>
                                        <p className="text-slate-600">1055 W Georgia St, Vancouver, BC</p>
                                    </div>
                                </div>
                            </div>

                            {/* Department Quick Contacts */}
                            <div className="mb-8">
                                <h3 className="font-semibold text-lg mb-4 text-slate-900">Quick Contact</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    {departments.map((dept) => (
                                        <a
                                            key={dept.name}
                                            href={`mailto:${dept.email}`}
                                            className="p-3 bg-white rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all"
                                        >
                                            <div className="font-medium text-slate-900 text-sm">{dept.name}</div>
                                            <div className="text-xs text-slate-500">{dept.response}</div>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Social Links */}
                            <div>
                                <h3 className="font-semibold text-lg mb-4 text-slate-900">Follow Us</h3>
                                <div className="flex gap-3">
                                    {socialLinks.map((social, i) => (
                                        <a
                                            key={i}
                                            href={social.href}
                                            className={`w-11 h-11 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 ${social.color} text-white transition-all hover:scale-110 hover:shadow-lg`}
                                            aria-label={social.label}
                                        >
                                            <social.icon className="w-5 h-5" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200 shadow-xl relative overflow-hidden">
                            {/* Form Background Accent */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 blur-[60px] rounded-full pointer-events-none" />

                            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700">First Name</label>
                                        <Input 
                                            value={formData.firstName}
                                            onChange={(e) => handleInput("firstName", e.target.value)}
                                            className={`bg-white border-slate-200 focus:border-blue-500 h-12 rounded-xl text-slate-900 ${errors.firstName ? "border-red-500" : ""}`}
                                            placeholder="John" 
                                        />
                                        {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700">Last Name</label>
                                        <Input 
                                            value={formData.lastName}
                                            onChange={(e) => handleInput("lastName", e.target.value)}
                                            className={`bg-white border-slate-200 focus:border-blue-500 h-12 rounded-xl text-slate-900 ${errors.lastName ? "border-red-500" : ""}`}
                                            placeholder="Doe" 
                                        />
                                        {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName}</p>}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">Work Email</label>
                                    <Input 
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => handleInput("email", e.target.value)}
                                        className={`bg-white border-slate-200 focus:border-blue-500 h-12 rounded-xl text-slate-900 ${errors.email ? "border-red-500" : ""}`}
                                        placeholder="john@dealership.com" 
                                    />
                                    {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">Dealership Name (Optional)</label>
                                    <Input 
                                        value={formData.company}
                                        onChange={(e) => handleInput("company", e.target.value)}
                                        className="bg-white border-slate-200 focus:border-blue-500 h-12 rounded-xl text-slate-900"
                                        placeholder="Prestige Auto" 
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">How can we help?</label>
                                    <Textarea 
                                        value={formData.message}
                                        onChange={(e) => handleInput("message", e.target.value)}
                                        className={`bg-white border-slate-200 focus:border-blue-500 rounded-xl min-h-[120px] text-slate-900 ${errors.message ? "border-red-500" : ""}`}
                                        placeholder="Tell us about your inventory size and current goals..." 
                                    />
                                    {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
                                </div>

                                <Button 
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full h-14 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-500/20 hover:shadow-xl transition-all disabled:opacity-50"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message <Send className="ml-2 w-5 h-5" />
                                        </>
                                    )}
                                </Button>
                            </form>
                        </div>
                    </motion.div>
                </div>

                {/* FAQ Section */}
                <section className="container mx-auto px-4 py-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.4 }}
                        className="max-w-3xl mx-auto"
                    >
                        <h2 className="text-3xl font-bold text-center mb-10 text-slate-900">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {faqs.map((faq, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-md transition-shadow"
                                >
                                    <h3 className="font-semibold mb-2 text-slate-900">{faq.q}</h3>
                                    <p className="text-slate-600">{faq.a}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </section>
            </div>
        </main>
    );
}
