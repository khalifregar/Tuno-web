<script>
	import '/src/app.css'
	import { i18n } from '$lib/i18n'
	import { ModeWatcher } from 'mode-watcher'
	import { ParaglideJS } from '@inlang/paraglide-sveltekit'

	import HomeSidebar from '$presentation/widgets/home/HomeSidebar.svelte'
	import HomeNavbar from '$presentation/widgets/home/HomeNavbar.svelte'
	import HomeAlbumSection from '$presentation/widgets/home/HomeAlbumSection.svelte'
	import HomeTrendingSection from '$presentation/widgets/home/HomeTrendingSection.svelte'
	import HomeBannerCard from '$presentation/widgets/home/HomeBannerCard.svelte'

	import { menu } from '$features/navigation/menu.js'

	let sidebarWidth = 224
	let sidebarVisible = true

	function toggleSidebar() {
		sidebarVisible = !sidebarVisible
	}
</script>

<ModeWatcher />

<ParaglideJS {i18n}>
	<div class="relative flex h-screen bg-black text-white overflow-hidden">
		<!-- Sidebar (responsif: absolute di mobile, fixed di desktop) -->
		<HomeSidebar
			{menu}
			bind:sidebarWidth
			visible={sidebarVisible}
			class="transition-all duration-300 ease-in-out"
		/>

		<!-- Overlay (mobile only) -->
		{#if sidebarVisible}
			<div
				class="fixed inset-0 z-10 bg-black bg-opacity-50 md:hidden"
				on:click={() => (sidebarVisible = false)}
			/>
		{/if}

		<!-- Main Content -->
		<div
			class="flex flex-1 flex-col transition-all duration-300 ease-in-out"
			style="margin-left: {sidebarVisible && window.innerWidth >= 768 ? `${sidebarWidth}px` : '0px'}"
		>
			<!-- Navbar -->
			<HomeNavbar {toggleSidebar} />

			<!-- Content -->
			<main class="flex-1 overflow-auto bg-gray-950 p-4 md:p-8">
				<HomeAlbumSection />
				<HomeTrendingSection />
				<HomeBannerCard />
				<slot />
			</main>
		</div>
	</div>
</ParaglideJS>
