/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true, // Ensures trailing slashes for URLs, useful for static export
  images: {
    unoptimized: true, // Disables the image optimization API for static export compatibility
  },
  exportPathMap: async function (defaultPathMap) {
    return {
      '/': { page: '/' },
      // Add more paths here if needed
    };
  },
};

module.exports = nextConfig;
