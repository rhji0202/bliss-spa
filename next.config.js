/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    unoptimized: true,
    // 외부 이미지 도메인 허용이 필요한 경우
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // 실험적 기능 활성화
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["lucide-react"],
  },
  // 프로덕션 환경에서 콘솔 로그 제거
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

module.exports = nextConfig;
