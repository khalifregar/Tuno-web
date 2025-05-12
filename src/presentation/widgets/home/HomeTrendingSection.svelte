<script>
	const trendingSongs = [
		{
			number: '01',
			title: 'Millions',
			artist: 'Always Never',
			album: 'Always Never',
			plays: '8.069.542',
			duration: '3:58',
			image: 'https://i.scdn.co/image/ab67616d00001e02028b3c9c96215b58c163faf6',
			favorite: false
		},
		{
			number: '02',
			title: 'If You Let Me',
			artist: 'Alina Baraz',
			album: 'SunBeam',
			plays: '1.029.293',
			duration: '2:15',
			image: 'https://i.scdn.co/image/ab67616d00001e0283f19c6d6c0efb82cfd870a0',
			favorite: true
		},
		// ... lanjutkan data lainnya
	];
</script>

<section class="mt-10 w-full">
	<h2 class="mb-4 text-lg font-semibold text-white">Trending Right Now</h2>
	<div class="max-h-96 overflow-y-auto space-y-2 pr-2 scrollbar-thin scrollbar-thumb-neutral-700 hover:scrollbar-thumb-neutral-600">
		{#each trendingSongs as song}
			<div class="flex items-center justify-between rounded-lg px-4 py-2 text-sm text-white/90 transition hover:bg-neutral-800">
				<!-- Number -->
				<div class="w-6 text-gray-400 shrink-0">{song.number}</div>

				<!-- Song Info -->
				<div class="flex flex-1 items-center gap-4 min-w-0">
					<img src={song.image} alt={song.title} class="h-10 w-10 rounded object-cover" />
					<div class="min-w-0">
						<div class="truncate font-semibold">{song.title}</div>
						<div class="text-xs text-gray-400 truncate">{song.artist}</div>
					</div>
				</div>

				<!-- Album (optional on small screen) -->
				<div class="hidden sm:block w-40 truncate text-gray-300">{song.album}</div>

				<!-- Plays -->
				<div class="hidden md:block w-24 text-right text-gray-300">{song.plays}</div>

				<!-- Duration -->
				<div class="w-12 text-right text-gray-300 shrink-0">{song.duration}</div>

				<!-- Favorite Icon -->
				<div class="w-8 text-right text-xl shrink-0">
					{#if song.favorite}
						<span class="text-red-500">❤️</span>
					{:else}
						<span class="cursor-pointer text-white/40 hover:text-white">♡</span>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</section>
