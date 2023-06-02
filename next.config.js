/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    X_MICROCMS_API_KEY: process.env.X_MICROCMS_API_KEY,
  },
}

module.exports = nextConfig
