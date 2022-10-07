/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env:{
    apiUrl:'http://api.kk-lotto.com:8080/api'
  }
}

module.exports = nextConfig
