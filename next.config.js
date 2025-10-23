/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Add an asterisk (*) to allow all local network subdomains.
  allowedDevOrigins: [
    '*.local',
    'localhost',
    // '192.168.1.112',
    // '10.255.255.254',
  ],
  /*
  // WSL-specific configuration
  experimental: {
    // This helps with WSL networking issues
    esmExternals: false,
  },
  // Increase timeout for WSL
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      }
    }
    return config
  },
  */
}

module.exports = nextConfig
