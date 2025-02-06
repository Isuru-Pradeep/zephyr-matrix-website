/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['assets.zephyrmatrix.com'],
      formats: ['image/avif', 'image/webp'],
    },
    // experimental: {
    //   appDir: true,
    // },
  };
  
  module.exports = nextConfig;