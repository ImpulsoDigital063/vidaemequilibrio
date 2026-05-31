import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Libera acesso ao dev server pelo IP da rede (testar no celular)
  allowedDevOrigins: ["192.168.10.113"],
  images: {
    qualities: [75, 86],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
