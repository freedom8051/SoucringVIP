// app/page.tsx（首页）
import Seo from '@/components/Seo';

export default function Home() {
  return (
    <>
      <Seo title="首页 - SourcingVIP" description="专业跨境采购寻源平台" />
      <main>...</main>
    </>
  );
}
// app/page.tsx（首页）
import Script from 'next/script';

<Script
  type="application/ld+json"
  id="organization"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'SourcingVIP',
      'url': 'https://sourcingvip.com',
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+86-137-1040-3445',
        'contactType': 'customer service',
      },
    }),
  }}
/>