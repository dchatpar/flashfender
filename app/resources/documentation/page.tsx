"use client";

import { useState } from "react";
import { Search, Terminal, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";

const docSections = [
    { title: "Getting Started", items: ["Installation", "Quick Start", "Architecture"] },
    { title: "Core Concepts", items: ["Chrome Profiles", "AI Content Gen", "Scheduling"] },
    { title: "Advanced", items: ["Mobile Proxies", "API Integration", "Webhooks"] },
    { title: "Troubleshooting", items: ["Common Errors", "Logs", "Support"] }
];

const documentationContent: Record<string, { title: string; breadcrumb: string; content: React.ReactNode }> = {
    "Installation": {
        title: "Installation",
        breadcrumb: "Getting Started",
        content: (
            <>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    FlashFender is designed to run locally or on a cloud server. The automated installer handles dependencies like Playwright, Python, and Node.js automatically.
                </p>
                <div className="prose prose-slate max-w-none">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Prerequisites</h3>
                    <ul className="space-y-2 text-slate-700 mb-8">
                        <li>Windows 10/11 or Ubuntu 20.04+</li>
                        <li>Node.js 18+</li>
                        <li>Python 3.10+</li>
                        <li>8GB RAM minimum (16GB recommended)</li>
                        <li>Chrome/Chromium browser</li>
                    </ul>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Quick Install</h3>
                    <div className="bg-slate-900 rounded-lg border border-slate-700 p-4 mb-6 font-mono text-sm group relative">
                        <div className="flex items-center text-green-400 mb-2">
                            <Terminal className="w-4 h-4 mr-2" />
                            <span>bash</span>
                        </div>
                        <p className="text-gray-300">
                            <span className="text-purple-400">npm</span> install -g flashfender-cli<br />
                            <span className="text-purple-400">flashfender</span> init
                        </p>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Configuration</h3>
                    <p className="text-slate-700 leading-relaxed mb-4">
                        Once installed, you will need to configure your first Chrome Profile. Navigate to the <code className="bg-slate-100 text-slate-900 px-2 py-0.5 rounded text-sm border border-slate-200">config/profiles.json</code> file or use the CLI wizard.
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                        The installer will automatically create necessary directories and set up your environment variables.
                    </p>
                </div>
            </>
        )
    },
    "Quick Start": {
        title: "Quick Start",
        breadcrumb: "Getting Started",
        content: (
            <>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    Get your first vehicle posted in under 5 minutes with this step-by-step guide.
                </p>
                <div className="prose prose-slate max-w-none">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Step 1: Add Your First Vehicle</h3>
                    <div className="bg-slate-900 rounded-lg border border-slate-700 p-4 mb-6 font-mono text-sm">
                        <p className="text-gray-300">
                            <span className="text-purple-400">flashfender</span> vehicle add --vin 1G1YC2D... --price 45000
                        </p>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Step 2: Upload Images</h3>
                    <p className="text-slate-700 leading-relaxed mb-4">
                        Upload your vehicle photos. FlashFender will automatically enhance them and remove backgrounds.
                    </p>
                    <div className="bg-slate-900 rounded-lg border border-slate-700 p-4 mb-6 font-mono text-sm">
                        <p className="text-gray-300">
                            <span className="text-purple-400">flashfender</span> images upload --vin 1G1YC2D... --folder ./photos
                        </p>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Step 3: Generate Content</h3>
                    <p className="text-slate-700 leading-relaxed mb-4">
                        Let AI create platform-optimized descriptions for your vehicle.
                    </p>
                    <div className="bg-slate-900 rounded-lg border border-slate-700 p-4 mb-6 font-mono text-sm">
                        <p className="text-gray-300">
                            <span className="text-purple-400">flashfender</span> content generate --vin 1G1YC2D... --tone professional
                        </p>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Step 4: Post to Platforms</h3>
                    <div className="bg-slate-900 rounded-lg border border-slate-700 p-4 mb-6 font-mono text-sm">
                        <p className="text-gray-300">
                            <span className="text-purple-400">flashfender</span> post --vin 1G1YC2D... --platforms facebook,craigslist,offerup
                        </p>
                    </div>
                </div>
            </>
        )
    },
    "Architecture": {
        title: "System Architecture",
        breadcrumb: "Getting Started",
        content: (
            <>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    Understanding how FlashFender components work together to automate your inventory marketing.
                </p>
                <div className="prose prose-slate max-w-none">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Core Components</h3>
                    <ul className="space-y-3 text-slate-700 mb-8">
                        <li><strong>Inventory Manager:</strong> Tracks all vehicles, their status, and posting history</li>
                        <li><strong>AI Engine:</strong> Generates content and processes images using machine learning</li>
                        <li><strong>Chrome Automation:</strong> Manages browser profiles and posting workflows</li>
                        <li><strong>Scheduler:</strong> Queues and distributes posts across optimal time windows</li>
                        <li><strong>Analytics Tracker:</strong> Monitors performance metrics across all platforms</li>
                    </ul>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Data Flow</h3>
                    <ol className="space-y-2 text-slate-700 mb-8">
                        <li>Vehicle data is imported or added manually</li>
                        <li>Images are uploaded and processed by AI (background removal, enhancement)</li>
                        <li>Content is generated with platform-specific optimizations</li>
                        <li>Posts are queued based on scheduling rules</li>
                        <li>Chrome profiles execute posts with anti-detection measures</li>
                        <li>Analytics are collected and aggregated in real-time</li>
                    </ol>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Security Model</h3>
                    <p className="text-slate-700 leading-relaxed">
                        All credentials are encrypted at rest. Chrome profiles run in isolated containers with unique fingerprints to prevent cross-contamination and shadow bans.
                    </p>
                </div>
            </>
        )
    },
    "Chrome Profiles": {
        title: "Chrome Profiles",
        breadcrumb: "Core Concepts",
        content: (
            <>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    Chrome Profiles are isolated browser instances that maintain separate cookies, sessions, and fingerprints for each platform account.
                </p>
                <div className="prose prose-slate max-w-none">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Creating a Profile</h3>
                    <div className="bg-slate-900 rounded-lg border border-slate-700 p-4 mb-6 font-mono text-sm">
                        <p className="text-gray-300">
                            <span className="text-purple-400">flashfender</span> profile create --name "Facebook Main" --platform facebook
                        </p>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Profile Configuration</h3>
                    <p className="text-slate-700 leading-relaxed mb-4">
                        Each profile can be configured with:
                    </p>
                    <ul className="space-y-2 text-slate-700 mb-8">
                        <li><strong>User Agent:</strong> Custom browser identification string</li>
                        <li><strong>Proxy:</strong> Optional proxy server for IP rotation</li>
                        <li><strong>Fingerprint:</strong> Canvas, WebGL, and audio fingerprint spoofing</li>
                        <li><strong>Cookies:</strong> Persistent session storage</li>
                        <li><strong>Extensions:</strong> Custom Chrome extensions for automation</li>
                    </ul>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Best Practices</h3>
                    <ul className="space-y-2 text-slate-700">
                        <li>Use separate profiles for each platform account</li>
                        <li>Rotate proxies regularly to avoid IP-based detection</li>
                        <li>Keep profiles logged in to maintain session continuity</li>
                        <li>Monitor profile health scores in the dashboard</li>
                    </ul>
                </div>
            </>
        )
    },
    "AI Content Gen": {
        title: "AI Content Generation",
        breadcrumb: "Core Concepts",
        content: (
            <>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    FlashFender's AI analyzes vehicle data to create engaging, platform-optimized descriptions that drive engagement.
                </p>
                <div className="prose prose-slate max-w-none">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Content Variations</h3>
                    <p className="text-slate-700 leading-relaxed mb-4">
                        Generate multiple unique descriptions for the same vehicle to avoid duplicate content penalties:
                    </p>
                    <div className="bg-slate-900 rounded-lg border border-slate-700 p-4 mb-6 font-mono text-sm">
                        <p className="text-gray-300">
                            <span className="text-purple-400">flashfender</span> content generate --vin ABC123 --variations 5 --tone urgent
                        </p>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Tone Options</h3>
                    <ul className="space-y-2 text-slate-700 mb-8">
                        <li><strong>Professional:</strong> Formal, detailed, emphasizes features and specifications</li>
                        <li><strong>Urgent:</strong> Creates FOMO, highlights limited availability</li>
                        <li><strong>Casual:</strong> Friendly, conversational, relatable language</li>
                        <li><strong>Luxury:</strong> Premium positioning, exclusive feel</li>
                    </ul>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Platform Optimization</h3>
                    <p className="text-slate-700 leading-relaxed mb-4">
                        Content is automatically adjusted for each platform:
                    </p>
                    <ul className="space-y-2 text-slate-700">
                        <li><strong>Facebook:</strong> Emoji-rich, conversational, call-to-action focused</li>
                        <li><strong>Craigslist:</strong> Detailed specs, keyword-optimized, no emojis</li>
                        <li><strong>OfferUp:</strong> Short, punchy, mobile-friendly</li>
                        <li><strong>Instagram:</strong> Hashtag-heavy, visual-first descriptions</li>
                    </ul>
                </div>
            </>
        )
    },
    "Scheduling": {
        title: "Smart Scheduling",
        breadcrumb: "Core Concepts",
        content: (
            <>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    Optimize post timing to maximize visibility and engagement while avoiding spam detection.
                </p>
                <div className="prose prose-slate max-w-none">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Peak Hours</h3>
                    <p className="text-slate-700 leading-relaxed mb-4">
                        FlashFender automatically posts during platform-specific peak engagement windows:
                    </p>
                    <ul className="space-y-2 text-slate-700 mb-8">
                        <li><strong>Facebook Marketplace:</strong> 6-9 PM weekdays, 10 AM-2 PM weekends</li>
                        <li><strong>Craigslist:</strong> 7-10 AM and 5-8 PM (local timezone)</li>
                        <li><strong>OfferUp:</strong> 12-2 PM and 7-9 PM</li>
                    </ul>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Randomization</h3>
                    <p className="text-slate-700 leading-relaxed mb-4">
                        To avoid detection, posts are randomized within safe windows:
                    </p>
                    <div className="bg-slate-900 rounded-lg border border-slate-700 p-4 mb-6 font-mono text-sm">
                        <p className="text-gray-300">
                            <span className="text-purple-400">flashfender</span> schedule set --delay-min 30 --delay-max 180
                        </p>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Batch Posting</h3>
                    <p className="text-slate-700 leading-relaxed">
                        Queue multiple vehicles to post throughout the day. The scheduler will distribute them evenly to maintain natural posting patterns.
                    </p>
                </div>
            </>
        )
    },
    "Mobile Proxies": {
        title: "Mobile Proxies",
        breadcrumb: "Advanced",
        content: (
            <>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    Mobile proxies provide residential IP addresses that rotate automatically, making your posts appear to come from real mobile devices.
                </p>
                <div className="prose prose-slate max-w-none">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Why Mobile Proxies?</h3>
                    <ul className="space-y-2 text-slate-700 mb-8">
                        <li>Platforms trust mobile IPs more than datacenter IPs</li>
                        <li>Automatic IP rotation prevents rate limiting</li>
                        <li>Geographic targeting for local listings</li>
                        <li>Bypass IP-based restrictions and bans</li>
                    </ul>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Configuration</h3>
                    <div className="bg-slate-900 rounded-lg border border-slate-700 p-4 mb-6 font-mono text-sm">
                        <p className="text-gray-300">
                            <span className="text-purple-400">flashfender</span> proxy add --type mobile --provider brightdata --country US
                        </p>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Recommended Providers</h3>
                    <ul className="space-y-2 text-slate-700">
                        <li><strong>Bright Data:</strong> Premium quality, expensive</li>
                        <li><strong>Smartproxy:</strong> Good balance of price and quality</li>
                        <li><strong>Oxylabs:</strong> Enterprise-grade reliability</li>
                    </ul>
                </div>
            </>
        )
    },
    "API Integration": {
        title: "API Integration",
        breadcrumb: "Advanced",
        content: (
            <>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    Integrate FlashFender with your existing DMS, CRM, or inventory management system using our REST API.
                </p>
                <div className="prose prose-slate max-w-none">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Authentication</h3>
                    <p className="text-slate-700 leading-relaxed mb-4">
                        All API requests require an API key in the Authorization header:
                    </p>
                    <div className="bg-slate-900 rounded-lg border border-slate-700 p-4 mb-6 font-mono text-sm">
                        <p className="text-gray-300">
                            curl -H "Authorization: Bearer YOUR_API_KEY" https://api.flashfender.com/v1/vehicles
                        </p>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Common Endpoints</h3>
                    <ul className="space-y-2 text-slate-700 mb-8">
                        <li><code className="bg-slate-100 text-slate-900 px-2 py-0.5 rounded text-sm">POST /vehicles</code> - Add new vehicle</li>
                        <li><code className="bg-slate-100 text-slate-900 px-2 py-0.5 rounded text-sm">GET /vehicles/:vin</code> - Get vehicle details</li>
                        <li><code className="bg-slate-100 text-slate-900 px-2 py-0.5 rounded text-sm">POST /post</code> - Trigger posting workflow</li>
                        <li><code className="bg-slate-100 text-slate-900 px-2 py-0.5 rounded text-sm">GET /analytics/summary</code> - Get performance metrics</li>
                    </ul>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Webhooks</h3>
                    <p className="text-slate-700 leading-relaxed">
                        Configure webhooks to receive real-time notifications when posts complete, leads come in, or errors occur.
                    </p>
                </div>
            </>
        )
    },
    "Webhooks": {
        title: "Webhooks",
        breadcrumb: "Advanced",
        content: (
            <>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    Receive real-time notifications about posting events, leads, and system status changes.
                </p>
                <div className="prose prose-slate max-w-none">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Setup</h3>
                    <div className="bg-slate-900 rounded-lg border border-slate-700 p-4 mb-6 font-mono text-sm">
                        <p className="text-gray-300">
                            <span className="text-purple-400">flashfender</span> webhook add --url https://yourdomain.com/webhook --events post.completed,lead.received
                        </p>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Available Events</h3>
                    <ul className="space-y-2 text-slate-700 mb-8">
                        <li><strong>post.completed:</strong> Vehicle successfully posted to platform</li>
                        <li><strong>post.failed:</strong> Posting attempt failed</li>
                        <li><strong>lead.received:</strong> New inquiry received</li>
                        <li><strong>content.generated:</strong> AI content generation completed</li>
                        <li><strong>image.processed:</strong> Image enhancement finished</li>
                    </ul>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Payload Example</h3>
                    <div className="bg-slate-900 rounded-lg border border-slate-700 p-4 mb-6 font-mono text-sm">
                        <pre className="text-gray-300">{`{
  "event": "post.completed",
  "vin": "1G1YC2D...",
  "platform": "facebook",
  "timestamp": "2024-02-05T10:30:00Z",
  "post_url": "https://facebook.com/..."
}`}</pre>
                    </div>
                </div>
            </>
        )
    },
    "Common Errors": {
        title: "Common Errors",
        breadcrumb: "Troubleshooting",
        content: (
            <>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    Solutions to frequently encountered issues and error messages.
                </p>
                <div className="prose prose-slate max-w-none">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Profile Login Failed</h3>
                    <p className="text-slate-700 leading-relaxed mb-4">
                        <strong>Error:</strong> "Chrome profile authentication failed"
                    </p>
                    <p className="text-slate-700 leading-relaxed mb-4">
                        <strong>Solution:</strong> Re-authenticate the profile manually:
                    </p>
                    <div className="bg-slate-900 rounded-lg border border-slate-700 p-4 mb-6 font-mono text-sm">
                        <p className="text-gray-300">
                            <span className="text-purple-400">flashfender</span> profile login --name "Facebook Main"
                        </p>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Duplicate Content Detected</h3>
                    <p className="text-slate-700 leading-relaxed mb-4">
                        <strong>Error:</strong> "Platform rejected post due to duplicate content"
                    </p>
                    <p className="text-slate-700 leading-relaxed mb-4">
                        <strong>Solution:</strong> Generate new content variations or enable automatic pixel modification for images.
                    </p>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Rate Limit Exceeded</h3>
                    <p className="text-slate-700 leading-relaxed mb-4">
                        <strong>Error:</strong> "Too many requests, please slow down"
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                        <strong>Solution:</strong> Increase delay between posts in scheduler settings or enable mobile proxies for IP rotation.
                    </p>
                </div>
            </>
        )
    },
    "Logs": {
        title: "Logs & Debugging",
        breadcrumb: "Troubleshooting",
        content: (
            <>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    Access detailed logs to diagnose issues and monitor system activity.
                </p>
                <div className="prose prose-slate max-w-none">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Log Locations</h3>
                    <ul className="space-y-2 text-slate-700 mb-8">
                        <li><code className="bg-slate-100 text-slate-900 px-2 py-0.5 rounded text-sm">logs/system.log</code> - General system events</li>
                        <li><code className="bg-slate-100 text-slate-900 px-2 py-0.5 rounded text-sm">logs/posting.log</code> - Posting activity and errors</li>
                        <li><code className="bg-slate-100 text-slate-900 px-2 py-0.5 rounded text-sm">logs/ai.log</code> - Content generation and image processing</li>
                        <li><code className="bg-slate-100 text-slate-900 px-2 py-0.5 rounded text-sm">logs/chrome.log</code> - Browser automation details</li>
                    </ul>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4">View Logs</h3>
                    <div className="bg-slate-900 rounded-lg border border-slate-700 p-4 mb-6 font-mono text-sm">
                        <p className="text-gray-300">
                            <span className="text-purple-400">flashfender</span> logs view --type posting --tail 100
                        </p>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Debug Mode</h3>
                    <p className="text-slate-700 leading-relaxed mb-4">
                        Enable verbose logging for detailed troubleshooting:
                    </p>
                    <div className="bg-slate-900 rounded-lg border border-slate-700 p-4 mb-6 font-mono text-sm">
                        <p className="text-gray-300">
                            <span className="text-purple-400">flashfender</span> config set --debug true
                        </p>
                    </div>
                </div>
            </>
        )
    },
    "Support": {
        title: "Support",
        breadcrumb: "Troubleshooting",
        content: (
            <>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    Get help from our team when you need it most.
                </p>
                <div className="prose prose-slate max-w-none">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Contact Channels</h3>
                    <ul className="space-y-3 text-slate-700 mb-8">
                        <li><strong>Email:</strong> support@flashfender.com (24-48 hour response)</li>
                        <li><strong>Live Chat:</strong> Available Mon-Fri 9 AM - 6 PM EST</li>
                        <li><strong>Discord:</strong> Join our community for peer support</li>
                        <li><strong>Phone:</strong> Enterprise customers only</li>
                    </ul>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Before Contacting Support</h3>
                    <p className="text-slate-700 leading-relaxed mb-4">
                        Please have the following information ready:
                    </p>
                    <ul className="space-y-2 text-slate-700 mb-8">
                        <li>FlashFender version number</li>
                        <li>Operating system and version</li>
                        <li>Error messages or log excerpts</li>
                        <li>Steps to reproduce the issue</li>
                        <li>Screenshots if applicable</li>
                    </ul>

                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Premium Support</h3>
                    <p className="text-slate-700 leading-relaxed">
                        Professional and Enterprise plans include priority support with guaranteed response times and dedicated account managers.
                    </p>
                </div>
            </>
        )
    }
};

export default function DocumentationPage() {
    const [activeSection, setActiveSection] = useState("Installation");
    const currentDoc = documentationContent[activeSection];

    return (
        <div className="min-h-screen pt-24 pb-20 container mx-auto px-4 relative bg-gradient-to-b from-white via-slate-50 to-white">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10" />

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Documentation Sidebar */}
                <aside className="lg:w-64 flex-shrink-0 hidden lg:block">
                    <div className="sticky top-24 space-y-8">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <Input placeholder="Search docs..." className="pl-9 bg-white border-slate-200 text-slate-900" />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 border border-slate-200 px-1.5 py-0.5 rounded">
                                ⌘K
                            </div>
                        </div>

                        <nav className="space-y-6">
                            {docSections.map((section, i) => (
                                <div key={i}>
                                    <h4 className="font-semibold text-sm text-slate-900 mb-3 flex items-center">
                                        {section.title}
                                    </h4>
                                    <ul className="space-y-1 border-l border-slate-200 ml-1">
                                        {section.items.map((item, j) => (
                                            <li key={j}>
                                                <button
                                                    onClick={() => setActiveSection(item)}
                                                    className={`text-sm block pl-4 py-1 border-l -ml-px transition-colors text-left w-full ${activeSection === item
                                                        ? "border-blue-500 text-blue-600 font-medium"
                                                        : "border-transparent text-slate-600 hover:text-slate-900"
                                                        }`}
                                                >
                                                    {item}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </nav>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 lg:max-w-3xl">
                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm min-h-[80vh]">
                        <div className="flex items-center text-sm text-slate-600 mb-6">
                            <span>Docs</span>
                            <ChevronRight className="w-4 h-4 mx-2" />
                            <span>{currentDoc.breadcrumb}</span>
                            <ChevronRight className="w-4 h-4 mx-2" />
                            <span className="text-slate-900 font-medium">{activeSection}</span>
                        </div>

                        <h1 className="text-4xl font-bold mb-6 text-slate-900">{currentDoc.title}</h1>
                        {currentDoc.content}
                    </div>
                </main>

                {/* Right Sidebar (On This Page) */}
                <aside className="w-64 flex-shrink-0 hidden xl:block">
                    <div className="sticky top-24">
                        <h4 className="text-sm font-semibold mb-3 text-slate-900">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li><a href="/resources/api-reference" className="hover:text-slate-900 transition-colors">API Reference</a></li>
                            <li><a href="/resources/help-center" className="hover:text-slate-900 transition-colors">Help Center</a></li>
                            <li><a href="/contact" className="hover:text-slate-900 transition-colors">Contact Support</a></li>
                        </ul>
                    </div>
                </aside>
            </div>
        </div>
    );
}
