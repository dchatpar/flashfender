import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FlashFender 2026 - AI-Powered Vehicle Posting Automation",
  description: "The most advanced AI-powered posting automation for auto dealerships. Post to 10+ platforms instantly. No shadow bans. No duplicates. Scale with confidence.",
  keywords: ["vehicle posting", "auto dealership", "AI content generation", "multi-platform posting", "automotive marketing", "car sales", "dealership software"],
  authors: [{ name: "FlashFender" }],
  openGraph: {
    title: "FlashFender 2026 - Auto-Post Vehicles Across 10+ Platforms",
    description: "AI-powered posting automation for modern dealerships",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "FlashFender 2026 - Auto-Post Vehicles Instantly",
    description: "AI-powered posting automation for dealerships",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "FlashFender",
    url: "https://flashfender.com",
    description: "AI-powered vehicle posting automation for auto dealerships",
    publisher: {
      "@type": "Organization",
      name: "FlashFender",
      logo: {
        "@type": "ImageObject",
        url: "https://flashfender.com/logo.png"
      }
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://flashfender.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#DC2626" />
        
        {/* Skip Link for Accessibility */}
        <style>{`
          .skip-link {
            position: absolute;
            top: -40px;
            left: 0;
            background: #DC2626;
            color: white;
            padding: 8px 16px;
            z-index: 100;
            transition: top 0.3s;
          }
          .skip-link:focus {
            top: 0;
          }
        `}</style>
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script 
          async 
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
