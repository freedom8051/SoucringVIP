// app/services/page.js
import Breadcrumbs from '@/components/Breadcrumbs';
import Image from 'next/image';

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs currentPage="Services" />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">End-to-End Sourcing Solutions</h1>
          
          {/* 服务流程 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
              <ol className="list-decimal list-inside space-y-3 text-gray-600">
                <li>Share your product specs, target price, and quality requirements.</li>
                <li>We shortlist 5-8 pre-vetted suppliers from our global network.</li>
                <li>Conduct factory audits and sample testing.</li>
                <li>Negotiate contracts and manage production timelines.</li>
                <li>Coordinate logistics and handle customs clearance.</li>
              </ol>
            </div>
            <Image
              src="/images/sourcing-process.jpg"
              alt="Sourcing Process"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>

          {/* 服务优势 */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
            <div className="space-y-4 text-gray-600">
              <p>✅ 2,000+ verified suppliers in Vietnam, Mexico, Poland, and more.</p>
              <p>✅ 98% supplier approval rate based on 12+ quality checkpoints.</p>
              <p>✅ Reduce procurement lead time from 12 weeks to 6 weeks.</p>
              <p>✅ Transparent pricing with no hidden fees.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}