<script>
    import Hoverable from './Hoverable.svelte';
</script>

<Hoverable let:hovering={active}>
    {#if active}
        <p>I'm being hovered upon</p>
    {:else}
        <p>Hover over me</p>
    {/if}
</Hoverable>