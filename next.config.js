/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'picsum.photos',
            port: '',
          },
          {
            protocol:'https',
            hostname:'avatars.githubusercontent.com'
          }
        ],
      },
}

module.exports = nextConfig
