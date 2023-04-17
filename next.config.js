/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
rewrites: async() => [
  {
    source: "/public/index.html",
    destination: "/pages/api/api.js",
  },
]
