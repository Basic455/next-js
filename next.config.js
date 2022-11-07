const { loadDefaultErrorComponents } = require('next/dist/server/load-components')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
}

module.exports = nextConfig
