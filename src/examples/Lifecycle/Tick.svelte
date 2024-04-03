<script>
    import { tick } from 'svelte';

    let count = 0;
    let p;

    async function increment() {
        count++;
        console.log('Before tick:', p.textContent);
        await tick();
        console.log('After tick:', p.textContent);
    }
</script>

<p bind:this={p}>{count}</p>

<button on:click={increment}>
    Increment
</button>