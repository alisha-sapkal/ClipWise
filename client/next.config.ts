import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['lucide-react'],
    turbo: {
      rules: {
        '*.tsx': {
          loaders: ['@next/swc-loader'],
          as: '*.js',
        },
      },
    },
  },
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // Enhanced file watching for Windows with more aggressive polling
      config.watchOptions = {
        poll: 500, // Reduced polling interval for faster detection
        aggregateTimeout: 200, // Reduced timeout for faster updates
        ignored: ['**/node_modules', '**/.git', '**/.next'],
        followSymlinks: false,
      };
      
      // Enable hot module replacement
      config.optimization = {
        ...config.optimization,
        splitChunks: false, // Disable code splitting in dev for faster reloads
      };
    }
    return config;
  },
  // Disable static optimization in development for better hot reload
  ...(process.env.NODE_ENV === 'development' && {
    experimental: {
      optimizePackageImports: ['lucide-react'],
      optimizeCss: false,
    },
  }),
};

export default nextConfig;
