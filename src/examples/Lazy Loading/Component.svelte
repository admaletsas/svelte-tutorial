<script>
    import { onMount } from 'svelte';

    let message;

    onMount(() => {
        setTimeout(
            () => message = 'Hello, world',
            3000
        );
    });
</script>

<p>{message || 'Loading...'}</p>