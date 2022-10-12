/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env:{
    apiUrl:'http://api.kk-lotto.com:8080/frontend-api',
    fronEndUrl:"http://kk-lotto.com" // //http://kk-lotto.com/ http://127.0.0.1:3000
  }
}

module.exports = nextConfig
