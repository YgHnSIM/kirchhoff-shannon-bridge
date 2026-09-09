// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkTexDelimiters from './src/lib/remark-tex-delimiters.js';

// https://astro.build/config
export default defineConfig({
  site: 'https://yghnsim.github.io',
  base: '/kirchhoff-shannon-bridge',
  output: 'static',
  markdown: {
    processor: unified({
      remarkPlugins: [remarkTexDelimiters, remarkMath],
      rehypePlugins: [[rehypeKatex, { strict: 'ignore', throwOnError: false }]],
      gfm: true,
      smartypants: false,
    }),
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
