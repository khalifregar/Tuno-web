<script>
	import '$app.css';
	import { i18n } from '$lib/i18n';
	import { ModeWatcher } from 'mode-watcher';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	import HomeNavbar from '$presentation/widgets/home/HomeNavbar.svelte';
	import HomeAlbumSection from '$presentation/widgets/home/HomeAlbumSection.svelte';
	import HomeTrendingSection from '$presentation/widgets/home/HomeTrendingSection.svelte';
	import HomeBannerCard from '$presentation/widgets/home/HomeBannerCard.svelte';
	import HomeRecentFavourites from '$presentation/widgets/home/HomeRecentFavourites.svelte';
	import SlideOverPanel from '$presentation/widgets/home/HomeSlideOverPanel.svelte';
		import NowPlayingBar from '$presentation/widgets/home/HomeNowPlayingBar.svelte';

	import { menu } from '$features/navigation/menu.js';
	import { openPanel } from '$stores/panelStore';

	let sidebarWidth = 324;
	let sidebarVisible = true;
	let screenWidth = 0;
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

	onMount(() => {
		const update = () => (screenWidth = window.innerWidth);
		update();
		window.addEventListener('resize', update);
		return () => window.removeEventListener('resize', update);
	});

	function toggleSidebar() {
		sidebarVisible = !sidebarVisible;
	}

	function handleItemClick(item) {
		openPanel(item);
	}
</script>

<svelte:window on:mousemove={resize} on:mouseup={stopResize} />
<ModeWatcher />
<ParaglideJS {i18n}>
	<div class="min-h-screen bg-black text-white">
		<!-- Sidebar -->
		{#if screenWidth >= 768 && sidebarVisible}
			<div
				class="fixed top-0 left-0 h-screen z-30 flex flex-col space-y-6 bg-neutral-900 py-4"
				style="width: {sidebarWidth}px;"
			>
				<!-- Logo -->
				<div class="flex flex-col space-y-0.5 px-4">
					<div class="text-2xl font-extrabold tracking-wide text-green-400">Tuno</div>
					<div class="text-xs text-gray-400">music.ai</div>
				</div>

				<!-- Navigation -->
				<nav class="mt-6 flex flex-1 flex-col overflow-y-auto px-4">
					<div class="flex flex-col gap-1 py-4">
						{#each menu as item}
							<a
								href={item.route}
								class="flex items-center gap-3 rounded px-2 py-3 text-sm uppercase
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

					<div class="my-3 border-t border-white/10" />

					<!-- Playlist shortcut -->
					<div class="my-4 flex flex-col gap-3">
						<div class="flex cursor-pointer items-center gap-3 rounded px-2 py-2 hover:bg-white/10">
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

				<!-- Logout -->
				<div class="mt-auto px-4">
					<button class="flex items-center gap-2 text-base text-red-400 hover:text-red-500">
						🔲 <span>Logout</span>
					</button>
				</div>

				<!-- Resize handle -->
				<div
					class="absolute right-0 top-0 h-full w-1 cursor-ew-resize bg-transparent hover:bg-white/10"
					on:mousedown={startResize}
				></div>
			</div>
		{/if}

		<!-- Main Content -->
		<div
			class="relative flex flex-col"
			style="margin-left: {screenWidth >= 768 && sidebarVisible ? `${sidebarWidth}px` : '0px'}"
		>
			<!-- Sticky Navbar -->
			<div class="sticky top-0 z-20 h-16 bg-gray-950 shadow-md">
				<HomeNavbar {toggleSidebar} />
			</div>

			<!-- Scrollable Content -->
			<main class="bg-gray-950 pt-16 p-4 pb-0 md:p-8">
				<!-- pt-16 matches navbar height -->
				<HomeAlbumSection />
				<HomeTrendingSection on:itemClick={handleItemClick} />
				<HomeBannerCard class="mb-10" />
				<HomeRecentFavourites class="mt-10" on:itemClick={handleItemClick} />
				<NowPlayingBar />
				<slot />
			</main>

			<SlideOverPanel />
		</div>
	</div>
</ParaglideJS>
