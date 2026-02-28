"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ChevronDown, Mail, MessageCircle, Book, Zap, CreditCard, Users, Globe } from "lucide-react";

const faqs = [
  {
    question: "How do I get started with FlashFender?",
    answer: "Sign up for a free trial, connect your dealership's inventory, and start posting in minutes. Our onboarding team will guide you through the setup process."
  },
  {
    question: "Which platforms does FlashFender support?",
    answer: "FlashFender supports Facebook Marketplace, Craigslist, OfferUp, Autotrader, Cars.com, and 10+ other major platforms. We're constantly adding new integrations."
  },
  {
    question: "Is there a limit on how many vehicles I can post?",
    answer: "Limits vary by plan. Starter allows 50 vehicles, Professional has unlimited vehicles, and Enterprise offers custom limits with dedicated support."
  },
  {
    question: "Can I customize the AI-generated descriptions?",
    answer: "Absolutely! You can edit any AI-generated content before posting. You can also set tone preferences (professional, casual, urgent) that the AI will follow."
  },
  {
    question: "What happens if my account gets flagged?",
    answer: "FlashFender's anti-shadow ban technology actively prevents flags. If any issues arise, our system monitors account health and provides recommendations."
  },
  {
    question: "Do you offer customer support?",
    answer: "Yes! All plans include email support. Professional plans get priority support, and Enterprise plans include a dedicated account manager."
  }
];

const helpCategories = [
  { icon: Zap, title: "Getting Started", desc: "Quick start guide & setup", count: "8 articles" },
  { icon: Book, title: "Platforms", desc: "How to post on each site", count: "12 articles" },
  { icon: Users, title: "Team Management", desc: "Roles, permissions & settings", count: "5 articles" },
  { icon: CreditCard, title: "Billing & Plans", desc: "Pricing, upgrades & refunds", count: "6 articles" },
  { icon: Globe, title: "API & Integrations", desc: "Connect with your tools", count: "10 articles" },
  { icon: MessageCircle, title: "Troubleshooting", desc: "Common issues & solutions", count: "15 articles" }
];

export default function HelpPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main className="min-h-screen pt-24 pb-20 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear_gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial_gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10" />

      <section className="container mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            How can we <span className="text-red-600">help?</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            Search our knowledge base or browse by category
          </p>
          
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all text-lg"
            />
          </div>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 mb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {helpCategories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-red-300 hover:shadow-lg transition-all cursor-pointer group"
            >
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                <cat.icon className="w-6 h-6 text-red-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">{cat.title}</h3>
              <p className="text-slate-600 text-sm mb-2">{cat.desc}</p>
              <span className="text-xs text-slate-400">{cat.count}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <span className="font-medium text-slate-900">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  className="px-6 pb-4"
                >
                  <p className="text-slate-600">{faq.answer}</p>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="bg-slate-900 rounded-3xl p-12 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Still need help?</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">Our support team is available to assist you with any questions.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:support@flashfender.com" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-full font-medium hover:bg-slate-100 transition-colors">
              <Mail className="w-5 h-5" /> Email Support
            </a>
            <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 transition-colors">
              <MessageCircle className="w-5 h-5" /> Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
