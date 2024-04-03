<script>
    import { onMount, onDestroy } from 'svelte';

    export let name;

    onMount(() => console.log('Item created'));
    onDestroy(() => console.log('Item destroyed'));
</script>

<li>{name}</li>