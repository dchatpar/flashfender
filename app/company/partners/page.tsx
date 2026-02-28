"use client";

import { motion } from "framer-motion";
import { 
    Handshake, 
    CheckCircle2, 
    ArrowRight, 
    Zap,
    Globe,
    TrendingUp,
    Users,
    Building2,
    ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const integrationPartners = [
    {
        name: "DealerTrack",
        category: "DMS",
        description: "Leading DMS platform for automotive retail",
        status: "Integrated"
    },
    {
        name: "CDK Global",
        category: "DMS",
        description: "Enterprise dealer management solutions",
        status: "Integrated"
    },
    {
        name: " DealerSocket",
        category: "CRM",
        description: "Customer relationship management for dealers",
        status: "Integrated"
    },
    {
        name: "AutoRaptor",
        category: "CRM",
        description: "CRM built specifically for automotive",
        status: "Beta"
    },
    {
        name: "CarsXE",
        category: "Inventory",
        description: "Vehicle data and inventory management",
        status: "Integrated"
    },
    {
        name: "vAuto",
        category: "Inventory",
        description: "Intelligent inventory management",
        status: "Coming Soon"
    }
];

const partnerBenefits = [
    {
        icon: TrendingUp,
        title: "Revenue Growth",
        description: "Generate recurring revenue through reseller commissions and referral fees."
    },
    {
        icon: Users,
        title: "Lead Generation",
        description: "Access high-quality leads from dealerships seeking your integrated solutions."
    },
    {
        icon: Globe,
        title: "Market Reach",
        description: "Leverage our 500+ dealership network to expand your market presence."
    },
    {
        icon: Zap,
        title: "Technical Support",
        description: "Dedicated technical team to support integration and implementation."
    }
];

const resellerPerks = [
    "20% recurring commission on all referred dealerships",
    "Priority lead distribution in your territory",
    "Co-marketing opportunities and brand exposure",
    "Dedicated account manager and partner support",
    "Early access to new features and updates",
    "Training and certification programs"
];

export default function PartnersPage() {
    return (
        <main className="min-h-screen pt-24 pb-20 relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/30 blur-[120px] rounded-full pointer-events-none opacity-50 -z-10" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-100/30 blur-[120px] rounded-full pointer-events-none opacity-50 -z-10" />

            <section className="container mx-auto px-4 mb-20">
                <motion.div
                    className="text-center max-w-3xl mx-auto"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <motion.div variants={fadeInUp}>
                        <div className="inline-flex items-center space-x-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5 mb-6">
                            <Handshake className="w-4 h-4 text-green-600" />
                            <span className="text-sm font-medium text-green-700">Partner Program</span>
                        </div>
                    </motion.div>

                    <motion.h1 
                        variants={fadeInUp}
                        className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter text-slate-900"
                    >
                        Partner with <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-purple-600 to-blue-600">FlashFender</span>
                    </motion.h1>

                    <motion.p 
                        variants={fadeInUp}
                        className="text-xl text-slate-600 leading-relaxed"
                    >
                        Join the fastest-growing automotive technology ecosystem. 
                        Integrate your platform or become a reseller.
                    </motion.p>
                </motion.div>
            </section>

            <section className="container mx-auto px-4 mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Integration Partners</h2>
                    <p className="text-slate-600">Seamlessly connect with the tools you already use</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {integrationPartners.map((partner, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg hover:border-slate-300 transition-all"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                                    <Building2 className="w-6 h-6 text-white" />
                                </div>
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                    partner.status === 'Integrated' ? 'bg-green-50 text-green-700 border border-green-200' :
                                    partner.status === 'Beta' ? 'bg-blue-50 text-blue-700 border border-blue-200' :
                                    'bg-slate-100 text-slate-600 border border-slate-200'
                                }`}>
                                    {partner.status}
                                </span>
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-1">{partner.name}</h3>
                            <p className="text-xs font-medium text-slate-500 mb-2">{partner.category}</p>
                            <p className="text-sm text-slate-600">{partner.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="container mx-auto px-4 mb-20">
                <div className="grid lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Reseller & Affiliate Program</h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Become a FlashFender reseller and help dealerships in your region 
                            automate their inventory marketing. Earn competitive commissions while 
                            solving real problems for automotive retailers.
                        </p>

                        <div className="space-y-4 mb-8">
                            {resellerPerks.map((perk, index) => (
                                <div key={index} className="flex items-start space-x-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-700">{perk}</span>
                                </div>
                            ))}
                        </div>

                        <Button className="bg-red-600 hover:bg-red-700 text-white px-8 h-12 rounded-xl font-semibold">
                            Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl"
                    >
                        <h3 className="text-xl font-bold text-slate-900 mb-6">Benefits of Partnering</h3>
                        <div className="space-y-6">
                            {partnerBenefits.map((benefit, index) => (
                                <div key={index} className="flex items-start space-x-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                                        <benefit.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900 mb-1">{benefit.title}</h4>
                                        <p className="text-sm text-slate-600">{benefit.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500/10 blur-[120px] rounded-full pointer-events-none" />

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold text-white text-center mb-8">Interested in Partnership?</h2>
                        
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">First Name</label>
                                    <Input 
                                        className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 h-12 rounded-xl"
                                        placeholder="John"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Last Name</label>
                                    <Input 
                                        className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 h-12 rounded-xl"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">Company Name</label>
                                <Input 
                                    className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 h-12 rounded-xl"
                                    placeholder="Your Company"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">Email</label>
                                <Input 
                                    type="email"
                                    className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 h-12 rounded-xl"
                                    placeholder="john@company.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">Partnership Type</label>
                                <div className="grid grid-cols-2 gap-4">
                                    <button type="button" className="p-4 rounded-xl border border-white/20 bg-white/5 text-white hover:bg-white/10 transition-colors text-left">
                                        <span className="font-semibold block">Reseller</span>
                                        <span className="text-xs text-slate-400">Sell FlashFender</span>
                                    </button>
                                    <button type="button" className="p-4 rounded-xl border border-white/20 bg-white/5 text-white hover:bg-white/10 transition-colors text-left">
                                        <span className="font-semibold block">Integration</span>
                                        <span className="text-xs text-slate-400">API Partnership</span>
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">Tell us about your business</label>
                                <Textarea 
                                    className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 rounded-xl min-h-[100px]"
                                    placeholder="Describe your company and partnership goals..."
                                />
                            </div>

                            <Button className="w-full bg-red-600 hover:bg-red-700 text-white h-14 rounded-xl font-semibold text-lg">
                                Submit Application <ChevronRight className="ml-2 w-5 h-5" />
                            </Button>
                        </form>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
