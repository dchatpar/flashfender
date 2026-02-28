"use client";

import { motion } from "framer-motion";
import { 
    Plug, 
    CheckCircle2, 
    Clock, 
    Database,
    Mail,
    BarChart3,
    FileText,
    ExternalLink,
    ChevronRight,
    Search,
    Building2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const integrationCategories = [
    {
        id: "dms",
        name: "DMS",
        description: "Dealer Management Systems",
        icon: Database,
        color: "from-blue-500 to-cyan-500"
    },
    {
        id: "crm",
        name: "CRM",
        description: "Customer Relationship Management",
        icon: Building2,
        color: "from-purple-500 to-pink-500"
    },
    {
        id: "marketing",
        name: "Marketing",
        description: "Marketing & Advertising",
        icon: Mail,
        color: "from-orange-500 to-red-500"
    },
    {
        id: "accounting",
        name: "Accounting",
        description: "Financial Management",
        icon: BarChart3,
        color: "from-emerald-500 to-green-500"
    }
];

const integrations = [
    {
        name: "DealerTrack",
        category: "dms",
        description: "Leading DMS platform for automotive retail with comprehensive inventory management.",
        status: "verified",
        features: ["Inventory Sync", "Customer Data", "Deal Management"]
    },
    {
        name: "CDK Global",
        category: "dms",
        description: "Enterprise dealer management solutions serving thousands of dealerships.",
        status: "verified",
        features: ["Real-time Sync", "F&I Integration", "Service Writing"]
    },
    {
        name: "Reynolds & Reynolds",
        category: "dms",
        description: "Comprehensive DMS solutions for dealerships of all sizes.",
        status: "verified",
        features: ["Inventory Management", "Accounting", "CRM"]
    },
    {
        name: "DealerSocket",
        category: "crm",
        description: "All-in-one CRM platform for automotive sales and service.",
        status: "verified",
        features: ["Lead Management", "Email Marketing", "Analytics"]
    },
    {
        name: "AutoRaptor",
        category: "crm",
        description: "CRM built specifically for automotive dealerships.",
        status: "beta",
        features: ["Lead Tracking", "Auto-responders", "SMS Marketing"]
    },
    {
        name: "Shopify",
        category: "marketing",
        description: "E-commerce platform for online vehicle sales.",
        status: "verified",
        features: ["Online Payments", "Inventory Display", "SEO"]
    },
    {
        name: "Mailchimp",
        category: "marketing",
        description: "Email marketing platform for customer outreach.",
        status: "verified",
        features: ["Email Campaigns", "Audience Lists", "Templates"]
    },
    {
        name: "QuickBooks",
        category: "accounting",
        description: "Popular accounting software for small businesses.",
        status: "verified",
        features: ["Invoicing", "Expense Tracking", "Financial Reports"]
    },
    {
        name: "Xero",
        category: "accounting",
        description: "Cloud-based accounting software.",
        status: "coming_soon",
        features: ["Bank Sync", "Payroll", "Inventory"]
    },
    {
        name: "CarsXE",
        category: "dms",
        description: "Vehicle data and inventory management solutions.",
        status: "verified",
        features: ["VIN Decoding", "Market Data", "Listing Tools"]
    },
    {
        name: "vAuto",
        category: "dms",
        description: "Intelligent inventory management and pricing.",
        status: "coming_soon",
        features: ["Price Optimization", "Inventory Analytics", "Appraisals"]
    },
    {
        name: "HubSpot",
        category: "crm",
        description: "Full-stack CRM for businesses of all sizes.",
        status: "beta",
        features: ["Lead Scoring", "Marketing Automation", "Analytics"]
    }
];

const requestedIntegrations = [
    { name: "Facebook Marketplace API", votes: 234 },
    { name: "Google Ads Integration", votes: 189 },
    { name: "Amazon Vehicles", votes: 156 },
    { name: "Craigslist API", votes: 142 },
    { name: "CarGurus", votes: 128 },
    { name: " Kelley Blue Book", votes: 98 }
];

export default function IntegrationsPage() {
    return (
        <main className="min-h-screen pt-24 pb-20 relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial_gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10" />
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
                        <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 mb-6">
                            <Plug className="w-4 h-4 text-blue-600" />
                            <span className="text-sm font-medium text-blue-700">Integrations</span>
                        </div>
                    </motion.div>

                    <motion.h1 
                        variants={fadeInUp}
                        className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter text-slate-900"
                    >
                        Connect Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-purple-600 to-blue-600">Stack</span>
                    </motion.h1>

                    <motion.p 
                        variants={fadeInUp}
                        className="text-xl text-slate-600 leading-relaxed"
                    >
                        Seamlessly integrate with the tools you already use. 
                        DMS, CRM, Marketing, and more.
                    </motion.p>
                </motion.div>
            </section>

            <section className="container mx-auto px-4 mb-12">
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                    <div className="relative flex-1 max-w-md w-full">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <Input 
                            className="pl-12 h-12 rounded-xl border-slate-200" 
                            placeholder="Search integrations..." 
                        />
                    </div>
                    <div className="flex gap-2 flex-wrap">
                        <button className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium">
                            All
                        </button>
                        {integrationCategories.map((cat) => (
                            <button 
                                key={cat.id}
                                className="px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-lg text-sm font-medium hover:border-slate-300 transition-colors"
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4 mb-20">
                <div className="grid lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-3">
                        {integrationCategories.map((category) => {
                            const categoryIntegrations = integrations.filter(i => i.category === category.id);
                            if (categoryIntegrations.length === 0) return null;
                            
                            return (
                                <motion.div
                                    key={category.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="mb-12"
                                >
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                                            <category.icon className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h2 className="text-xl font-bold text-slate-900">{category.name}</h2>
                                            <p className="text-sm text-slate-600">{category.description}</p>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        {categoryIntegrations.map((integration, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.05 }}
                                                className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg hover:border-slate-300 transition-all"
                                            >
                                                <div className="flex items-start justify-between mb-4">
                                                    <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center">
                                                        <Building2 className="w-6 h-6 text-slate-600" />
                                                    </div>
                                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                                        integration.status === 'verified' ? 'bg-green-50 text-green-700 border border-green-200' :
                                                        integration.status === 'beta' ? 'bg-blue-50 text-blue-700 border border-blue-200' :
                                                        integration.status === 'coming_soon' ? 'bg-slate-100 text-slate-600 border border-slate-200' :
                                                        'bg-yellow-50 text-yellow-700 border border-yellow-200'
                                                    }`}>
                                                        {integration.status === 'verified' && <><CheckCircle2 className="w-3 h-3 mr-1 inline" /> Verified</>}
                                                        {integration.status === 'beta' && <><Clock className="w-3 h-3 mr-1 inline" /> Beta</>}
                                                        {integration.status === 'coming_soon' && <>Coming Soon</>}
                                                    </span>
                                                </div>
                                                <h3 className="text-lg font-bold text-slate-900 mb-2">{integration.name}</h3>
                                                <p className="text-sm text-slate-600 mb-4">{integration.description}</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {integration.features.map((feature, i) => (
                                                        <span key={i} className="px-2 py-1 bg-slate-100 rounded-md text-xs text-slate-600">
                                                            {feature}
                                                        </span>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    <div className="lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-6 border border-slate-200 sticky top-24"
                        >
                            <h3 className="font-bold text-slate-900 mb-4">Requested Integrations</h3>
                            <p className="text-sm text-slate-600 mb-6">Vote for integrations you'd like to see</p>
                            
                            <div className="space-y-3 mb-6">
                                {requestedIntegrations.map((item, index) => (
                                    <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                                        <span className="text-sm text-slate-700">{item.name}</span>
                                        <span className="text-xs font-medium text-slate-500">{item.votes} votes</span>
                                    </div>
                                ))}
                            </div>

                            <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white h-11 rounded-xl font-medium">
                                Request Integration
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4 mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500/10 blur-[120px] rounded-full pointer-events-none" />

                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <FileText className="w-5 h-5 text-blue-400" />
                                <span className="text-blue-400 font-medium">Developer Resources</span>
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-4">Build Custom Integrations</h2>
                            <p className="text-slate-300 mb-6">
                                Our REST API and webhooks let you build custom integrations 
                                with any tool in your stack.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {[
                                    "Comprehensive API documentation",
                                    "Sandbox environment for testing",
                                    "Webhooks for real-time events",
                                    "SDKs for popular languages"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-300">
                                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="flex gap-4">
                                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 h-11 rounded-xl font-medium">
                                    View API Docs <ExternalLink className="ml-2 w-4 h-4" />
                                </Button>
                                <Button variant="outline" className="border-slate-600 text-white hover:bg-slate-800 px-6 h-11 rounded-xl font-medium">
                                    Get API Key
                                </Button>
                            </div>
                        </div>

                        <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-slate-400 text-sm">API Example</span>
                                <span className="text-green-400 text-sm">GET /api/v1/inventory</span>
                            </div>
                            <pre className="text-sm text-slate-300 font-mono overflow-x-auto">
{`{
  "status": "success",
  "data": {
    "vehicles": [
      {
        "id": "v_12345",
        "make": "Toyota",
        "model": "Camry",
        "year": 2024,
        "price": 28999,
        "status": "available"
      }
    ],
    "pagination": {
      "page": 1,
      "total": 150
    }
  }
}`}
                            </pre>
                        </div>
                    </div>
                </motion.div>
            </section>

            <section className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-blue-50 rounded-3xl p-12 border border-blue-200 text-center"
                >
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Don&apos;t See What You&apos;re Looking For?</h2>
                    <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                        We&apos;re constantly adding new integrations. Let us know what tools you use 
                        and we&apos;ll prioritize them.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-12 rounded-xl font-semibold">
                            Request Integration <ChevronRight className="ml-2 w-4 h-4" />
                        </Button>
                        <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100 px-8 h-12 rounded-xl font-semibold">
                            Contact Sales
                        </Button>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
