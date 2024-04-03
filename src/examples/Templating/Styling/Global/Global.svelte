<script>
    import Parent from './Parent.svelte';
</script>

<div>
    <Parent />
</div>

<style>
    /**
     * Limit :global() rules as much as possible.
     * Apply to p elements that follow another p element and have a div parent.
     */
    div > :global(p + p) {
        background-color: red;
        color: #fff;
        padding: 1em;
        margin: 1em;
    }
</style>