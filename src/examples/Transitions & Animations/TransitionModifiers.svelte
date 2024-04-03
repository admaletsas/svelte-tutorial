<script>
    import { slide } from 'svelte/transition';

    let items = ['Items 1', 'Items 2', 'Items 3'];
    let visible1 = true;
    let visible2 = true;

    function addItem() {
        items = [
            ...items,
            `Item ${items.length + 1}`
        ];
    }
</script>

<button on:click={addItem}>Add Item</button>

<div>
    <div>
        <label>
            <input type='checkbox' bind:checked={visible1} />
            Make Visible
        </label>
        
        {#if visible1}
            {#each items as item}
                <!-- 
                    In Svelte 4, transition applies to a single p element.
                    In Svelte 3, transition applies to each p element.
                    To achieve the Svelte 4 behavior in Svelte 3, 
                      use "transition:slide|local". 
                -->
                <p transition:slide>
                    {item}
                </p>
            {/each}
        {/if}
    </div>
    
    <div>
        <label>
            <input type='checkbox' bind:checked={visible2} />
            Make Visible
        </label>
        
        {#if visible2}
            {#each items as item}
                <!-- 
                    In Svelte 4, transition applies to each p element.
                    In Svelte 3, there is no global modifier. 
                -->
                <p transition:slide|global>
                    {item}
                </p>
            {/each}
        {/if}
    </div>
</div>

<style>
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1em;
    }

    div > div {
        flex-direction: column;
        padding: 1em;
        border: 2px solid #000;
    }
</style>