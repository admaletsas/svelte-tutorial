<script>
	// Updated when prop changes in parent component
	export let current;

	// Set during component creation and not updated afterwards
	let initial = current;

	console.log(`ColorBadge (${initial}, ${current}) created`);
</script>

<p>
	<span style='background-color: {initial}'>Initial</span>
	<span style='background-color: {current}'>Current</span>
</p>

<style>
	p {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.2em;
		color: #fff;
		font-weight: 700;
	}

	span {
		width: 4em;
		margin: 0.2em;
		padding: 0.3em;
		border-radius: 0.2em;
		text-align: center;
	}
</style>
