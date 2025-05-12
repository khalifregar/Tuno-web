<script>
	export let song = {
		title: 'Nina',
		artist: '.Feast',
		duration: '4:37',
		progress: '0:02',
		albumArt: '', // Optional
	};

	let isPlaying = false;
	let volume = 80;

	function togglePlay() {
		isPlaying = !isPlaying;
	}
</script>

<div class="fixed bottom-0 left-0 right-0 z-50 bg-black border-t border-neutral-800 text-white h-20 px-4 md:px-6 flex items-center justify-between">
	<!-- Song Info -->
	<div class="flex items-center gap-4 min-w-[180px]">
		<div class="w-12 h-12 bg-neutral-700 flex items-center justify-center rounded-md">
			{#if song.albumArt}
				<img src={song.albumArt} alt="Album" class="w-full h-full object-cover rounded-md" />
			{:else}
				<span class="text-sm">🎵</span>
			{/if}
		</div>
		<div class="flex flex-col text-sm">
			<span class="font-medium">{song.title}</span>
			<span class="text-gray-400">{song.artist}</span>
		</div>
	</div>

	<!-- Controls -->
	<div class="flex flex-col items-center justify-center flex-1 max-w-xl">
		<div class="flex items-center gap-6">
			<button class="text-lg hover:text-blue-400">🔀</button>
			<button class="text-lg hover:text-blue-400">⏮️</button>
			<button
				on:click={togglePlay}
				class="w-10 h-10 rounded-full bg-white text-black hover:scale-105 transition flex items-center justify-center"
			>
				{#if isPlaying}
					⏸️
				{:else}
					▶️
				{/if}
			</button>
			<button class="text-lg hover:text-blue-400">⏭️</button>
			<button class="text-lg hover:text-blue-400">💬</button>
		</div>
		<!-- Progress Bar -->
		<div class="flex items-center gap-2 text-xs text-gray-400 w-full mt-1">
			<span>{song.progress}</span>
			<div class="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden">
				<div class="h-full bg-white w-[10%]"></div>
			</div>
			<span>{song.duration}</span>
		</div>
	</div>

	<!-- Volume & Options -->
	<div class="hidden md:flex items-center gap-3 min-w-[180px] justify-end">
		<button class="text-green-400">🖥️</button>
		<button class="hover:text-blue-400">✏️</button>
		<button class="hover:text-blue-400">📺</button>
		<button class="hover:text-blue-400">🔇</button>
		<input type="range" min="0" max="100" bind:value={volume} class="w-20" />
	</div>
</div>
