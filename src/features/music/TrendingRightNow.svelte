<script lang="ts">
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
		{
			number: '03',
			title: 'Cruel Silence',
			artist: 'Lou Val',
			album: 'Cruel Silence',
			plays: '2.399.957',
			duration: '2:40',
			image: 'https://i.scdn.co/image/ab67616d00001e02984b4c3429d92f847be52dbe',
			favorite: false
		},
		{
			number: '04',
			title: 'Stand Still',
			artist: 'Sabrina Claudio',
			album: 'About Time',
			plays: '4.273.927',
			duration: '4:43',
			image: 'https://i.scdn.co/image/ab67616d00001e02ebc2736b0d4f37dfb9073955',
			favorite: false
		},
		{
			number: '05',
			title: 'Bye Bye',
			artist: 'Gryffin',
			album: 'Gravity',
			plays: '1.489.124',
			duration: '3:30',
			image: 'https://i.scdn.co/image/ab67616d00001e0205f10cb20f2e5aa2d6b9fa92',
			favorite: false
		}
	];
</script>

<section class="mt-10">
	<h2 class="mb-4 text-lg font-semibold">Trending Right Now</h2>
	<div class="trending-scroll max-h-96 space-y-2 overflow-y-auto pr-2">
		{#each trendingSongs as song}
			<div
				class="flex items-center justify-between rounded-lg px-4 py-2 text-sm text-white/90 transition hover:bg-neutral-800"
			>
				<div class="w-6 text-gray-400">{song.number}</div>
				<div class="flex flex-1 items-center gap-4">
					<img src={song.image} alt={song.title} class="h-10 w-10 rounded" />
					<div>
						<div class="font-semibold">{song.title}</div>
						<div class="text-xs text-gray-400">{song.artist}</div>
					</div>
				</div>
				<div class="hidden w-40 truncate text-gray-300 sm:block">{song.album}</div>
				<div class="hidden w-24 text-right text-gray-300 md:block">{song.plays}</div>
				<div class="w-12 text-right text-gray-300">{song.duration}</div>
				<div class="w-8 text-right text-xl">
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
