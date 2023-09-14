/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  transpilePackages: ['gsap'],

  images: {
    domains: [
      'images.unsplash.com',
    ]
  }
}
