<script>
    import Child from './Child.svelte';
    
    let count = 0;
</script>

<div class='container'>
    <div class='parent'>
        <p>Parent</p>
        <p>Count: {count}</p>
        <button on:click={() => count++}>Increment</button>
    </div>

    <!-- "{count}" is shorthand for count="{count}" -->
    <Child 
        description='one-way binding' 
        {count} 
    />

    <!-- "bind:count" is shorthand for "bind:count={count}" -->
    <Child 
        description='two-way binding' 
        bind:count 
    />
    
    <Child 
        description='2 one-way bindings resulting in a two-way binding' 
        {count}
        updateValue={cnt => count = cnt}
    />
</div>

<style>
    .container {
        display: flex;
        flex-wrap: wrap;
        gap: 1em;
        justify-content: center;
        align-items: center;
    }

    /** :global() targets global CSS styles, applying them universally across components */
    .container :global(div) {
        padding: 1em;
        margin: 1em;
    }

    .container :global(div):not(.parent) {
        border: 2px solid red;
    }

    .parent {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 2px solid green;
    }
</style>