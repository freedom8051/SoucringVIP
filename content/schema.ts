/*
// content/schema.ts
import { defineType, defineField } from 'tinacms';

// 首页内容模型
export const homePage = defineType({
  name: 'home_page',
  title: '首页',
  type: 'document',
  fields: [
    defineField({
      name: 'hero_title',
      title: '首屏标题',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'hero_subtitle',
      title: '首屏副标题',
      type: 'string',
    }),
    defineField({
      name: 'services',
      title: '服务列表',
      type: 'array',
      of: [{ type: 'string' }], // 简单示例，可扩展为对象数组
    }),
  ],
});

// 博客文章模型
export const blogPost = defineType({
  name: 'blog_post',
  title: '博客文章',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: '标题',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: '发布日期',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: '正文',
      type: 'richText', // TinaCMS富文本编辑器
    }),
  ],
});
*/