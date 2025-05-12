<script>
	import { panelContent, panelVisible, closePanel } from '$stores/panelStore';
	import { fly, fade } from 'svelte/transition';
</script>

{#if $panelVisible}
	<!-- Overlay -->
	<div
		class="fixed inset-0 z-40 bg-black bg-opacity-50"
		on:click={closePanel}
		in:fade
		out:fade
	/>

	<!-- Panel -->
	<div
		class="fixed inset-y-0 right-0 z-50 w-[350px] bg-neutral-900 shadow-xl overflow-y-auto"
		in:fly={{ x: 400, duration: 300 }}
		out:fly={{ x: 400, duration: 300 }}
	>
		<div class="flex justify-between items-center px-4 py-3 border-b border-white/10">
			<h2 class="text-lg font-semibold">Now Playing</h2>
			<button on:click={closePanel} class="text-white text-xl">&times;</button>
		</div>

		<!-- Content -->
		<div class="p-4">
			<pre class="text-sm text-white break-words whitespace-pre-wrap">
{$panelContent ? JSON.stringify($panelContent, null, 2) : 'No content'}
			</pre>
		</div>
	</div>
{/if}
