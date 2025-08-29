import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/groups/:groupId((?!/new).)*',
        destination: '/groups/:groupId*/records',
        permanent: false,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3001',
      },
     {
        protocol: 'https',
        hostname: 'nb4-seven-team2-backend.onrender.com',
      },
      {
        protocol: 'http',
        hostname: 'nb4-seven-team2-backend.onrender.com',
        port: '', // 포트 없으면 빈 문자열
        pathname: '/uploads/**', // 경로 패턴, 임시
      },
      {
        protocol: 'https',
        hostname: 'nb4-seven-team2-backend.onrender.com',
        port: '', // 포트 없으면 빈 문자열
        pathname: '/uploads/**', // 경로 패턴, 임시
      }

    ],
  },
};

export default nextConfig;
