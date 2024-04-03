<script>
    import { createEventDispatcher } from 'svelte';
    
    const dispatch = createEventDispatcher();

    // Dispatch a "data" event
    const handleClick = () => {
        dispatch('data', { message: 'Hello from Inner' });
    }
</script>

<button on:click={handleClick}>Click</button>