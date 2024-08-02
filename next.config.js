/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  swcMinify: true
  // experimental: {
  //   typedRoutes: true,
  // },
};

module.exports = nextConfig;
