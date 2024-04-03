<script>
    let hovering;
    const enter = () => hovering = true;
    const leave = () => hovering = false;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div on:mouseenter={enter} on:mouseleave={leave}>
    <slot {hovering} />
</div>

<style>
    div {
        width: 10em;
        border: 2px solid #000;
        text-align: center;
    }
</style>