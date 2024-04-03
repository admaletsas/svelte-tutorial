<script>
    import Inner from './Inner.svelte';
    import Outer from './Outer.svelte';
</script>

<!-- Handle component dispatched events -->
<Inner on:data={e => console.log('Inner:', e.detail.message)} />
<Outer on:data={e => console.log('Outer:', e.detail.message)} />