/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['https://picsum.photos/'],
    formats: ["image/webp"],
  },
}

module.exports = nextConfig
