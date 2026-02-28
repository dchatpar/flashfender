"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Copy, Check, ChevronRight, Loader2, BookOpen, Code, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const API_ENDPOINTS = [
  {
    id: "create",
    method: "POST",
    path: "/api/tracking/create",
    description: "Create a new tracking link",
    body: { description: "Facebook Ads Campaign" },
  },
  {
    id: "stats",
    method: "POST",
    path: "/api/tracking/stats",
    description: "Get tracking statistics",
    body: { password: "yourpassword" },
  },
  {
    id: "setup",
    method: "POST",
    path: "/api/tracking/setup",
    description: "Set up dashboard password",
    body: { password: "newpassword" },
  },
];

const CODE_EXAMPLES = {
  javascript: `const response = await fetch('https://api.flashfender.com/api/tracking/create', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    description: 'Facebook Ads Campaign'
  })
});

const data = await response.json();
console.log(data); // { success: true, code: 'ABC123', url: '/t/ABC123' }`,
  python: `import requests

response = requests.post(
    'https://api.flashfender.com/api/tracking/create',
    json={'description': 'Facebook Ads Campaign'}
)

data = response.json()
print(data)  # {'success': True, 'code': 'ABC123', 'url': '/t/ABC123'}`,
  curl: `curl -X POST https://api.flashfender.com/api/tracking/create \\
  -H "Content-Type: application/json" \\
  -d '{"description":"Facebook Ads Campaign"}'`,
};

export function APIPlayground() {
  const [selectedEndpoint, setSelectedEndpoint] = useState(API_ENDPOINTS[0]);
  const [selectedLang, setSelectedLang] = useState<keyof typeof CODE_EXAMPLES>("javascript");
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleExecute = async () => {
    setIsLoading(true);
    setResponse(null);

    await new Promise(resolve => setTimeout(resolve, 1000));

    setResponse(JSON.stringify({
      success: true,
      code: "abc123xyz",
      url: "/t/abc123xyz",
      createdAt: new Date().toISOString()
    }, null, 2));

    setIsLoading(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(CODE_EXAMPLES[selectedLang]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-4">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold text-white">API Endpoints</h3>
          </div>

          {API_ENDPOINTS.map((endpoint) => (
            <button
              key={endpoint.id}
              onClick={() => setSelectedEndpoint(endpoint)}
              className={`w-full text-left p-4 rounded-xl transition-all ${
                selectedEndpoint.id === endpoint.id
                  ? "bg-primary/20 border border-primary/50"
                  : "bg-white/5 border border-white/10 hover:border-white/30"
              }`}
            >
              <div className="flex items-center gap-3 mb-1">
                <span className={`px-2 py-0.5 rounded text-xs font-mono ${
                  endpoint.method === "POST" ? "bg-green-500/20 text-green-400" :
                  endpoint.method === "GET" ? "bg-blue-500/20 text-blue-400" :
                  "bg-yellow-500/20 text-yellow-400"
                }`}>
                  {endpoint.method}
                </span>
                <span className="text-sm text-white/70 font-mono">{endpoint.path}</span>
              </div>
              <p className="text-sm text-white/50">{endpoint.description}</p>
            </button>
          ))}
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Code className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold text-white">Code Example</h3>
            </div>
            <div className="flex gap-2">
              {(["javascript", "python", "curl"] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setSelectedLang(lang)}
                  className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                    selectedLang === lang
                      ? "bg-primary text-white"
                      : "bg-white/10 text-white/60 hover:text-white"
                  }`}
                >
                  {lang.charAt(0).toUpperCase() + lang.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="relative">
            <pre className="p-4 bg-gray-900 rounded-xl border border-white/10 overflow-x-auto">
              <code className="text-sm text-white/80 font-mono">
                {CODE_EXAMPLES[selectedLang]}
              </code>
            </pre>
            <button
              onClick={handleCopy}
              className="absolute top-4 right-4 p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-white/60" />}
            </button>
          </div>

          <div className="flex items-center justify-between">
            <Button onClick={handleExecute} disabled={isLoading} className="gap-2">
              {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
              Try It Now
            </Button>
          </div>

          {response && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl"
            >
              <div className="flex items-center gap-2 mb-2">
                <Check className="w-4 h-4 text-green-400" />
                <span className="text-sm font-medium text-green-400">Response</span>
              </div>
              <pre className="text-sm text-white/80 font-mono overflow-x-auto">
                {response}
              </pre>
            </motion.div>
          )}
        </div>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {[
          { icon: Zap, title: "Fast Integration", description: "Get up and running in minutes with our simple API" },
          { icon: BookOpen, title: "Full Documentation", description: "Comprehensive guides and API references" },
          { icon: Code, title: "SDKs Available", description: "JavaScript, Python, and more coming soon" },
        ].map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-6 bg-white/5 rounded-xl border border-white/10"
          >
            <feature.icon className="w-8 h-8 text-primary mb-4" />
            <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
            <p className="text-sm text-white/60">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
