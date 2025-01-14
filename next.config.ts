import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Ativar modo estrito para detectar problemas em React

  webpack(config, { isServer }) {
    // Aqui você pode adicionar customizações no Webpack, se necessário
    if (!isServer) {
      // Por exemplo, podemos ignorar a dependência de 'fs' no cliente
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
