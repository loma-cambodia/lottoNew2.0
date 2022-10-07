/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env:{
    apiUrl: process.env.API_BASE_URL,
  }
}

module.exports = nextConfig
