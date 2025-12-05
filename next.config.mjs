/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
    ],
  },

  // Fix Server Actions error with tunnels
  experimental: {
    serverActions: {
      allowedOrigins: [
        "localhost:3000", // local
        "127.0.0.1:3000", // local
        // Add your devtunnel domain here (change this to your actual tunnel)
        "fvg3sbs5-3000.inc1.devtunnels.ms",
      ],
    },
  },
};

export default nextConfig;
