/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'skillicons.dev',
        port: '',
        pathname: '/icons/**',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // 在构建时忽略 ESLint 错误和警告
  },
};

export default nextConfig;
