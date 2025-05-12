<script>
	export let artist = 'White Lies'
	export let listeners = '1.322.931'
	export let image =
		'assets/images/1.jpeg'
</script>

<div
	class="relative mt-10 overflow-hidden rounded-xl bg-neutral-800 text-white shadow-md transition hover:shadow-lg"
>
	<img src={image} alt={artist} class="h-56 w-full object-cover opacity-80" />

	<div class="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/70 to-transparent">
		<div class="flex items-center gap-2 mb-2">
			<span class="text-blue-400 text-xs">✔ verified user</span>
		</div>
		<h2 class="text-2xl font-bold">{artist}</h2>
		<p class="text-sm text-gray-300">{listeners} listeners for the month</p>
	</div>
</div>
