/*
// app/blog/[slug]/page.js
'use client'; // App Router 需要显式声明

import { getAllPostSlugs, getPostData } from '@/lib/markdown';
import Head from 'next/head';
import Link from 'next/link';

async function fetchPostData(slug) {
  const postData = await getPostData(slug);
  return postData;
}

*/