import Link from "next/link";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Twitter, 
  Linkedin, 
  Facebook, 
  Instagram,
  Youtube,
  ArrowRight,
  CheckCircle2,
  Shield,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerLinks = {
  product: [
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Integrations", href: "/integrations" },
    { name: "Analytics", href: "/analytics" },
    { name: "API", href: "/resources/api-reference" },
    { name: "Changelog", href: "/changelog" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
    { name: "Partners", href: "/partners" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Documentation", href: "/resources/documentation" },
    { name: "Help Center", href: "/resources/help-center" },
    { name: "System Status", href: "/resources/status" },
    { name: "Community", href: "/community" },
    { name: "Webinars", href: "/webinars" },
    { name: "Case Studies", href: "/case-studies" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/legal/privacy" },
    { name: "Terms of Service", href: "/legal/terms" },
    { name: "Cookie Policy", href: "/legal/cookie-policy" },
    { name: "GDPR", href: "/legal/gdpr" },
    { name: "Security", href: "/security" },
    { name: "DMCA", href: "/dmca" },
  ],
};

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/flashfender", color: "hover:bg-blue-400" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/flashfender", color: "hover:bg-blue-600" },
  { name: "Facebook", icon: Facebook, href: "https://facebook.com/flashfender", color: "hover:bg-blue-500" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/flashfender", color: "hover:bg-pink-500" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com/flashfender", color: "hover:bg-red-500" },
];

const trustBadges = [
  { icon: Shield, label: "SOC 2 Certified" },
  { icon: CheckCircle2, label: "GDPR Compliant" },
  { icon: Zap, label: "99.9% Uptime" },
];

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-slate-800">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-3">Stay in the loop</h3>
            <p className="text-slate-400 mb-6">
              Get the latest updates on automotive marketing, new features, and industry insights.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 rounded-full px-6 py-6 focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <Button 
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 py-6 font-semibold shadow-lg shadow-red-600/20 whitespace-nowrap"
              >
                Subscribe
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </form>
            <p className="text-xs text-slate-500 mt-3">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center">
                <span className="text-xl font-bold text-white">F</span>
              </div>
              <span className="font-bold text-xl">FlashFender</span>
            </Link>
            <p className="text-slate-400 text-sm mb-6 max-w-xs">
              AI-powered vehicle posting automation for auto dealerships. Post to 10+ platforms instantly. No shadow bans. No duplicates.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-red-500" />
                <div>
                  <p>1055 W Georgia St</p>
                  <p>Vancouver, BC V6E 3R9</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0 text-red-500" />
                <p>+1 (236) 877-1044</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0 text-red-500" />
                <p>hello@flashfender.com</p>
              </div>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="py-8 border-t border-slate-800">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-2 text-slate-400">
                <badge.icon className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} FlashFender. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 ${social.color} text-white transition-all hover:scale-110 hover:shadow-lg`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Built With */}
            <div className="text-slate-500 text-xs flex items-center gap-2">
              <span>Built with</span>
              <span className="text-slate-400">Next.js</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400">Tailwind</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400">Framer</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
