import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { fileURLToPath, URL } from 'node:url'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),

		alias: {
			// Lib aliases
			$actions: fileURLToPath(new URL('./src/lib/actions', import.meta.url)),
			$components: fileURLToPath(new URL('./src/lib/components', import.meta.url)),
			$icons: fileURLToPath(new URL('./src/lib/icons', import.meta.url)),
			$stores: fileURLToPath(new URL('./src/lib/stores', import.meta.url)),
			$utils: fileURLToPath(new URL('./src/lib/utils', import.meta.url)),

			// DDD-style aliases
			$presentation: fileURLToPath(new URL('./src/presentation', import.meta.url)),
			$features: fileURLToPath(new URL('./src/features', import.meta.url)),
			$domain: fileURLToPath(new URL('./src/domain', import.meta.url)),
			$data: fileURLToPath(new URL('./src/data', import.meta.url)),
			$infrastructure: fileURLToPath(new URL('./src/infrastructure', import.meta.url)),

			// Global style file
			$app.css: fileURLToPath(new URL('./src/app.css', import.meta.url))
		}
	}
}

export default config
