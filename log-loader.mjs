// log-loader.mjs
import { readFile } from 'fs/promises';
import { pathToFileURL } from 'url';

export async function resolve(specifier, context, defaultResolve) {
	console.log('[RESOLVE]', specifier);
	return defaultResolve(specifier, context, defaultResolve);
}

export async function load(url, context, defaultLoad) {
	if (url.endsWith('.js') && url.includes('node_modules')) {
		console.log('[LOAD]', url);
	}

	return defaultLoad(url, context, defaultLoad);
}
