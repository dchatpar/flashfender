"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Car, 
  Home, 
  Truck, 
  Ship, 
  Tractor, 
  Armchair, 
  Smartphone, 
  Music, 
  Book, 
  Bike,
  Waves,
  Warehouse,
  Gem
} from "lucide-react";

const niches = [
  { name: "Auto Dealerships", icon: Car, color: "from-red-500 to-red-600", description: "Cars, trucks, SUVs" },
  { name: "RV Dealerships", icon: Home, color: "from-blue-500 to-blue-600", description: "Motorhomes & travel trailers" },
  { name: "Powersports / Marine", icon: Ship, color: "from-cyan-500 to-cyan-600", description: "ATVs, boats, jet skis" },
  { name: "Mobile Home Dealers", icon: Warehouse, color: "from-purple-500 to-purple-600", description: "Manufactured homes" },
  { name: "Trailer Dealers", icon: Truck, color: "from-orange-500 to-orange-600", description: "Utility & cargo trailers" },
  { name: "Commercial Equipment", icon: Tractor, color: "from-green-500 to-green-600", description: "Farm & construction" },
  { name: "Furniture Stores", icon: Armchair, color: "from-amber-500 to-amber-600", description: "Home & office furniture" },
  { name: "Electronics", icon: Smartphone, color: "from-indigo-500 to-indigo-600", description: "Gadgets & appliances" },
  { name: "Music Stores", icon: Music, color: "from-pink-500 to-pink-600", description: "Instruments & audio" },
  { name: "Book Stores", icon: Book, color: "from-yellow-600 to-yellow-700", description: "Books & media" },
  { name: "Jewelry", icon: Gem, color: "from-violet-500 to-violet-600", description: "Watches & jewelry" },
  { name: "Bike Shops", icon: Bike, color: "from-emerald-500 to-emerald-600", description: "Bicycles & accessories" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

function NicheCard({ niche, index }: { niche: typeof niches[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      custom={index}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={cardVariants}
      whileHover={{ 
        y: -8, 
        transition: { duration: 0.3 }
      }}
      className="group cursor-pointer"
    >
      <div className="relative p-6 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-xl">
        {/* Gradient Border Effect on Hover */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${niche.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
        
        {/* Glow Effect */}
        <div className={`absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br ${niche.color} rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />

        <div className="relative z-10">
          {/* Icon */}
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${niche.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            <niche.icon className="w-7 h-7 text-white" />
          </div>

          {/* Content */}
          <h3 className="font-semibold text-slate-900 mb-1 group-hover:text-red-600 transition-colors">
            {niche.name}
          </h3>
          <p className="text-sm text-slate-500">
            {niche.description}
          </p>
        </div>

        {/* Arrow Indicator */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${niche.color} flex items-center justify-center`}>
            <ArrowRight className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ArrowRight(props: any) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export function Niches() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-24 px-4 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-50/50 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 md:mb-6">
            Who We <span className="text-blue-600">Serve</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            FlashFender is built for any business with high-value inventory. 
            From dealerships to retail stores, we help you list faster and sell more.
          </p>
        </motion.div>

        {/* Niches Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
          {niches.map((niche, index) => (
            <NicheCard key={niche.name} niche={niche} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-600">
            Don&apos;t see your industry?{" "}
            <a href="/contact" className="text-red-600 font-medium hover:underline">
              Let us know
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
