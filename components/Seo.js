// components/Seo.js
'use client';

import { NextSeo } from 'next-seo';
import Script from 'next/script';

// 默认 SEO 配置（英文）
const DEFAULT_SEO = {
  title: 'SourcingVIP - Professional Cross-Border Sourcing Platform',
  description: 'Trusted by 500+ global enterprises, we streamline supplier sourcing, factory audits, and logistics coordination for seamless cross-border procurement.',
  canonical: 'https://sourcingvip.com',
  openGraph: {
    url: 'https://sourcingvip.com',
    title: 'SourcingVIP - Professional Cross-Border Sourcing Platform',
    description: 'Trusted by 500+ global enterprises for end-to-end cross-border sourcing solutions',
    images: [{ url: '/og-image-en.jpg' }], // 替换为英文 OG 图片（建议尺寸 1200x630）
    site_name: 'SourcingVIP',
  },
  twitter: {
    handle: '@sourcingvip',
    site: '@sourcingvip',
    cardType: 'summary_large_image',
  },
};

// 结构化数据（Organization Schema，英文）
const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SourcingVIP',
  url: 'https://sourcingvip.com',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-555-123-4567', // 替换为欧美常用区号（如美国+1）
    contactType: 'customer service',
    areaServed: 'Global',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Business St',
    addressLocality: 'New York',
    addressRegion: 'NY',
    postalCode: '10001',
    addressCountry: 'US',
  },
  sameAs: [
    'https://linkedin.com/company/sourcingvip',
    'https://twitter.com/sourcingvip',
    'https://facebook.com/sourcingvip',
  ],
};

export default function Seo({ 
  title, 
  description, 
  canonicalUrl, 
  children 
}) {
  return (
    <>
      <NextSeo
        title={title || DEFAULT_SEO.title}
        description={description || DEFAULT_SEO.description}
        canonical={canonicalUrl || DEFAULT_SEO.canonical}
        openGraph={DEFAULT_SEO.openGraph}
        twitter={DEFAULT_SEO.twitter}
      />

      {/* 结构化数据（嵌入页面头部） */}
      <Script
        type="application/ld+json"
        id="organization"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(ORGANIZATION_SCHEMA),
        }}
      />

      {children}
    </>
  );
}