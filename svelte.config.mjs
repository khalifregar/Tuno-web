import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { fileURLToPath, URL } from 'node:url';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter(),

    alias: {
      // Lib aliases
      $components: fileURLToPath(new URL('./src/lib/components', import.meta.url)),
      $actions: fileURLToPath(new URL('./src/lib/actions', import.meta.url)),
      $icons: fileURLToPath(new URL('./src/lib/icons', import.meta.url)),
      $stores: fileURLToPath(new URL('./src/lib/stores', import.meta.url)),
      $utils: fileURLToPath(new URL('./src/lib/utils', import.meta.url)),

      // DDD-style aliases
      $presentation: fileURLToPath(new URL('./src/presentation', import.meta.url)),
      $features: fileURLToPath(new URL('./src/features', import.meta.url)),
      $domain: fileURLToPath(new URL('./src/domain', import.meta.url)),
      $data: fileURLToPath(new URL('./src/data', import.meta.url)),
      $infrastructure: fileURLToPath(new URL('./src/infrastructure', import.meta.url)),

      // Global style
      "$app.css": fileURLToPath(new URL('./src/app.css', import.meta.url))

    },

    vite: {
      optimizeDeps: {
        include: ['mode-watcher', '@inlang/paraglide-sveltekit']
      },
      ssr: {
        noExternal: ['mode-watcher', '@inlang/paraglide-sveltekit']
      }
    }
  }
};

export default config;
