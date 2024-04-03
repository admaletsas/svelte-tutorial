<script>
    import File from './File.svelte';

    export let name, files, expanded;
</script>

<button on:click={() => expanded = !expanded}>
    /{name}
</button>

{#if expanded}
    <div class='expanded'>
        {#each files as file}
            {@const isDir = file.files}

            {#if isDir}
                <svelte:self {...file} />
            {:else}
                <File {...file} />
            {/if}
        {/each}
    </div>
{/if}

<style>
    * {
        display: block;
    }

    button {
        background-color: transparent;
        border: none;
        padding: 0;
        margin: 0;
        cursor: pointer;
    }

    .expanded {
        margin-left: 1em;
    }
</style>