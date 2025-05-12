import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import { paraglide } from '@inlang/paraglide-sveltekit/vite';
import svg from '@poppanator/sveltekit-svg';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
	plugins: [
		sveltekit(),
		paraglide({
			project: './project.inlang',
			outdir: './src/lib/paraglide'
		}),
		svg({
			includePaths: ['./src/lib/icons/'],
			svgoOptions: {
				multipass: true,
				plugins: [
					{
						name: 'preset-default',
						params: { overrides: { removeViewBox: false } }
					}
				]
			}
		})
	],

	resolve: {
		alias: {
			$components: fileURLToPath(new URL('./src/lib/components', import.meta.url)),
			$actions: fileURLToPath(new URL('./src/lib/actions', import.meta.url)),
			$icons: fileURLToPath(new URL('./src/lib/icons', import.meta.url)),
			$stores: fileURLToPath(new URL('./src/lib/stores', import.meta.url)),
			$utils: fileURLToPath(new URL('./src/lib/utils', import.meta.url)),

			$features: fileURLToPath(new URL('./src/features', import.meta.url)),
			$presentation: fileURLToPath(new URL('./src/presentation', import.meta.url)),
			$domain: fileURLToPath(new URL('./src/domain', import.meta.url)),
			$data: fileURLToPath(new URL('./src/data', import.meta.url)),
			$infrastructure: fileURLToPath(new URL('./src/infrastructure', import.meta.url)),

			"$app.css": fileURLToPath(new URL('./src/app.css', import.meta.url))

		}
	},

	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
