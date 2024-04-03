<script>
    import { onMount } from 'svelte';

    let i = 0;

    onMount(() => {
        const interval = setInterval(() => i++, 5000);
        return () => clearInterval(interval);
    });

    function typewriter(node, { speed = 1 }) {
        const text = node.textContent;
        const duration = text.length / (speed * 0.01);

        return {
            duration,
            tick: t => {
                const idx = Math.trunc(text.length * t);
                node.textContent = text.slice(0,  idx);
            }
        };
    }
</script>

{#key i}
    <p in:typewriter={{ speed: 0.5 }}>
        Key block item {i}
    </p>
{/key}

<p in:typewriter={{ speed: 0.5 }}>
    Item without key block {i}
</p>