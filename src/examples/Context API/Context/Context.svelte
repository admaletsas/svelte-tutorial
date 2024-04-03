<script>
    import { setContext } from 'svelte';
    import Grandparent from './Grandparent.svelte';

    setContext('name', 'Jonh Doe');

    setContext('format', {
        format: name => `Hello, ${name}`
    });
</script>

<Grandparent />