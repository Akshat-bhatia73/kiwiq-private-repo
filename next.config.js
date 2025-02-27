/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  swcMinify: false,
  images: { unoptimized: true },
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  }
};

module.exports = nextConfig;