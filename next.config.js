/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable webpack cache to prevent Windows file locking issues
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      config.cache = false;
    }
    return config;
  },
  // Enable experimental features for better HMR
  experimental: {
    // Disable turbopack if it's causing issues
    turbo: undefined,
  },
}

module.exports = nextConfig
