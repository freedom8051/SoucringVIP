// components/Navbar.jsx
'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-primary text-2xl">
            SourcingService
          </Link>
          <div className="hidden md:flex gap-8">
            <Link href="/" className="text-gray-600 hover:text-primary">Home</Link>
            <Link href="/services" className="text-gray-600 hover:text-primary">Services</Link>
            <Link href="/about" className="text-gray-600 hover:text-primary">About</Link>
            <Link href="/contact" className="text-gray-600 hover:text-primary">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}