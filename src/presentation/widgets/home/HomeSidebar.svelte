<script>
	import { page } from '$app/stores';

	// Props
	export let menu;
	export let visible = true;
	export let sidebarWidth = 324;

	let resizing = false;

	function startResize(e) {
		resizing = true;
		e.preventDefault();
	}

	function stopResize() {
		resizing = false;
	}

	function resize(e) {
		if (resizing) {
			sidebarWidth = Math.max(64, e.clientX);
		}
	}
</script>

<svelte:window on:mousemove={resize} on:mouseup={stopResize} />

{#if visible}
<aside
	class="flex flex-col h-screen space-y-6 bg-neutral-900 py-4 transition-all duration-300 ease-in-out"
	style="width: {sidebarWidth}px;"
>
		<!-- Logo -->
		<div class="flex flex-col space-y-0.5 px-4">
			<div class="text-2xl font-extrabold tracking-wide text-green-400">Tuno</div>
			<div class="text-xs text-gray-400">music.ai</div>
		</div>

		<!-- Navigation -->
		<nav class="mt-6 flex flex-1 flex-col overflow-y-auto px-4">
			<!-- Menu Items -->
			<div class="py-4 flex flex-col gap-1">
				{#each menu as item}
					<a
						href={item.route}
						class="flex items-center gap-3 rounded px-2 py-3 text-sm uppercase transition
							{$page.url.pathname === item.route
								? 'bg-white/10 font-semibold text-blue-400'
								: 'text-white hover:bg-white/5 hover:text-blue-400'}"
					>
						<div class="flex w-6 flex-shrink-0 justify-start">
							<img src={item.icon} alt={item.label} class="h-5 w-5" />
						</div>
						<span class="tracking-wider">{item.label}</span>
					</a>
				{/each}
			</div>

			<!-- Divider -->
			<div class="my-3 border-t border-white/10" />

			<!-- Playlist Cards -->
			<div class="my-4 flex flex-col gap-3">
				<!-- Playlist Item -->
				<div class="flex cursor-pointer items-center gap-3 rounded px-2 py-2 transition hover:bg-white/10">
					<div class="flex h-10 w-10 items-center justify-center rounded bg-white/10">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-2v13" />
							<circle cx="6" cy="18" r="3" />
							<circle cx="18" cy="16" r="3" />
						</svg>
					</div>
					<div class="flex flex-col">
						<span class="text-sm font-medium leading-tight text-white">Playlist #1</span>
						<span class="text-xs text-gray-400">Playlist · Doug Evans</span>
					</div>
				</div>
			</div>
		</nav>

		<!-- Logout Button -->
		<div class="mt-auto px-4">
			<button class="flex items-center gap-2 text-base text-red-400 hover:text-red-500">
				🔲 <span>Logout</span>
			</button>
		</div>

		<!-- Resize Handle -->
	<div
		class="absolute right-0 top-0 h-full w-1 cursor-ew-resize bg-transparent hover:bg-white/10"
		on:mousedown={startResize}
	/>
	</aside>
{/if}
