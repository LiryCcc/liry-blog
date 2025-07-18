import { defineConfig } from 'cspell';
import { readFileSync } from 'node:fs';

const cspellConfig = defineConfig({
  version: '0.2',
  ignorePaths: [
    ...readFileSync('.gitignore')
      .toString()
      .split('\n')
      .filter((v) => {
        return !v.startsWith('#');
      }),
    ...readFileSync('.prettierignore')
      .toString()
      .split('\n')
      .filter((v) => {
        return !v.startsWith('#');
      })
  ],
  words: ['Liskov']
});

export default cspellConfig;
