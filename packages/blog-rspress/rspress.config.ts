import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'rspress/config';

const __dirname = dirname(fileURLToPath(import.meta.url));

const rspressConfig = defineConfig({
  root: join(__dirname, 'docs'),
  title: 'Liry Blog',
  base: '/blog',
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/liryccc'
      },
      {
        icon: 'lark',
        mode: 'link',
        content: 'https://www.feishu.cn/invitation/page/add_contact/?token=829q4337-a2c7-49b5-89ec-8aa0d7176768'
      }
    ]
  }
});

export default rspressConfig;
