"use client";

import { Hero } from "@/components/home/hero";
import { FeatureBento } from "@/components/home/feature-grid";
import { PlatformShowcase } from "@/components/home/platform-showcase";
import { Testimonials } from "@/components/home/testimonials";
import { Niches } from "@/components/home/niches";
import { Results } from "@/components/home/results";
import { VideoShowcase } from "@/components/home/video-showcase";
import { BlogGrid } from "@/components/home/blog-grid";
import { BookingForm } from "@/components/home/booking-form";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Niches />
      <Results />
      <VideoShowcase />
      <FeatureBento />
      <PlatformShowcase />
      <Testimonials />
      <BlogGrid />
      <BookingForm />
    </main>
  );
}
