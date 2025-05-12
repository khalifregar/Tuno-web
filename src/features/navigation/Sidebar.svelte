<script lang="ts">
	import { menu } from './menu';
</script>

<aside class="hidden w-16 flex-col items-center space-y-6 bg-neutral-900 py-4 md:flex">
	<div class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-xl text-white">
		🎵
	</div>
	<nav class="mt-6 flex flex-1 flex-col items-center gap-6">
		{#each menu as item}
			<a href={item.route} class="text-xl transition hover:text-blue-400">{item.icon}</a>
		{/each}
	</nav>
	<div class="mt-auto pb-4">
		<button class="text-xl hover:text-red-400">🔲</button>
	</div>
</aside>
