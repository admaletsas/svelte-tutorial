<script>
    import Inner from './Inner.svelte';
</script>

<!-- Forward component dispatched event instead of handling it -->
<Inner on:data />