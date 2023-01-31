/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // async redirects() {
  //   return [
  //     {
  //       source: '/(w|W)(i|I)(n|N)(e|E)-(i|I)(n|N)(f|F)(o|O)/:path*',
  //       destination: '/wine-info/:path*',
  //       permanent: true,
  //     },
  //     {
  //       source:
  //         '/(w|W)(i|I)(n|N)(e|E)-(s|S)(h|H)(o|O)(p|P)-(i|I)(n|N)(f|F)(o|O)/:path*',
  //       destination: '/wine-shop-info/:path*',
  //       permanent: true,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
