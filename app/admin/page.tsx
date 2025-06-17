// app/admin/page.tsx
'use client';

import { TinaCMS, TinaProvider } from 'tinacms';
import { useCMS } from 'tinacms';
import { homePage, blogPost } from '../../content/schema';

export default function AdminPage() {
  const cms = useCMS();

  // 注册内容模型
  cms.plugins.add({
    __type: 'content-model-plugin',
    models: [homePage, blogPost],
  });

  return (
    <div>
      <h1>SourcingVIP CMS 后台</h1>
      <TinaProvider cms={cms}>
        {/* 后台编辑入口（仅管理员可见） */}
        <button onClick={() => cms.toggle()}>
          {cms.enabled ? '退出编辑模式' : '进入编辑模式'}
        </button>
      </TinaProvider>
    </div>
  );
}