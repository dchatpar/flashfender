import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**",
      },
    ],
  },

  async redirects() {
    return [
      // Resources redirects
      {
        source: '/docs',
        destination: '/resources/documentation',
        permanent: true,
      },
      {
        source: '/help',
        destination: '/resources/help-center',
        permanent: true,
      },
      {
        source: '/api',
        destination: '/resources/api-reference',
        permanent: true,
      },
      {
        source: '/status',
        destination: '/resources/status',
        permanent: true,
      },
      // Legal redirects
      {
        source: '/privacy',
        destination: '/legal/privacy',
        permanent: true,
      },
      {
        source: '/terms',
        destination: '/legal/terms',
        permanent: true,
      },
      {
        source: '/cookies',
        destination: '/legal/cookie-policy',
        permanent: true,
      },
      {
        source: '/gdpr',
        destination: '/legal/gdpr',
        permanent: true,
      },
      // Company redirects
      {
        source: '/about',
        destination: '/company/about',
        permanent: true,
      },
      {
        source: '/blog',
        destination: '/company/blog',
        permanent: true,
      },
      {
        source: '/careers',
        destination: '/company/careers',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
