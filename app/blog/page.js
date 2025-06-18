// app/blog/page.js
'use client';

import Seo from '@/components/Seo';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function Blog() {
  return (
    <Seo 
      title="Cross-Border Sourcing Trends 2024 | SourcingVIP" 
      description="Explore 2024 cross-border sourcing trends: nearshoring, sustainable procurement, AI-driven supplier matching. Stay ahead of the curve."
      canonicalUrl="https://sourcingvip.com/blog"
    >
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <Breadcrumbs currentPage="Blog" />

        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-4">2024 Cross-Border Sourcing Trends Every Business Should Know</h1>
          <p className="text-lg text-gray-700 mb-8">
            The global supply chain landscape is evolving rapidly. Here’s what to expect in 2024—and how to adapt.
          </p>

          <article className="bg-white p-6 rounded-lg shadow-md mb-12">
            <h2 className="text-2xl font-semibold mb-4">1. Nearshoring & Friendshoring Gain Momentum</h2>
            <p className="text-gray-600 mb-4">
              With geopolitical tensions and rising shipping costs, brands are shifting from Asia to &quot;nearby&quot; regions like Mexico (for North America), Poland (for Europe), and Vietnam (for ASEAN). A 2023 Gartner survey found that 65% of enterprises plan to increase nearshoring by 2025.
            </p>
            <p className="text-gray-600">
              At SourcingVIP, we’ve expanded our network to include certified suppliers in Mexico and Eastern Europe—ideal for businesses prioritizing shorter lead times and reduced carbon footprints.
            </p>
          </article>

          <article className="bg-white p-6 rounded-lg shadow-md mb-12">
            <h2 className="text-2xl font-semibold mb-4">2. Sustainability Becomes Non-Negotiable</h2>
            <p className="text-gray-600 mb-4">
              Consumers and regulators are demanding transparency: 78% of Gen Z shoppers prefer eco-friendly brands, and the EU’s Corporate Sustainability Reporting Directive (CSRD) requires large companies to disclose supply chain emissions by 2026.
            </p>
            <p className="text-gray-600">
              Our platform now includes a &quot;Sustainability Score&quot; for suppliers, factoring in renewable energy use, waste reduction, and fair labor practices. Filter suppliers by carbon footprint to align with your ESG goals.
            </p>
          </article>

          <article className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">3. AI Drives Smarter Supplier Matching</h2>
            <p className="text-gray-600 mb-4">
              Traditional sourcing tools rely on manual searches—wasting 20+ hours per week. AI-powered platforms like SourcingVIP analyze your past orders, supplier performance, and market trends to recommend suppliers in seconds.
            </p>
            <p className="text-gray-600">
              In beta tests, our AI tool reduced sourcing time by 40% and improved supplier fit by 35%. Try it free for 14 days to see the difference.
            </p>
          </article>
        </section>
      </main>
    </Seo>
  );
}