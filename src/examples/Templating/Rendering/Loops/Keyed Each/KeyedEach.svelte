<script>
	import ColorBadge from './ColorBadge.svelte';

	let colors = [
		{ id: 1, value: 'red' },
		{ id: 2, value: 'orange' },
		{ id: 3, value: 'green' },
		{ id: 4, value: 'blue' },
		{ id: 5, value: 'brown' }
	];

	function deleteFirst() {
		colors = colors.slice(1);
	}
</script>

<div class='container'>
	<div>
		<h2>Keyed</h2>
		{#each colors as color (color.id)}
			<ColorBadge current={color.value} />
		{/each}
	</div>

	<div>
		<h2>Non-keyed</h2>
		{#each colors as color}
			<ColorBadge current={color.value} />
		{/each}
	</div>
</div>

<div class='container mt'>
	<button on:click={deleteFirst}>Delete First</button>
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 5em;
	}

	.mt {
		margin-top: 1em;
	}
</style>