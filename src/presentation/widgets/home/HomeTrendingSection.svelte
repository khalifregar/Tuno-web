<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	const trendingSongs = [
		{
			number: '01',
			title: 'Millions',
			artist: 'Always Never',
			album: 'Always Never',
			plays: '8.069.542',
			duration: '3:58',
			image: 'assets/images/1.jpeg',
			favorite: false
		},
		{
			number: '02',
			title: 'If You Let Me',
			artist: 'Alina Baraz',
			album: 'SunBeam',
			plays: '1.029.293',
			duration: '2:15',
			image: 'assets/images/1.jpeg',
			favorite: false
		}
		// Tambahkan data lainnya jika diperlukan
	];

	function handleClick(song) {
		dispatch('itemClick', song);
	}
</script>

<section class="mt-10 w-full">
	<h2 class="mb-4 text-lg font-semibold text-white">Trending Right Now</h2>

	<div class="scrollbar-thin scrollbar-thumb-neutral-700 hover:scrollbar-thumb-neutral-600 max-h-96 space-y-2 overflow-y-auto pr-2">
		{#each trendingSongs as song}
			<div
				on:click={() => handleClick(song)}
				class="flex items-center justify-between rounded-lg px-4 py-2 text-sm text-white/90 transition hover:bg-neutral-800 cursor-pointer"
			>
				<!-- Number -->
				<div class="w-6 shrink-0 text-gray-400">{song.number}</div>

				<!-- Song Info -->
				<div class="flex min-w-0 flex-1 items-center gap-4">
					<img src={song.image} alt={song.title} class="h-10 w-10 rounded object-cover" />
					<div class="min-w-0">
						<div class="truncate font-semibold">{song.title}</div>
						<div class="truncate text-xs text-gray-400">{song.artist}</div>
					</div>
				</div>

				<!-- Album -->
				<div class="hidden w-40 truncate text-gray-300 sm:block">{song.album}</div>

				<!-- Plays -->
				<div class="hidden w-24 text-right text-gray-300 md:block">{song.plays}</div>

				<!-- Duration -->
				<div class="w-12 shrink-0 text-right text-gray-300">{song.duration}</div>

				<!-- Favorite -->
				<div class="w-8 shrink-0 text-right text-xl">
					{#if song.favorite}
						<span class="text-red-500">❤️</span>
					{:else}
						<span class="text-white/40 hover:text-white">♡</span>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</section>
