"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "How AI is Revolutionizing Car Dealership Marketing",
    excerpt: "Discover how artificial intelligence is transforming the way dealerships reach customers and sell vehicles faster.",
    category: "AI & Technology",
    date: "February 15, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop"
  },
  {
    id: 2,
    title: "Avoiding Shadow Bans: A Dealer's Guide to Safe Posting",
    excerpt: "Learn the best practices to keep your dealership's listings live and avoid the dreaded shadow ban.",
    category: "Best Practices",
    date: "February 10, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=400&fit=crop"
  },
  {
    id: 3,
    title: "Multi-Platform Posting: Reach More Buyers in Less Time",
    excerpt: "Why posting to 10+ platforms simultaneously is the key to maximizing your vehicle exposure.",
    category: "Marketing",
    date: "February 5, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&h=400&fit=crop"
  },
  {
    id: 4,
    title: "The Ultimate Guide to Car Photography for Online Listings",
    excerpt: "Professional tips to make your inventory photos stand out and attract more buyers.",
    category: "Photography",
    date: "January 28, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=400&fit=crop"
  },
  {
    id: 5,
    title: "How Dealerships Increased Sales by 300% with Automation",
    excerpt: "Real success stories from dealerships that transformed their business with FlashFender.",
    category: "Case Studies",
    date: "January 20, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=400&fit=crop"
  },
  {
    id: 6,
    title: "Understanding Facebook Marketplace's New Policies",
    excerpt: "Stay compliant with the latest marketplace rules and keep your listings active.",
    category: "Platform Updates",
    date: "January 15, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=400&fit=crop"
  }
];

const categories = ["All", "AI & Technology", "Best Practices", "Marketing", "Photography", "Case Studies", "Platform Updates"];

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10" />

      <section className="container mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            FlashFender <span className="text-red-600">Blog</span>
          </h1>
          <p className="text-xl text-slate-600">
            Insights, tips, and strategies for modern car dealerships
          </p>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat, i) => (
            <button
              key={i}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${i === 0 ? 'bg-red-600 text-white' : 'bg-white text-slate-600 border border-slate-200 hover:border-red-300 hover:text-red-600'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all group"
            >
              <div className="aspect-video bg-slate-100 relative overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url(${post.image})` }}
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-slate-700">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-slate-600 text-sm mb-4">{post.excerpt}</p>
                <Link href="#" className="inline-flex items-center text-red-600 font-medium text-sm hover:gap-2 transition-all">
                  Read More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 mt-20">
        <div className="bg-gradient-to-r from-red-600 to-purple-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-white/80 mb-6 max-w-xl mx-auto">Get the latest tips and insights delivered straight to your inbox.</p>
          <div className="flex max-w-md mx-auto gap-3">
            <input type="email" placeholder="Enter your email" className="flex-1 px-5 py-3 rounded-full text-slate-900" />
            <button className="px-6 py-3 bg-slate-900 text-white font-medium rounded-full hover:bg-slate-800 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
