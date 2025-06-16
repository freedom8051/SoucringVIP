// app/blog/[slug]/page.js
'use client'; // App Router 需要显式声明

import { getAllPostSlugs, getPostData } from '@/lib/markdown';
import Head from 'next/head';
import Link from 'next/link';

async function fetchPostData(slug) {
  const postData = await getPostData(slug);
  return postData;
}

export default async function BlogPost({ params }) {
  const postData = await fetchPostData(params.slug);

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      {/* SEO 元标签 */}
      <Head>
        <title>{postData.title} | SourcingVIP - 专业欧美采购寻源服务</title>
        <meta name="description" content={postData.summary} />
        {/* 结构化数据（Schema Markup） */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": postData.title,
            "image": "https://sourcingvip.com/images/sourcing-blog.jpg", // 替换为博客封面图
            "datePublished": postData.date,
            "author": {
              "@type": "Person",
              "name": "Your Name",
              "jobTitle": "Sourcing Expert"
            },
            "publisher": {
              "@type": "Organization",
              "name": "SourcingVIP",
              "logo": {
                "@type": "ImageObject",
                "url": "https://sourcingvip.com/images/logo.png"
              }
            }
          })}
        </script>
      </Head>

      {/* 博客内容 */}
      <article className="prose max-w-none mb-12">
        <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>
        <p className="text-gray-600 mb-8">发布于 {postData.date}</p>
        <div
          className="prose-lg"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }} // 渲染 Markdown 转换的 HTML
        />
      </article>

      {/* 返回博客列表 */}
      <Link href="/blog" className="text-blue-600 hover:underline">
        ← 返回所有博客
      </Link>
    </div>
  );
}