import { defineConfig } from 'astro/config';

const site = 'https://TU_USUARIO.github.io';
const repo = 'portfolio';

export default defineConfig({
  site,
  base: `/${repo}`,
  output: 'static'
});
