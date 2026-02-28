"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Check, 
  ChevronRight, 
  ChevronLeft,
  Sparkles,
  Building2,
  Globe,
  Users,
  DollarSign,
  Mail,
  Phone,
  User,
  ArrowRight,
  CheckCircle2,
  Loader2
} from "lucide-react";

const steps = [
  { id: 1, title: "Industry", icon: Building2 },
  { id: 2, title: "Website", icon: Globe },
  { id: 3, title: "Inventory", icon: DollarSign },
  { id: 4, title: "Company", icon: Building2 },
  { id: 5, title: "Website URL", icon: Globe },
  { id: 6, title: "Role", icon: Users },
  { id: 7, title: "Budget", icon: DollarSign },
  { id: 8, title: "Name", icon: User },
  { id: 9, title: "Contact", icon: Mail },
];

const industries = [
  "Automotive / Powersports",
  "RV / Trailers",
  "Marine",
  "Mobile Homes",
  "Real Estate",
  "Farm Equipment",
  "Heavy Equipment",
  "Other"
];

const websiteOptions = ["Yes", "No", "In Progress"];
const inventorySizes = ["1-25 vehicles", "26-50 vehicles", "51-100 vehicles", "100-250 vehicles", "250+ vehicles"];
const roles = ["Owner", "General Manager", "Sales Manager", "Marketing Manager", "Other"];
const budgetRanges = ["Under $500/month", "$500-$1,000/month", "$1,000-$2,500/month", "$2,500+/month", "Just researching"];

export function BookingForm() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const [formData, setFormData] = useState({
    industry: "",
    hasWebsite: "",
    stockSize: "",
    companyName: "",
    websiteUrl: "",
    role: "",
    budget: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const validateStep = (currentStep: number) => {
    const newErrors: Record<string, string> = {};
    
    switch (currentStep) {
      case 1:
        if (!formData.industry) newErrors.industry = "Please select an industry";
        break;
      case 2:
        if (!formData.hasWebsite) newErrors.hasWebsite = "Please select an option";
        break;
      case 3:
        if (!formData.stockSize) newErrors.stockSize = "Please select your inventory size";
        break;
      case 4:
        if (!formData.companyName) newErrors.companyName = "Company name is required";
        break;
      case 5:
        if (formData.hasWebsite === "Yes" && !formData.websiteUrl) {
          newErrors.websiteUrl = "Website URL is required";
        }
        break;
      case 6:
        if (!formData.role) newErrors.role = "Please select your role";
        break;
      case 7:
        if (!formData.budget) newErrors.budget = "Please select a budget range";
        break;
      case 8:
        if (!formData.firstName) newErrors.firstName = "First name is required";
        if (!formData.lastName) newErrors.lastName = "Last name is required";
        break;
      case 9:
        if (!formData.email) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";
        if (!formData.phone) newErrors.phone = "Phone number is required";
        break;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setDirection(1);
      setStep(prev => Math.min(prev + 1, 9));
    }
  };

  const prevStep = () => {
    setDirection(-1);
    setStep(prev => Math.max(prev - 1, 1));
    setErrors({});
  };

  const handleInput = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = async () => {
    if (!validateStep(9)) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const getDirection = () => direction;

  if (isSuccess) {
    return (
      <section ref={containerRef} className="py-20 md:py-24 px-4 bg-slate-50">
        <div className="max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-xl text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </motion.div>
            
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Thank You!
            </h2>
            <p className="text-slate-600 mb-6">
              Your demo request has been submitted. Our team will contact you within 2 hours during business hours.
            </p>
            
            <div className="bg-slate-50 rounded-xl p-4 text-left">
              <p className="text-sm text-slate-500 mb-2">What happens next?</p>
              <ul className="text-sm text-slate-700 space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  Personalized demo call scheduled
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  Custom integration plan created
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  14-day free trial activated
                </li>
              </ul>
            </div>
            
            <Button 
              onClick={() => window.location.href = "/"}
              className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white rounded-full"
            >
              Back to Home
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section ref={containerRef} className="py-20 md:py-24 px-4 bg-slate-50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Get Started in <span className="text-blue-600">60 Seconds</span>
          </h2>
          <p className="text-slate-600 text-lg">
            Connect your dealership to see how FlashFender can transform your inventory sales.
          </p>
        </motion.div>

        {/* Progress Stepper */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-slate-600">Step {step} of {steps.length}</span>
            <span className="text-sm font-medium text-slate-600">{Math.round((step / steps.length) * 100)}% complete</span>
          </div>
          <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-red-500 to-blue-500"
              initial={{ width: 0 }}
              animate={{ width: `${(step / steps.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          
          {/* Step Indicators */}
          <div className="flex justify-between mt-4">
            {steps.map((s) => (
              <div 
                key={s.id}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-colors ${
                  s.id < step 
                    ? "bg-green-500 text-white" 
                    : s.id === step 
                      ? "bg-red-600 text-white" 
                      : "bg-slate-200 text-slate-500"
                }`}
              >
                {s.id < step ? <Check className="w-4 h-4" /> : s.id}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden"
        >
          <div className="p-6 md:p-10 min-h-[420px] flex flex-col">
            <AnimatePresence mode="wait" custom={getDirection()}>
              
              {/* Step 1: Industry */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  custom={getDirection()}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="flex-1"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-red-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">Which industry are you in?</h3>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {industries.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleInput("industry", opt)}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          formData.industry === opt 
                            ? 'border-red-500 bg-red-50' 
                            : 'border-slate-200 hover:border-red-300 hover:bg-slate-50'
                        }`}
                      >
                        <span className={`text-sm font-medium ${formData.industry === opt ? 'text-red-600' : 'text-slate-700'}`}>
                          {opt}
                        </span>
                        {formData.industry === opt && <Check className="w-5 h-5 text-red-600 mt-2" />}
                      </button>
                    ))}
                  </div>
                  {errors.industry && <p className="text-red-500 text-sm mt-3">{errors.industry}</p>}
                </motion.div>
              )}

              {/* Step 2: Website */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  custom={getDirection()}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="flex-1"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Globe className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">Do you have a website with inventory?</h3>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {websiteOptions.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleInput("hasWebsite", opt)}
                        className={`p-6 rounded-xl border-2 text-center transition-all ${
                          formData.hasWebsite === opt 
                            ? 'border-blue-500 bg-blue-50' 
                            : 'border-slate-200 hover:border-blue-300 hover:bg-slate-50'
                        }`}
                      >
                        <span className={`text-lg font-semibold ${formData.hasWebsite === opt ? 'text-blue-600' : 'text-slate-700'}`}>
                          {opt}
                        </span>
                        {formData.hasWebsite === opt && <Check className="w-5 h-5 text-blue-600 mx-auto mt-2" />}
                      </button>
                    ))}
                  </div>
                  {errors.hasWebsite && <p className="text-red-500 text-sm mt-3">{errors.hasWebsite}</p>}
                </motion.div>
              )}

              {/* Step 3: Inventory */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  custom={getDirection()}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="flex-1"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">How many vehicles do you have in stock?</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {inventorySizes.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleInput("stockSize", opt)}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          formData.stockSize === opt 
                            ? 'border-green-500 bg-green-50' 
                            : 'border-slate-200 hover:border-green-300 hover:bg-slate-50'
                        }`}
                      >
                        <span className={`text-sm font-medium ${formData.stockSize === opt ? 'text-green-600' : 'text-slate-700'}`}>
                          {opt}
                        </span>
                        {formData.stockSize === opt && <Check className="w-5 h-5 text-green-600 mt-2" />}
                      </button>
                    ))}
                  </div>
                  {errors.stockSize && <p className="text-red-500 text-sm mt-3">{errors.stockSize}</p>}
                </motion.div>
              )}

              {/* Step 4: Company Name */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  custom={getDirection()}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="flex-1"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">What is your company name?</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Company Name</Label>
                      <Input 
                        id="companyName"
                        placeholder="Acme Motors" 
                        value={formData.companyName}
                        onChange={(e) => handleInput("companyName", e.target.value)}
                        className="h-12 rounded-xl"
                      />
                      {errors.companyName && <p className="text-red-500 text-sm">{errors.companyName}</p>}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 5: Website URL */}
              {step === 5 && formData.hasWebsite === "Yes" && (
                <motion.div
                  key="step5"
                  custom={getDirection()}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="flex-1"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center">
                      <Globe className="w-5 h-5 text-cyan-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">What is your website URL?</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="websiteUrl">Website URL</Label>
                      <Input 
                        id="websiteUrl"
                        placeholder="www.example.com" 
                        value={formData.websiteUrl}
                        onChange={(e) => handleInput("websiteUrl", e.target.value)}
                        className="h-12 rounded-xl"
                      />
                      {errors.websiteUrl && <p className="text-red-500 text-sm">{errors.websiteUrl}</p>}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 6: Role */}
              {step === 6 && (
                <motion.div
                  key="step6"
                  custom={getDirection()}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="flex-1"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                      <Users className="w-5 h-5 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">What is your role?</h3>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {roles.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleInput("role", opt)}
                        className={`p-4 rounded-xl border-2 text-center transition-all ${
                          formData.role === opt 
                            ? 'border-orange-500 bg-orange-50' 
                            : 'border-slate-200 hover:border-orange-300 hover:bg-slate-50'
                        }`}
                      >
                        <span className={`text-sm font-medium ${formData.role === opt ? 'text-orange-600' : 'text-slate-700'}`}>
                          {opt}
                        </span>
                        {formData.role === opt && <Check className="w-5 h-5 text-orange-600 mx-auto mt-2" />}
                      </button>
                    ))}
                  </div>
                  {errors.role && <p className="text-red-500 text-sm mt-3">{errors.role}</p>}
                </motion.div>
              )}

              {/* Step 7: Budget */}
              {step === 7 && (
                <motion.div
                  key="step7"
                  custom={getDirection()}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="flex-1"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-pink-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">What is your monthly budget?</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {budgetRanges.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleInput("budget", opt)}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          formData.budget === opt 
                            ? 'border-pink-500 bg-pink-50' 
                            : 'border-slate-200 hover:border-pink-300 hover:bg-slate-50'
                        }`}
                      >
                        <span className={`text-sm font-medium ${formData.budget === opt ? 'text-pink-600' : 'text-slate-700'}`}>
                          {opt}
                        </span>
                        {formData.budget === opt && <Check className="w-5 h-5 text-pink-600 mt-2" />}
                      </button>
                    ))}
                  </div>
                  {errors.budget && <p className="text-red-500 text-sm mt-3">{errors.budget}</p>}
                </motion.div>
              )}

              {/* Step 8: Name */}
              {step === 8 && (
                <motion.div
                  key="step8"
                  custom={getDirection()}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="flex-1"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                      <User className="w-5 h-5 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">What is your name?</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input 
                        id="firstName"
                        placeholder="John" 
                        value={formData.firstName}
                        onChange={(e) => handleInput("firstName", e.target.value)}
                        className="h-12 rounded-xl"
                      />
                      {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input 
                        id="lastName"
                        placeholder="Doe" 
                        value={formData.lastName}
                        onChange={(e) => handleInput("lastName", e.target.value)}
                        className="h-12 rounded-xl"
                      />
                      {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 9: Contact */}
              {step === 9 && (
                <motion.div
                  key="step9"
                  custom={getDirection()}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="flex-1"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center">
                      <Mail className="w-5 h-5 text-rose-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">How can we reach you?</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Work Email</Label>
                      <Input 
                        id="email"
                        type="email"
                        placeholder="john@company.com" 
                        value={formData.email}
                        onChange={(e) => handleInput("email", e.target.value)}
                        className="h-12 rounded-xl"
                      />
                      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone"
                        type="tel"
                        placeholder="(555) 555-5555" 
                        value={formData.phone}
                        onChange={(e) => handleInput("phone", e.target.value)}
                        className="h-12 rounded-xl"
                      />
                      {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                    </div>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-slate-100">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={step === 1}
                className="px-6 rounded-full"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Back
              </Button>

              {step < 9 ? (
                <Button
                  onClick={nextStep}
                  className="px-8 bg-red-600 hover:bg-red-700 text-white rounded-full"
                >
                  Continue
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="px-8 bg-red-600 hover:bg-red-700 text-white rounded-full"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Request
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              )}
            </div>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500"
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            <span>14-day free trial</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            <span>Cancel anytime</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
