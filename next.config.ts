import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false, 

  webpack(config, { isServer }) {
    
    if (!isServer) {
     
      config.resolve.fallback = { fs: false };
    }
    return config;
  },
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
  
};

export default nextConfig;
