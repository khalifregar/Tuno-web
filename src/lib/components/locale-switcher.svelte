<script>
	import { i18n } from '$lib/i18n';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	function switchToLanguage(newLanguage) {
		const canonicalPath = i18n.route($page.url.pathname);
		const localisedPath = i18n.resolveRoute(canonicalPath, newLanguage);
		goto(localisedPath);
	}
</script>

<div>
	<button on:click={() => switchToLanguage('en')}>en</button>
	<button on:click={() => switchToLanguage('es')}>es</button>
</div>
