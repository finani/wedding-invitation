/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig : {
    PUBLIC_KAKAO_API_KEY : process.env.KAKAO_API_KEY
  },
};

module.exports = nextConfig;
