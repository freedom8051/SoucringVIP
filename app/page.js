// app/page.js
import { getSortedPostsData } from '@/lib/markdown';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home({ latestPosts }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar /> {/* 导航组件 */}
      
      {/* 首页头部 */}
      <header className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">专业欧美采购寻源服务</h1>
          <p className="text-xl mb-8">10年经验，助您降低20%采购成本，规避供应链风险</p>
          <Link href="/contact" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
            立即咨询定制方案
          </Link>
        </div>
      </header>

      {/* 最新博客预览 */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">最新行业洞察</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {latestPosts.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-medium mb-3">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{post.summary}</p>
                <p className="text-gray-500 text-xs">发布于 {post.date}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/blog" className="text-blue-600 hover:underline font-medium">
              查看全部博客 →
            </Link>
          </div>
        </div>
      </section>

      {/* 服务概览 */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">我们的服务</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg bg-white">
              <h3 className="text-xl font-medium mb-3">全球原材料寻源</h3>
              <p className="text-gray-600">覆盖欧美、亚洲供应商，筛选高性价比原材料，降低20%采购成本。</p>
            </div>
            <div className="p-6 border rounded-lg bg-white">
              <h3 className="text-xl font-medium mb-3">跨境供应商验证</h3>
              <p className="text-gray-600">实地验厂+资质审核，确保供应商符合ISO 9001、CIPS等国际标准。</p>
            </div>
            <div className="p-6 border rounded-lg bg-white">
              <h3 className="text-xl font-medium mb-3">供应链风险管控</h3>
              <p className="text-gray-600">多区域供应商布局，规避地缘政治、物流中断等风险。</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link href="/services" className="text-blue-600 hover:underline font-medium">
              查看全部服务 →
            </Link>
          </div>
        </div>
      </section>

      <Footer /> {/* 页脚组件 */}
    </div>
  );
}

export async function getStaticProps() {
  const latestPosts = getSortedPostsData().slice(0, 3); // 取最新3篇博客
  return { props: { latestPosts } };
}