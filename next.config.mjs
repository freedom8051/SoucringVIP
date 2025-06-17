/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
// next.config.js
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['source.unsplash.com'], // 允许Next.js远程图片（可选）
  },
  async redirects() {
    return [
      // 可选：旧链接重定向规则
    ];
  },
};