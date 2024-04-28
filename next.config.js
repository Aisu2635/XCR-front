/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
    output: 'standalone', // mine worked fine without this line
    // ... other config
}

module.exports = nextConfig
