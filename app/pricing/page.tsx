"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Check, X, Sparkles, Zap, Crown, ArrowRight, Shield, BarChart3, Globe, ChevronDown, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
    {
        name: "Starter",
        price: 299,
        period: "/month",
        description: "Perfect for small dealerships getting started",
        icon: Sparkles,
        gradient: "from-blue-500 to-cyan-400",
        features: [
            { name: "1 Organization", included: true },
            { name: "Up to 50 vehicles", included: true },
            { name: "3 active agents", included: true },
            { name: "1,000 posts/month", included: true },
            { name: "Facebook Marketplace only", included: true },
            { name: "Email support", included: true },
            { name: "Basic analytics", included: true },
            { name: "AI content generation", included: false },
            { name: "Image modification", included: false },
            { name: "Priority support", included: false },
        ],
        cta: "Start Free Trial",
        popular: false,
    },
    {
        name: "Professional",
        price: 1200,
        period: "/month",
        description: "Most popular for growing dealerships",
        icon: Zap,
        gradient: "from-purple-500 to-pink-500",
        features: [
            { name: "1 Organization", included: true },
            { name: "Unlimited vehicles", included: true },
            { name: "10 active agents", included: true },
            { name: "5,000 posts/month", included: true },
            { name: "All platforms included", included: true },
            { name: "Priority support", included: true },
            { name: "Advanced analytics", included: true },
            { name: "AI content generation", included: true },
            { name: "Image modification", included: true },
            { name: "Smart scheduling", included: true },
        ],
        cta: "Start Free Trial",
        popular: true,
    },
    {
        name: "Enterprise",
        price: null,
        period: "",
        description: "For large dealership groups",
        icon: Crown,
        gradient: "from-orange-500 to-red-500",
        features: [
            { name: "Multiple organizations", included: true },
            { name: "Unlimited everything", included: true },
            { name: "Unlimited agents", included: true },
            { name: "Unlimited posts", included: true },
            { name: "White-label option", included: true },
            { name: "Dedicated account manager", included: true },
            { name: "Custom integrations", included: true },
            { name: "API access", included: true },
            { name: "SLA guarantee", included: true },
            { name: "Custom training", included: true },
        ],
        cta: "Contact Sales",
        popular: false,
    },
];

const comparisonFeatures = [
    {
        category: "Core Features", icon: Shield, items: [
            { name: "Organizations", starter: "1", pro: "1", enterprise: "Unlimited" },
            { name: "Vehicles", starter: "50", pro: "Unlimited", enterprise: "Unlimited" },
            { name: "Active Agents", starter: "3", pro: "10", enterprise: "Unlimited" },
            { name: "Posts per Month", starter: "1,000", pro: "5,000", enterprise: "Unlimited" },
        ]
    },
    {
        category: "Platforms", icon: Globe, items: [
            { name: "Facebook Marketplace", starter: true, pro: true, enterprise: true },
            { name: "Craigslist", starter: false, pro: true, enterprise: true },
            { name: "OfferUp", starter: false, pro: true, enterprise: true },
            { name: "All 10+ Platforms", starter: false, pro: true, enterprise: true },
        ]
    },
    {
        category: "AI Features", icon: Sparkles, items: [
            { name: "AI Content Generation", starter: false, pro: true, enterprise: true },
            { name: "Image Modification", starter: false, pro: true, enterprise: true },
            { name: "Smart Scheduling", starter: false, pro: true, enterprise: true },
        ]
    },
    {
        category: "Support & Analytics", icon: BarChart3, items: [
            { name: "Email Support", starter: true, pro: true, enterprise: true },
            { name: "Priority Support", starter: false, pro: true, enterprise: true },
            { name: "Dedicated Manager", starter: false, pro: false, enterprise: true },
            { name: "Advanced Analytics", starter: false, pro: true, enterprise: true },
        ]
    },
];

const faqs = [
    {
        q: "Can I change plans later?",
        a: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately. Downgrades are prorated, and you'll only pay the difference.",
    },
    {
        q: "What happens after the free trial?",
        a: "After 14 days, you'll be automatically charged for your selected plan. Cancel anytime before the trial ends to avoid charges. No questions asked.",
    },
    {
        q: "Do you offer refunds?",
        a: "Yes, we offer a 30-day money-back guarantee on all plans. If you're not satisfied, contact us for a full refund. No questions asked.",
    },
    {
        q: "Can I add more agents?",
        a: "Professional and Enterprise plans allow additional agents. Contact us for custom pricing on additional agents beyond your plan's limit.",
    },
    {
        q: "Is there a contract?",
        a: "No long-term contracts. All plans are month-to-month with no cancellation fees. Annual plans available with 20% discount.",
    },
    {
        q: "Do you offer training?",
        a: "Yes! Every customer gets a dedicated onboarding call and access to our comprehensive video training library. Enterprise customers receive custom training.",
    },
    {
        q: "What platforms do you support?",
        a: "We support 10+ platforms including Facebook Marketplace, Instagram, Autotrader, Cars.com, eBay Motors, Craigslist, OfferUp, and CarGurus.",
    },
    {
        q: "How long does setup take?",
        a: "Most dealerships are up and running within 24 hours. Our team handles the entire onboarding process including integration with your existing systems.",
    },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.05 }}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-slate-50 transition-colors"
            >
                <span className="font-semibold text-slate-900 pr-4">{faq.q}</span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? "bg-red-100" : "bg-slate-100"}`}>
                    {isOpen ? <Minus className="w-4 h-4 text-red-600" /> : <Plus className="w-4 h-4 text-slate-600" />}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="px-5 md:px-6 pb-5 md:pb-6">
                            <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

function TrustBadge({ icon: Icon, label }: { icon: any; label: string }) {
    return (
        <div className="flex items-center gap-2 text-slate-600">
            <Icon className="w-5 h-5 text-green-500" />
            <span className="text-sm font-medium">{label}</span>
        </div>
    );
}

export default function PricingPage() {
    const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    return (
        <main className="min-h-screen pt-24 pb-20 relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-100/30 blur-[120px] rounded-full pointer-events-none opacity-50 -z-10" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-100/30 blur-[120px] rounded-full pointer-events-none opacity-50 -z-10" />

            <div ref={containerRef} className="container mx-auto px-4">
                {/* Hero */}
                <section className="py-16 md:py-20">
                    <motion.div
                        className="text-center max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.div
                            className="inline-flex items-center space-x-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 mb-6 shadow-sm"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.2 }}
                        >
                            <Sparkles className="w-4 h-4 text-purple-600" />
                            <span className="text-sm font-medium text-slate-700">14-Day Free Trial - No Credit Card Required</span>
                        </motion.div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tighter text-slate-900">
                            Simple, <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-purple-600 to-blue-600">Transparent</span> Pricing
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 mb-8">
                            Choose the perfect plan for your dealership. All plans include a 14-day free trial.
                        </p>

                        {/* Billing Toggle */}
                        <div className="inline-flex items-center bg-white border border-slate-200 rounded-full p-1 shadow-sm">
                            <button
                                onClick={() => setBillingCycle("monthly")}
                                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                                    billingCycle === "monthly"
                                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md"
                                        : "text-slate-600 hover:text-slate-900"
                                }`}
                            >
                                Monthly
                            </button>
                            <button
                                onClick={() => setBillingCycle("annual")}
                                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                                    billingCycle === "annual"
                                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md"
                                        : "text-slate-600 hover:text-slate-900"
                                }`}
                            >
                                Annual <span className="ml-1 text-xs">(Save 20%)</span>
                            </button>
                        </div>
                    </motion.div>
                </section>

                {/* Trust Badges */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-6 md:gap-8 pb-12"
                >
                    <TrustBadge icon={Shield} label="SOC 2 Certified" />
                    <TrustBadge icon={Check} label="30-Day Guarantee" />
                    <TrustBadge icon={Zap} label="99.9% Uptime" />
                </motion.div>

                {/* Pricing Cards */}
                <section className="py-8">
                    <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
                        {plans.map((plan, index) => {
                            const Icon = plan.icon;
                            const displayPrice = plan.price
                                ? billingCycle === "annual"
                                    ? Math.round(plan.price * 0.8)
                                    : plan.price
                                : null;

                            const cadPrice = displayPrice ? Math.round(displayPrice * 1.4) : null;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.1 * index }}
                                    className="relative"
                                >
                                    {plan.popular && (
                                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                                            <div className={`bg-gradient-to-r ${plan.gradient} px-5 py-2 rounded-full text-sm font-bold text-white shadow-lg animate-pulse`}>
                                                MOST POPULAR
                                            </div>
                                        </div>
                                    )}

                                    <div
                                        className={`relative h-full bg-white rounded-3xl border-2 transition-all duration-300 hover:shadow-2xl group ${
                                            plan.popular ? "border-purple-300 shadow-xl scale-105" : "border-slate-200 hover:border-slate-300"
                                        }`}
                                    >
                                        {/* Gradient Glow on Hover */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity`} />

                                        <div className="relative p-6 md:p-8">
                                            {/* Icon */}
                                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                                                <Icon className="w-7 h-7 text-white" />
                                            </div>

                                            {/* Plan Name */}
                                            <h3 className="text-2xl font-bold mb-2 text-slate-900">{plan.name}</h3>
                                            <p className="text-slate-600 mb-6">{plan.description}</p>

                                            {/* Price */}
                                            <div className="mb-8">
                                                {displayPrice ? (
                                                    <div className="flex flex-col">
                                                        <div className="flex items-baseline">
                                                            <span className="text-5xl font-bold text-slate-900">${displayPrice}</span>
                                                            <span className="text-slate-600 ml-2 font-medium">{plan.period}</span>
                                                        </div>
                                                        <div className="text-slate-400 text-sm mt-1 font-medium">
                                                            ~${cadPrice} CAD
                                                        </div>
                                                        {billingCycle === "annual" && (
                                                            <div className="text-green-600 text-sm font-medium mt-1">
                                                                Save ${Math.round(plan.price! * 2.4)}/year
                                                            </div>
                                                        )}
                                                    </div>
                                                ) : (
                                                    <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">Custom</span>
                                                )}
                                            </div>

                                            {/* CTA Button */}
                                            <Button
                                                className={`w-full h-12 rounded-full font-semibold text-base mb-8 transition-all ${
                                                    plan.popular
                                                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg hover:scale-105"
                                                        : "bg-slate-900 text-white hover:bg-slate-800"
                                                }`}
                                            >
                                                {plan.cta}
                                                <ArrowRight className="ml-2 w-5 h-5" />
                                            </Button>

                                            {/* Features */}
                                            <div className="space-y-3">
                                                <p className="text-sm font-semibold text-slate-900 mb-4">What&apos;s included:</p>
                                                {plan.features.map((feature, i) => (
                                                    <div key={i} className="flex items-start">
                                                        {feature.included ? (
                                                            <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                                                        ) : (
                                                            <X className="w-5 h-5 text-slate-300 mr-3 flex-shrink-0 mt-0.5" />
                                                        )}
                                                        <span className={feature.included ? "text-slate-700" : "text-slate-400"}>{feature.name}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </section>

                {/* Comparison Table */}
                <section className="py-16 md:py-20">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Compare Plans</h2>
                        <p className="text-slate-600 text-lg">See all features side-by-side</p>
                    </motion.div>

                    <div className="overflow-x-auto">
                        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden min-w-[600px]">
                            {comparisonFeatures.map((category, catIndex) => {
                                const CategoryIcon = category.icon;
                                return (
                                    <motion.div
                                        key={catIndex}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: catIndex * 0.1 }}
                                        className={catIndex > 0 ? "border-t border-slate-200" : ""}
                                    >
                                        {/* Category Header */}
                                        <div className="bg-slate-50 px-6 md:px-8 py-4 flex items-center">
                                            <CategoryIcon className="w-5 h-5 text-slate-700 mr-3" />
                                            <h3 className="font-bold text-slate-900">{category.category}</h3>
                                        </div>

                                        {/* Feature Rows */}
                                        {category.items.map((item, itemIndex) => (
                                            <div
                                                key={itemIndex}
                                                className="grid grid-cols-4 gap-4 px-6 md:px-8 py-4 hover:bg-slate-50 transition-colors"
                                            >
                                                <div className="col-span-1 font-medium text-slate-700">{item.name}</div>
                                                <div className="text-center text-slate-600">
                                                    {typeof item.starter === "boolean" ? (
                                                        item.starter ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-slate-300 mx-auto" />
                                                    ) : (
                                                        item.starter
                                                    )}
                                                </div>
                                                <div className="text-center text-slate-600">
                                                    {typeof item.pro === "boolean" ? (
                                                        item.pro ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-slate-300 mx-auto" />
                                                    ) : (
                                                        item.pro
                                                    )}
                                                </div>
                                                <div className="text-center text-slate-600">
                                                    {typeof item.enterprise === "boolean" ? (
                                                        item.enterprise ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-slate-300 mx-auto" />
                                                    ) : (
                                                        item.enterprise
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-16 md:py-20">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-slate-600 text-lg">Everything you need to know</p>
                    </motion.div>
                    
                    <div className="max-w-3xl mx-auto space-y-4">
                        {faqs.map((faq, index) => (
                            <FAQItem key={index} faq={faq} index={index} />
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
