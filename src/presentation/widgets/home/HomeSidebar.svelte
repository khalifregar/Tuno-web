<script>
	// Props
	export let menu;
	export let visible = true;
	export let sidebarWidth = 224; // ✅ harus diexport agar bisa di-bind dari luar

	// Internal state
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
			sidebarWidth = Math.max(64, e.clientX); // ✅ minimal 64px agar tetap usable
		}
	}
</script>

<!-- Window listener untuk resize -->
<svelte:window on:mousemove={resize} on:mouseup={stopResize} />

<!-- Sidebar -->
{#if visible}
<aside
	class="fixed z-20 hidden md:flex flex-col space-y-6 bg-neutral-900 py-4 h-full transition-all duration-300 ease-in-out"
	style="width: {sidebarWidth}px;"
>
	<!-- Logo + Label -->
	<div class="flex flex-col space-y-0.5 px-4">
		<div class="text-2xl font-extrabold text-green-400 tracking-wide">Tuno</div>
		<div class="text-xs text-gray-400">music.ai</div>
	</div>

	<!-- Navigation -->
	<nav class="mt-6 flex flex-1 flex-col gap-2 px-4">
		{#each menu as item}
			<a href={item.route} class="flex items-center gap-3 text-base text-white transition hover:text-blue-400">
				<span class="text-xl">{item.icon}</span>
				<span class="font-medium">{item.label}</span>
			</a>
		{/each}
	</nav>

	<!-- Bottom -->
	<div class="mt-auto px-4">
		<button class="flex items-center gap-2 text-base text-red-400 hover:text-red-500">
			🔲 <span>Logout</span>
		</button>
	</div>

	<!-- Resize Handle -->
	<div
		class="absolute right-0 top-0 h-full w-1 cursor-ew-resize bg-transparent hover:bg-white/10"
		on:mousedown={startResize}
	></div>
</aside>
{/if}
