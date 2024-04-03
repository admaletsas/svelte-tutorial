<script>
    import { components } from './components';

    let selection, component;

    async function loadComponent() {
        try {
            const module = await import(`./examples/${components[selection]}`);
            component = module.default;
        }
        catch (e) {
            console.error(`Component does not exist`);
        }
    }
</script>

<main>
    <div>
        {#if components}
            <!-- Using {#if} for the "keys" local constant -->
            {@const keys =  Object.keys(components)}
            
            <select bind:value={selection} on:change={loadComponent}>
                <option value='' selected>Select:</option>
    
                {#each keys as key}
                    <option value={key}>{key}</option>
                {/each}
            </select>
        {/if}
    </div>
    
    <div class='content'>
        {#if component}
            <svelte:component this={component} />
        {:else}
            <p>Select an example to run.</p>
        {/if}
    </div>
</main>

<style>
    :global(body) {
        background-color: #e8e8e8;
    }

    main {
        height: 90vh;
        display: flex;
        flex-direction: column;
    }

    .content {
        flex-grow: 1;
        border: 2px solid #000;
        padding: 1em;
        margin-top: 1em;
    }

    select {
        padding: 0.2em;
    }
</style>