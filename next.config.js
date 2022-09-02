/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  env: {
    appName: 'Rizkita Blog'
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
