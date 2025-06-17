// lib/cms.js
export async function fetchBlogPosts() {
  const API_URL = `https://api.forestry.io/v1/sites/9bd1f66c7669c7200f9cd4f2602ff7d73d7564db/content`;
  const response = await fetch(API_URL, {
    headers: {
      'Authorization': `Bearer ${process.env.FORESTRY_API_TOKEN}`,
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) throw new Error('Failed to fetch blog posts');
  return response.json();
}

// 获取单篇文章（根据 Slug）
export async function fetchBlogPost(slug) {
  const API_URL = `https://api.forestry.io/v1/sites/9bd1f66c7669c7200f9cd4f2602ff7d73d7564db/content/blog_post/${slug}`;
  const response = await fetch(API_URL, {
    headers: {
      'Authorization': `Bearer ${process.env.FORESTRY_API_TOKEN}`,
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) return null;
  return response.json();
}