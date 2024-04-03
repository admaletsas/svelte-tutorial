<script>
    let count = 0;
</script>

<p>Count: {count}</p>
<button on:click={() => count++}>Increment</button>

<!-- Both "else if" and "else" blocks are optional -->
{#if count > 10}
    <p>More than 10</p>
{:else if count >= 5}
    <p>More than or equal to 5</p>
{:else}
    <p>Less than 5</p>
{/if}