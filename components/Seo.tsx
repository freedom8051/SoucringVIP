// components/Seo.tsx
'use client';

import { NextSeo } from 'next-seo';

export default function Seo({ title, description, canonicalUrl }) {
  const defaultTitle = 'SourcingVIP - 专业跨境采购寻源平台';
  const defaultDescription = '提供全球供应商筛选、验厂、物流协调一站式服务';

  return (
    <NextSeo
      title={title || defaultTitle}
      description={description || defaultDescription}
      canonical={canonicalUrl || `https://sourcingvip.com${window.location.pathname}`}
      openGraph={{
        url: `https://sourcingvip.com${window.location.pathname}`,
        title: title || defaultTitle,
        description: description || defaultDescription,
        images: [{ url: '/og-image.jpg' }], // 预定义OG图片（存放在public目录）
      }}
    />
  );
}