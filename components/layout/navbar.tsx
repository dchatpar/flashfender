"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles, 
  Zap, 
  BarChart3, 
  Shield,
  Settings,
  Users,
  FileText,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = {
  products: [
    { name: "Features", href: "/features", icon: Sparkles, description: "AI-powered tools" },
    { name: "Pricing", href: "/pricing", icon: Zap, description: "Flexible plans" },
    { name: "Integrations", href: "/integrations", icon: Settings, description: "Connect your stack" },
    { name: "Analytics", href: "/analytics", icon: BarChart3, description: "Track performance" },
  ],
  company: [
    { name: "About", href: "/about", icon: Users, description: "Our story" },
    { name: "Blog", href: "/blog", icon: FileText, description: "Latest updates" },
    { name: "Careers", href: "/careers", icon: Users, description: "Join us" },
    { name: "Partners", href: "/partners", icon: Shield, description: "Partner program" },
  ],
  resources: [
    { name: "Documentation", href: "/resources/documentation", icon: FileText, description: "API docs" },
    { name: "Help Center", href: "/resources/help-center", icon: Settings, description: "Support" },
    { name: "Status", href: "/resources/status", icon: BarChart3, description: "System status" },
    { name: "API Reference", href: "/resources/api-reference", icon: FileText, description: "For developers" },
  ],
};

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/50" 
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center space-x-2 group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                  isScrolled ? "bg-red-600" : "bg-white"
                } shadow-lg group-hover:shadow-xl`}
              >
                <span className={`text-xl font-bold ${isScrolled ? "text-white" : "text-red-600"}`}>F</span>
              </motion.div>
              <span className={`font-bold text-xl transition-colors ${
                isScrolled ? "text-slate-900" : "text-slate-900 md:text-white"
              }`}>
                FlashFender
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {/* Products Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown("products")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  className={`flex items-center space-x-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isScrolled 
                      ? "text-slate-600 hover:text-slate-900 hover:bg-slate-100" 
                      : "text-slate-700 md:text-white/90 hover:text-white hover:bg-white/10"
                  } ${activeDropdown === "products" ? "bg-slate-100" : ""}`}
                >
                  <span>Products</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "products" ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {activeDropdown === "products" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden"
                    >
                      <div className="p-2">
                        {navigation.products.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-start space-x-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                          >
                            <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center group-hover:bg-red-100 transition-colors">
                              <item.icon className="w-5 h-5 text-slate-600 group-hover:text-red-600" />
                            </div>
                            <div>
                              <div className="font-semibold text-slate-900">{item.name}</div>
                              <div className="text-xs text-slate-500">{item.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="border-t border-slate-100 p-3 bg-slate-50/50">
                        <Link href="/demo" className="flex items-center justify-between text-sm font-medium text-slate-700 hover:text-red-600 transition-colors">
                          <span>View all features</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Company Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown("company")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  className={`flex items-center space-x-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isScrolled 
                      ? "text-slate-600 hover:text-slate-900 hover:bg-slate-100" 
                      : "text-slate-700 md:text-white/90 hover:text-white hover:bg-white/10"
                  } ${activeDropdown === "company" ? "bg-slate-100" : ""}`}
                >
                  <span>Company</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "company" ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {activeDropdown === "company" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden"
                    >
                      <div className="p-2">
                        {navigation.company.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-start space-x-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                          >
                            <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                              <item.icon className="w-5 h-5 text-slate-600 group-hover:text-blue-600" />
                            </div>
                            <div>
                              <div className="font-semibold text-slate-900">{item.name}</div>
                              <div className="text-xs text-slate-500">{item.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Resources Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown("resources")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  className={`flex items-center space-x-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isScrolled 
                      ? "text-slate-600 hover:text-slate-900 hover:bg-slate-100" 
                      : "text-slate-700 md:text-white/90 hover:text-white hover:bg-white/10"
                  } ${activeDropdown === "resources" ? "bg-slate-100" : ""}`}
                >
                  <span>Resources</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "resources" ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {activeDropdown === "resources" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden"
                    >
                      <div className="p-2">
                        {navigation.resources.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-start space-x-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                          >
                            <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center group-hover:bg-green-100 transition-colors">
                              <item.icon className="w-5 h-5 text-slate-600 group-hover:text-green-600" />
                            </div>
                            <div>
                              <div className="font-semibold text-slate-900">{item.name}</div>
                              <div className="text-xs text-slate-500">{item.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Simple Links */}
              <Link 
                href="/how-it-works"
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isScrolled 
                    ? "text-slate-600 hover:text-slate-900 hover:bg-slate-100" 
                    : "text-slate-700 md:text-white/90 hover:text-white hover:bg-white/10"
                } ${isActive("/how-it-works") ? "bg-slate-100" : ""}`}
              >
                How It Works
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <Link 
                href="/login"
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  isScrolled ? "text-slate-600 hover:text-slate-900" : "text-slate-700 md:text-white/90 hover:text-white"
                }`}
              >
                Log in
              </Link>
              <Link href="/demo">
                <Button 
                  size="sm"
                  className="bg-red-600 hover:bg-red-700 text-white rounded-full font-medium px-6 shadow-lg shadow-red-600/20 hover:shadow-xl transition-all hover:scale-105"
                >
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg touch-target ${
                isScrolled ? "text-slate-900" : "text-slate-900 md:text-white"
              }`}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-4">
                {/* Mobile Header */}
                <div className="flex items-center justify-between mb-6">
                  <Link href="/" className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center">
                      <span className="text-xl font-bold text-white">F</span>
                    </div>
                    <span className="font-bold text-xl text-slate-900">FlashFender</span>
                  </Link>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg text-slate-600 touch-target"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Mobile Navigation */}
                <div className="space-y-2">
                  {/* Products Section */}
                  <div className="border-b border-slate-200 pb-4">
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === "mobile-products" ? null : "mobile-products")}
                      className="flex items-center justify-between w-full p-3 rounded-xl text-left"
                    >
                      <span className="font-semibold text-slate-900">Products</span>
                      <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform ${activeDropdown === "mobile-products" ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === "mobile-products" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-3 space-y-1 mt-2">
                            {navigation.products.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-center space-x-3 p-3 rounded-xl hover:bg-slate-50"
                              >
                                <item.icon className="w-5 h-5 text-slate-500" />
                                <span className="text-slate-700">{item.name}</span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Company Section */}
                  <div className="border-b border-slate-200 pb-4">
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === "mobile-company" ? null : "mobile-company")}
                      className="flex items-center justify-between w-full p-3 rounded-xl text-left"
                    >
                      <span className="font-semibold text-slate-900">Company</span>
                      <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform ${activeDropdown === "mobile-company" ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === "mobile-company" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-3 space-y-1 mt-2">
                            {navigation.company.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-center space-x-3 p-3 rounded-xl hover:bg-slate-50"
                              >
                                <item.icon className="w-5 h-5 text-slate-500" />
                                <span className="text-slate-700">{item.name}</span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Resources Section */}
                  <div className="border-b border-slate-200 pb-4">
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === "mobile-resources" ? null : "mobile-resources")}
                      className="flex items-center justify-between w-full p-3 rounded-xl text-left"
                    >
                      <span className="font-semibold text-slate-900">Resources</span>
                      <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform ${activeDropdown === "mobile-resources" ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === "mobile-resources" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-3 space-y-1 mt-2">
                            {navigation.resources.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-center space-x-3 p-3 rounded-xl hover:bg-slate-50"
                              >
                                <item.icon className="w-5 h-5 text-slate-500" />
                                <span className="text-slate-700">{item.name}</span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Simple Links */}
                  <Link href="/how-it-works" className="flex items-center justify-between p-3 rounded-xl">
                    <span className="font-semibold text-slate-900">How It Works</span>
                  </Link>

                  <Link href="/contact" className="flex items-center justify-between p-3 rounded-xl">
                    <span className="font-semibold text-slate-900">Contact</span>
                  </Link>
                </div>

                {/* Mobile CTA */}
                <div className="mt-6 space-y-3">
                  <Link href="/demo" className="block">
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white rounded-full font-medium py-6 text-lg shadow-lg">
                      Get Started Free
                    </Button>
                  </Link>
                  <Link href="/login" className="block">
                    <Button variant="outline" className="w-full rounded-full font-medium py-6">
                      Log in
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer for fixed navbar */}
      <div className="h-16 md:h-20" />
    </>
  );
}
