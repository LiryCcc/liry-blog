import { defineConfig } from 'cspell';

const cspellConfig = defineConfig({
  version: '0.2',
  ignorePaths: ['pnpm-lock.yaml', 'packages/blog-rspress/dist', 'packages/blog-next/out', '*.svg'],
  words: [
    'Liskov',
    'rspack',
    'rspress',
    'liry',
    'shiki',
    'TTFB',
    'qrcode',
    'leetcode',
    'wechat',
    'kimi',
    'codingman',
    'jsbridge',
    'ahooks',
    'unocss',
    'cicd',
    'vdom',
    'shadcn',
    'webcomponents',
    'shadowdom',
    'rsdoctor'
  ]
});

export default cspellConfig;
