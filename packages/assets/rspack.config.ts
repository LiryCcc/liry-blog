import { defineConfig } from '@rspack/cli';

const rspackConfig = defineConfig({
  entry: {
    index: './src/index.ts'
  },
  resolve: {
    extensions: ['...', '.ts']
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|svg|mp3|mp4|webm|ogg|wav|flac|aac)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 128 * 1024 // 4KB
          }
        }
      },
      {
        test: /\.(js|ts)$/,
        use: [
          {
            loader: 'builtin:swc-loader',
            options: {
              jsc: {
                parser: {
                  syntax: 'typescript',
                  tsx: true
                }
              }
            }
          }
        ]
      }
    ]
  }
});

export default rspackConfig;
