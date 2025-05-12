<script lang="ts">
	const albums = [
		{ title: 'Hip-Hop', count: 120, bg: 'bg-gradient-to-br from-orange-500 via-purple-700 to-black' },
		{ title: 'Indie', count: 34, bg: 'bg-gradient-to-br from-cyan-400 via-rose-400 to-red-500' },
		{ title: 'Pop', count: 100, bg: 'bg-gradient-to-br from-pink-300 via-blue-500 to-indigo-700' },
		{ title: 'Rap', count: 49, bg: 'bg-gradient-to-br from-purple-700 via-fuchsia-600 to-indigo-800' }
	];
</script>

<section class="mt-4">
	<h2 class="mb-4 text-lg font-semibold">Recently Listened Albums</h2>
	<div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
		{#each albums as album}
			<div
				class={`relative h-40 overflow-hidden rounded-xl p-4 ${album.bg} transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg`}
			>
				<div class="absolute right-2 top-2 rounded-full bg-black bg-opacity-50 p-1 text-white">🎵</div>
				<div class="absolute bottom-3 left-3">
					<h3 class="font-semibold text-white">{album.title}</h3>
					<p class="text-sm text-gray-300">{album.count} new songs</p>
				</div>
			</div>
		{/each}
	</div>
</section>
