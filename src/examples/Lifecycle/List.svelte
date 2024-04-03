<script>
    import { onMount, beforeUpdate, afterUpdate } from 'svelte';
    import Item from './Item.svelte';

    let show = true;
    let items = [];

    // Simulate an API call
    function fetchData() {
        const data = Array
            .from({ length: 5 })
            .map((_, idx) => `Item ${idx + 1}`);

        return new Promise(resolve => {
            setTimeout(
                () => resolve({ data }), 
                2000
            );
        });
    }

    onMount(async () => {
        console.log('List is being created');
        const res = await fetchData();
        items = res.data;
    });

    beforeUpdate(() => console.log('List is about to be updated'));
    afterUpdate(() => console.log('List has been updated'));
</script>

<button on:click={() => show = !show}>
    Toggle    
</button>

{#if show}
    <ul>
        {#each items as name}
            <Item {name} />
        {/each}
    </ul>
{:else}
    <p>Fetching data...</p>
{/if}