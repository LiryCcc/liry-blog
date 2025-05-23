import type { NextConfig } from 'next';
import nextRspack from 'next-rspack';

const nextConfig: NextConfig = nextRspack({
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/liry-blog' : undefined
});

export default nextConfig;
