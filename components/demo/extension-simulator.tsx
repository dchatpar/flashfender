"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Check, Copy, RefreshCw, ExternalLink, Settings, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Step {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

const INITIAL_STEPS: Step[] = [
  { id: 1, title: "Select Vehicle", description: "Choose a vehicle from your inventory", completed: false },
  { id: 2, title: "AI Generates Content", description: "Our AI creates unique posts for each platform", completed: false },
  { id: 3, title: "Customize & Preview", description: "Review and tweak the generated content", completed: false },
  { id: 4, title: "One-Click Post", description: "Publish to all selected platforms instantly", completed: false },
];

const PLATFORMS = [
  { id: "facebook", name: "Facebook Marketplace", icon: "📘", color: "bg-blue-600" },
  { id: "instagram", name: "Instagram", icon: "📸", color: "bg-gradient-to-br from-purple-600 to-pink-500" },
  { id: "twitter", name: "Twitter/X", icon: "🐦", color: "bg-black" },
  { id: "linkedin", name: "LinkedIn", icon: "💼", color: "bg-blue-700" },
  { id: "autotrader", name: "AutoTrader", icon: "🚗", color: "bg-red-600" },
  { id: "carscom", name: "Cars.com", icon: "🔍", color: "bg-orange-500" },
];

export function ChromeExtensionSimulator() {
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState(INITIAL_STEPS);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(["facebook", "instagram"]);
  const [generatedContent, setGeneratedContent] = useState<Record<string, string>>({});
  const [isGenerating, setIsGenerating] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const handleStepComplete = () => {
    if (currentStep < steps.length - 1) {
      setSteps(prev => prev.map((s, i) => i === currentStep ? { ...s, completed: true } : s));
      setCurrentStep(prev => prev + 1);

      if (currentStep === 0) {
        setIsGenerating(true);
        setTimeout(() => {
          setGeneratedContent({
            facebook: "🚗 2024 BMW X5 xDrive40i - Premium SUV with ONLY 12,000 miles! Features include panoramic sunroof, leather seats, and the latest iDrive system. Priced to sell at $52,990! #BMW #LuxurySUV #Premium",
            instagram: "Luxury meets performance ✨\n.\n.\n2024 BMW X5 xDrive40i\n.\n.\n🌟 12,000 miles\n🌟 Panoramic sunroof\n🌟 Premium leather\n.\n.\n$52,990\n.\n.\n#BMW #X5 #LuxurySUV #CarLife #DreamCar",
            twitter: "2024 BMW X5 xDrive40i - 12K miles, panoramic roof, premium leather! $52,990. DM for details! 🚗💨 #BMW #LuxuryCars",
            linkedin: "Exciting opportunity! This 2024 BMW X5 xDrive40i combines luxury with performance. Features: Panoramic sunroof, premium leather interior, advanced safety systems. Only 12,000 miles. Contact us for pricing.",
            autotrader: "2024 BMW X5 xDrive40i SUV in stunning Alpine White. Features: Navigation, Harman Kardon sound, driving assistant, parking assistant. 12,000 miles. $52,990.",
            carscom: "2024 BMW X5 xDrive40i - Alpine White exterior, Black leather interior. Options: Premium Package, Driving Assistance Professional, Parking Assistant. 12,000 mi. $52,990. VIN: WBA23AT09NCH12345",
          });
          setIsGenerating(false);
        }, 2000);
      }

      if (currentStep === 1 && !generatedContent.facebook) {
        setIsGenerating(true);
        setTimeout(() => {
          setGeneratedContent({
            facebook: "🚗 2024 BMW X5 xDrive40i - Premium SUV with ONLY 12,000 miles! Features include panoramic sunroof, leather seats, and the latest iDrive system. Priced to sell at $52,990! #BMW #LuxurySUV #Premium",
            instagram: "Luxury meets performance ✨\n.\n.\n2024 BMW X5 xDrive40i\n.\n.\n🌟 12,000 miles\n🌟 Panoramic sunroof\n🌟 Premium leather\n.\n.\n$52,990\n.\n.\n#BMW #X5 #LuxurySUV #CarLife #DreamCar",
            twitter: "2024 BMW X5 xDrive40i - 12K miles, panoramic roof, premium leather! $52,990. DM for details! 🚗💨 #BMW #LuxuryCars",
            linkedin: "Exciting opportunity! This 2024 BMW X5 xDrive40i combines luxury with performance. Features: Panoramic sunroof, premium leather interior, advanced safety systems. Only 12,000 miles. Contact us for pricing.",
            autotrader: "2024 BMW X5 xDrive40i SUV in stunning Alpine White. Features: Navigation, Harman Kardon sound, driving assistant, parking assistant. 12,000 miles. $52,990.",
            carscom: "2024 BMW X5 xDrive40i - Alpine White exterior, Black leather interior. Options: Premium Package, Driving Assistance Professional, Parking Assistant. 12,000 mi. $52,990. VIN: WBA23AT09NCH12345",
          });
          setIsGenerating(false);
        }, 2000);
      }
    }
  };

  const togglePlatform = (id: string) => {
    setSelectedPlatforms(prev =>
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🔧</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">FlashFender Chrome Extension</h3>
              <p className="text-sm text-white/60">See it in action</p>
            </div>
          </div>

          <div className="space-y-3">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-start gap-4 p-4 rounded-xl transition-all ${
                  index === currentStep ? "bg-primary/20 border border-primary/50" :
                  step.completed ? "bg-green-500/10 border border-green-500/30" :
                  "bg-white/5 border border-white/10"
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  step.completed ? "bg-green-500" : index === currentStep ? "bg-primary" : "bg-white/20"
                }`}>
                  {step.completed ? <Check className="w-4 h-4 text-white" /> :
                   index === currentStep ? <span className="text-white text-sm font-bold">{step.id}</span> :
                   <span className="text-white/60 text-sm">{step.id}</span>}
                </div>
                <div className="flex-1">
                  <h4 className={`font-medium ${index === currentStep ? "text-white" : step.completed ? "text-green-400" : "text-white/60"}`}>
                    {step.title}
                  </h4>
                  <p className="text-sm text-white/50">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <Button
            onClick={handleStepComplete}
            disabled={currentStep === 2 && selectedPlatforms.length === 0}
            className="w-full"
            size="lg"
          >
            {currentStep === 2 ? "Review Content" : currentStep === 3 ? "Complete Demo" : "Continue"}
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="relative">
          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-800 border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <div className="ml-4 px-3 py-1 bg-gray-700 rounded text-xs text-white/60">
                flashfender.com
              </div>
            </div>

            <div className="p-6 space-y-6">
              {currentStep === 0 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <h4 className="text-lg font-semibold text-white mb-4">Select Platforms</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {PLATFORMS.map(platform => (
                      <button
                        key={platform.id}
                        onClick={() => togglePlatform(platform.id)}
                        className={`flex items-center gap-3 p-3 rounded-xl border transition-all ${
                          selectedPlatforms.includes(platform.id)
                            ? "border-primary bg-primary/10"
                            : "border-white/10 hover:border-white/30"
                        }`}
                      >
                        <span className="text-xl">{platform.icon}</span>
                        <span className="text-sm text-white">{platform.name}</span>
                        {selectedPlatforms.includes(platform.id) && (
                          <Check className="w-4 h-4 text-primary ml-auto" />
                        )}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {(currentStep === 1 || currentStep === 2) && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-white">Generated Content</h4>
                    <button className="text-sm text-primary hover:underline flex items-center gap-1">
                      <RefreshCw className="w-3 h-3" />
                      Regenerate
                    </button>
                  </div>

                  {isGenerating ? (
                    <div className="space-y-4">
                      {[1, 2].map(i => (
                        <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-4 h-4 rounded-full bg-primary/30 animate-pulse" />
                            <span className="text-sm text-white/60">Generating...</span>
                          </div>
                          <div className="h-4 bg-white/10 rounded animate-pulse" />
                          <div className="h-4 bg-white/10 rounded w-3/4 mt-2 animate-pulse" />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-4 max-h-[400px] overflow-y-auto">
                      {selectedPlatforms.map(platformId => {
                        const platform = PLATFORMS.find(p => p.id === platformId);
                        return (
                          <div key={platformId} className="p-4 rounded-xl bg-white/5 border border-white/10">
                            <div className="flex items-center gap-2 mb-2">
                              <span>{platform?.icon}</span>
                              <span className="text-sm font-medium text-white">{platform?.name}</span>
                              <button className="ml-auto text-white/40 hover:text-white">
                                <Copy className="w-4 h-4" />
                              </button>
                            </div>
                            <p className="text-sm text-white/70 whitespace-pre-wrap">
                              {generatedContent[platformId] || "Content will appear here..."}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-8">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-10 h-10 text-green-500" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Successfully Posted!</h4>
                  <p className="text-white/60 mb-6">Your vehicles are now live on {selectedPlatforms.length} platforms</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {selectedPlatforms.map(platformId => {
                      const platform = PLATFORMS.find(p => p.id === platformId);
                      return (
                        <span key={platformId} className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80">
                          {platform?.icon} {platform?.name}
                        </span>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full blur-3xl opacity-30" />
        </div>
      </div>
    </div>
  );
}
