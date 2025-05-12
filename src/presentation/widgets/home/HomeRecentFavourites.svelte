<script>
	import { createEventDispatcher, onMount } from 'svelte';

	export let items = [
		{ title: 'creamy', description: 'ZULAN with the debut of the year??', image: 'assets/images/1.jpeg' },
		{ title: 'hyperpop', description: 'we want that pop life 😝 ft. umru &...', image: 'assets/images/1.jpeg' },
		{ title: 'Genre Glitch', description: 'Instrumental bliss beyond genre classification.', image: 'assets/images/1.jpeg' },
		{ title: 'Sad Indie', description: 'The premier indie melancholia playlist,...', image: 'assets/images/1.jpeg' },
		{ title: 'Dreampop', description: 'Blissful indie for dreamers.', image: 'assets/images/1.jpeg' },
		{ title: 'Young & Free', description: 'Mercer Henderson is a goner', image: 'assets/images/1.jpeg' }
	];

	const dispatch = createEventDispatcher();
	let scrollRef;
	let showArrows = false;
	let showLeftShadow = false;
	let showRightShadow = true;

	function handleClick(item) {
		dispatch('itemClick', item);
	}

	function scrollLeft() {
		scrollRef.scrollBy({ left: -300, behavior: 'smooth' });
	}

	function scrollRight() {
		scrollRef.scrollBy({ left: 300, behavior: 'smooth' });
	}

	function updateShadows() {
		if (!scrollRef) return;
		const { scrollLeft, scrollWidth, clientWidth } = scrollRef;

		showLeftShadow = scrollLeft > 10;
		showRightShadow = scrollLeft + clientWidth < scrollWidth - 10;
	}

	onMount(() => {
		const checkOverflow = () => {
			if (scrollRef) {
				showArrows = scrollRef.scrollWidth > scrollRef.clientWidth;
				updateShadows();
			}
		};

		checkOverflow();

		scrollRef.addEventListener('scroll', updateShadows);

		const resizeObserver = new ResizeObserver(checkOverflow);
		resizeObserver.observe(scrollRef);

		return () => {
			resizeObserver.disconnect();
			scrollRef.removeEventListener('scroll', updateShadows);
		};
	});
</script>

<style>
	.no-scrollbar::-webkit-scrollbar {
		display: none;
	}
	.no-scrollbar {
		scrollbar-width: none;
		-ms-overflow-style: none;
	}
</style>

<div class="mt-12">
	<!-- Header -->
	<div class="flex justify-between items-center mb-4">
		<h2 class="text-base font-semibold">Curated Playlists</h2>
		<a href="#" class="text-sm text-blue-400 hover:underline">View all</a>
	</div>

	<!-- Scrollable card wrapper with shadows inside -->
	<div class="relative">
		<!-- Left & Right gradient shadows (only on cards) -->
		{#if showLeftShadow}
			<div class="pointer-events-none absolute inset-y-0 left-0 w-12 z-10 bg-gradient-to-r from-black to-transparent"></div>
		{/if}
		{#if showRightShadow}
			<div class="pointer-events-none absolute inset-y-0 right-0 w-12 z-10 bg-gradient-to-l from-black to-transparent"></div>
		{/if}

		<!-- Arrows -->
		{#if showArrows}
			<button
				on:click={scrollLeft}
				class="absolute left-1 top-1/2 z-20 -translate-y-1/2 bg-black/60 p-2 rounded-full hover:bg-black/80"
			>
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
				</svg>
			</button>

			<button
				on:click={scrollRight}
				class="absolute right-1 top-1/2 z-20 -translate-y-1/2 bg-black/60 p-2 rounded-full hover:bg-black/80"
			>
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
				</svg>
			</button>
		{/if}

		<!-- Playlist Cards -->
		<div
			bind:this={scrollRef}
			class="flex gap-5 overflow-x-auto scroll-smooth no-scrollbar pr-2"
		>
			{#each items as item}
				<div on:click={() => handleClick(item)} class="w-48 shrink-0 cursor-pointer">
					<div class="aspect-square overflow-hidden rounded bg-neutral-800 mb-3">
						<img src={item.image} alt={item.title} class="w-full h-full object-cover" />
					</div>
					<div class="text-white font-bold text-base truncate">{item.title}</div>
					<div class="text-sm text-gray-400 leading-snug truncate">{item.description}</div>
				</div>
			{/each}
		</div>
	</div>
</div>
