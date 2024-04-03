<script>
    import { onMount } from 'svelte'

    let container = null;
    let isIntersecting = false;

    onMount(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                isIntersecting = entry.isIntersecting;
            });
        });

        observer.observe(container);
    });
</script>

<div bind:this={container}>
    {#if isIntersecting}
        <slot></slot>
    {/if}
</div>