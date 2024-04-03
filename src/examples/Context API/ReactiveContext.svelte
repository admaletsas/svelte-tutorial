<script>
    import { getContext, setContext } from 'svelte';
    import { writable } from 'svelte/store';

    let name = writable('');
    setContext('name', name);
    
    let message = getContext('name');

    function randomName() {
        const names = ['George', 'John', 'Peter', 'Dennis'];
        const idx = Math.floor(Math.random() * names.length);
        
        return names[idx];
    }
</script>

<p>Hello, {$message}</p>

<button on:click={() => $name = randomName()}>
    Change Name
</button>