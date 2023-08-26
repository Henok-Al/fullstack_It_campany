/** @type {import('next').NextConfig} */
const nextConfig = {
  
  images: {
    // domains: ["images.pexels.com", "img.freepik.com"],
    
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
