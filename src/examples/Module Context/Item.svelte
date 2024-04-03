<script context='module'>
    import { getContext, setContext } from 'svelte';
    import { fetchData } from './api';

    const data = await fetchData(); 

    console.log('I will be printed only once');

    export function sharedFunction() {
        return `Hello, ${getContext('name')}`;
    }
</script>

<script>
    export let name;

    setContext('name', name);

    console.log(`Item: ${sharedFunction()}`);
</script>

{#each data as num}
    <p>{num}</p>
{/each}