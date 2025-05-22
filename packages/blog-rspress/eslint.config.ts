import js from '@eslint/js';
import { globalIgnores } from 'eslint/config';
import globals from 'globals';
import ts from 'typescript-eslint';

export default [
  globalIgnores(['*dist*', 'node_modules', '*build*']),
  { languageOptions: { globals: globals.browser } },
  js.configs.recommended,
  ...ts.configs.recommended,
  { ignores: ['dist/'] }
];
