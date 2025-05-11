<script lang="ts">
	import '../app.css';
	import { i18n } from '$lib/i18n';
	import { ModeWatcher } from 'mode-watcher';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';

	const menu = [
		{ icon: '🏠', route: '/' },
		{ icon: '🔍', route: '/search' },
		{ icon: '❤️', route: '/favorites' },
		{ icon: '🎤', route: '/mic' },
		{ icon: '📈', route: '/trending' },
		{ icon: '⬇️', route: '/downloads' },
		{ icon: '📃', route: '/playlists' },
		{ icon: '➕', route: '/create' }
	];
</script>

<ModeWatcher />

<ParaglideJS {i18n}>
	<div class="flex h-screen bg-black text-white">
		<!-- Sidebar -->
		<aside class="hidden w-16 flex-col items-center space-y-6 bg-neutral-900 py-4 md:flex">
			<div
				class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-xl text-white"
			>
				🎵
			</div>
			<nav class="mt-6 flex flex-1 flex-col items-center gap-6">
				{#each menu as item}
					<a href={item.route} class="text-xl transition hover:text-blue-400">{item.icon}</a>
				{/each}
			</nav>
			<div class="mt-auto pb-4">
				<button class="text-xl hover:text-red-400">🔲</button>
			</div>
		</aside>

		<!-- Main content area -->
		<div class="flex flex-1 flex-col">
			<!-- Navbar -->
			<header
				class="flex h-16 items-center justify-between border-b border-neutral-800 bg-neutral-900 px-4 md:px-6"
			>
				<!-- Search -->
				<div class="mx-auto hidden w-full max-w-3xl md:block">
					<input
						type="text"
						placeholder="Search for song, artist, lyrics..."
						class="w-full rounded-full bg-neutral-800 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>
				<div class="w-full md:hidden">
					<input
						type="text"
						placeholder="Search..."
						class="w-full rounded bg-neutral-800 px-3 py-1.5 text-sm text-white placeholder-gray-400 focus:outline-none"
					/>
				</div>
				<div class="ml-4 flex items-center gap-4">
					<button class="text-xl text-gray-300 hover:text-blue-400">🔔</button>
					<div class="flex items-center gap-2">
						<img src="https://i.pravatar.cc/32?u=alex" alt="avatar" class="h-8 w-8 rounded-full" />
						<span class="hidden text-sm font-medium text-white sm:inline">Alex</span>
					</div>
				</div>
			</header>

			<!-- Main Content -->
			<main class="flex-1 overflow-auto bg-gray-950 p-4 md:p-8">
				<!-- Recently Listened Albums -->
				<section class="mt-4">
					<h2 class="mb-4 text-lg font-semibold">Recently Listened Albums</h2>
					<div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
						{#each [{ title: 'Hip-Hop', count: 120, bg: 'bg-gradient-to-br from-orange-500 via-purple-700 to-black' }, { title: 'Indie', count: 34, bg: 'bg-gradient-to-br from-cyan-400 via-rose-400 to-red-500' }, { title: 'Pop', count: 100, bg: 'bg-gradient-to-br from-pink-300 via-blue-500 to-indigo-700' }, { title: 'Rap', count: 49, bg: 'bg-gradient-to-br from-purple-700 via-fuchsia-600 to-indigo-800' }] as album}
							<div class={`relative h-40 overflow-hidden rounded-xl p-4 ${album.bg}`}>
								<div class="absolute right-2 top-2 rounded-full bg-black bg-opacity-50 p-1">🎵</div>
								<div class="absolute bottom-3 left-3">
									<h3 class="font-semibold text-white">{album.title}</h3>
									<p class="text-sm text-gray-300">{album.count} new songs</p>
								</div>
							</div>
						{/each}
					</div>
				</section>

				<!-- Trending Right Now -->
				<section class="mt-10">
					<h2 class="mb-4 text-lg font-semibold">Trending Right Now</h2>
					<div class="trending-scroll max-h-96 space-y-2 overflow-y-auto pr-2">
						{#each [{ number: '01', title: 'Millions', artist: 'Always Never', album: 'Always Never', plays: '8.069.542', duration: '3:58', image: 'https://i.scdn.co/image/ab67616d00001e02028b3c9c96215b58c163faf6', favorite: false }, { number: '02', title: 'If You Let Me', artist: 'Alina Baraz', album: 'SunBeam', plays: '1.029.293', duration: '2:15', image: 'https://i.scdn.co/image/ab67616d00001e0283f19c6d6c0efb82cfd870a0', favorite: true }, { number: '03', title: 'Cruel Silence', artist: 'Lou Val', album: 'Cruel Silence', plays: '2.399.957', duration: '2:40', image: 'https://i.scdn.co/image/ab67616d00001e02984b4c3429d92f847be52dbe', favorite: false }, { number: '04', title: 'Stand Still', artist: 'Sabrina Claudio', album: 'About Time', plays: '4.273.927', duration: '4:43', image: 'https://i.scdn.co/image/ab67616d00001e02ebc2736b0d4f37dfb9073955', favorite: false }, { number: '05', title: 'Bye Bye', artist: 'Gryffin', album: 'Gravity', plays: '1.489.124', duration: '3:30', image: 'https://i.scdn.co/image/ab67616d00001e0205f10cb20f2e5aa2d6b9fa92', favorite: false }] as song}
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

				<slot />
			</main>
		</div>
	</div>
</ParaglideJS>
