// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  experimental: {
    appDir: true,
  },
}

// eslint-disable-next-line no-undef
module.exports = nextConfig
