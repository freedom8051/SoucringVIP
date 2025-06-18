// app/layout.js
import './globals.css'; // 全局样式

export const metadata = {
  title: 'Professional Sourcing Services',
  description: 'Simplify cross-border sourcing with our expert solutions.',
  openGraph: {
    url: 'https://sourcing-simple.com',
    title: 'Professional Sourcing Services',
    description: 'Global procurement solutions for small businesses.',
    images: [{ url: '/images/og-sourcing.jpg' }],
    site_name: 'Sourcing Simple',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">
        {/* 全局导航 */}
        <nav className="bg-white shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <span className="font-bold text-primary text-xl">SourcingSimple</span>
              <div className="flex gap-8">
                <a href="/home" className="text-gray-600 hover:text-primary">Home</a>
                <a href="/about" className="text-gray-600 hover:text-primary">About</a>
                <a href="/contact" className="text-gray-600 hover:text-primary">Contact</a>
              </div>
            </div>
          </div>
        </nav>

        {/* 页面内容区域 */}
        <main className="container mx-auto px-4 py-8 max-w-6xl">
          {children}
        </main>

        {/* 全局页脚 */}
        <footer className="bg-gray-100 py-6">
          <div className="container mx-auto px-4 text-center text-sm text-gray-600">
            © 2024 SourcingSimple. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}