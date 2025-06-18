// app/about/page.js
'use client';

import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-600 mb-6">
              SourcingSimple is a trusted partner for businesses seeking reliable cross-border sourcing solutions. 
              With 5+ years of experience, we help small and medium enterprises (SMEs) source products from Asia, 
              Europe, and North America—without the hassle of navigating complex supply chains.
            </p>
            <p className="text-gray-600 mb-6">
              Our team of sourcing experts has helped over 200 businesses reduce procurement costs by 20-30% and 
              improve supply chain efficiency by 40%.
            </p>
          </div>
          <Image
            src="/images/team.jpg" // 确保图片存在（可替换为任意图片）
            alt="Our Team"
            width={500}
            height={300}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </>
  );
}