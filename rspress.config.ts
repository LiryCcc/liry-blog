import { pluginShiki } from '@rspress/plugin-shiki';
import { join } from 'node:path';
import { defineConfig } from 'rspress/config';

const rspressConfig = defineConfig({
  root: join(__dirname, 'docs'),
  title: 'Liry Blog',
  builderConfig: {
    output: {
      distPath: {
        root: 'dist'
      }
    }
  },
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/LiryCcc'
      }
    ]
  },
  plugins: [pluginShiki()]
});

export default rspressConfig;
