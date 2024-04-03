<script>
    export let description, count;
    export let updateValue = null;

    function increment() {
        count++;
        typeof updateValue === 'function' && updateValue(count);
    }
</script>

<div>
    <p>Child with {description}</p>
    <p>Count: {count}</p>
    <button on:click={increment}>Increment</button>
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>