/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    // Skip API route analysis during build to avoid errors from missing env vars
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
}

export default nextConfig
