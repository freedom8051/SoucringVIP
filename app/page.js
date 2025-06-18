// app/page.js
'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* 首屏横幅 */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Professional Sourcing Services</h1>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Simplify cross-border sourcing, supplier vetting, and logistics coordination for your business.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
            Get Started
          </button>
        </div>
      </section>

      {/* 服务简介 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Supplier Vetting</h3>
              <p>Verify suppliers for quality, compliance, and capacity with our 12-point checklist.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Logistics Coordination</h3>
              <p>Optimize shipping routes, reduce transit time, and lower logistics costs by up to 25%.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}