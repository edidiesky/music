/** @type {import('next').NextConfig} */
const webpack = require("webpack");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  images: {
    domains: [
      "avada.website",
      "kalanidhithemes.com",
      "i.scdn.co",
      "misc.scdn.co",
    ],
    formats: ["image/avif", "image/webp"],
  },
};
module.exports = nextConfig;



