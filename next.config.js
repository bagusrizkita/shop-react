/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  env: {
    appName: 'R-Shop'
  },

  images: {
    domains: ['cdn.shopify.com', 'api.lorem.space', 'placeimg.com', 'encrypted-tbn0.gstatic.com', 'connectsupport.colgate.com'],
  },

  async rewrites() {
    return [
      {
        source: '/login',

        destination: '/auth/login'
      },
      {
        source: '/infinite-scroll',
        destination: '/infinite_scroll'
      }
    ]
  }
}

module.exports = nextConfig
