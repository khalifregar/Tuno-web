<script>
	export let toggleSidebar;
</script>

<header class="flex h-16 items-center justify-between border-b border-neutral-800 bg-neutral-900 px-4 md:px-6">
	<!-- Kiri: Hamburger + Logo -->
	<div class="flex items-center gap-3">
		<!-- Hamburger hanya di mobile -->
		<button class="md:hidden text-white text-xl" on:click={toggleSidebar}>
			☰
		</button>

		<!-- Logo Tuno -->
		<div class="flex items-center gap-2">
			<div class="text-2xl font-extrabold text-green-400 tracking-wide">Tuno</div>
			<span class="text-[10px] text-gray-400 hidden sm:inline-block -mt-1">music.ai</span>
		</div>
	</div>

	<!-- Tengah: Search bar desktop -->
	<div class="mx-auto hidden w-full max-w-3xl md:block">
		<input
			type="text"
			placeholder="Search for song, artist, lyrics..."
			class="w-full rounded-full bg-neutral-800 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
		/>
	</div>

	<!-- Tengah (mobile): search bar -->
	<div class="w-full md:hidden">
		<input
			type="text"
			placeholder="Search..."
			class="w-full rounded bg-neutral-800 px-3 py-1.5 text-sm text-white placeholder-gray-400 focus:outline-none"
		/>
	</div>

	<!-- Kanan: Notif + Avatar -->
	<div class="ml-4 flex items-center gap-4">
		<button class="text-xl text-gray-300 hover:text-blue-400">🔔</button>
		<div class="flex items-center gap-2">
			<img src="https://i.pravatar.cc/32?u=alex" alt="avatar" class="h-8 w-8 rounded-full" />
			<span class="hidden text-sm font-medium text-white sm:inline">Alex</span>
		</div>
	</div>
</header>
