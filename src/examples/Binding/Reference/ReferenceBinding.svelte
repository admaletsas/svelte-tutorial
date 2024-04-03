<script>
    import Paragraph from './Paragraph.svelte';
    let content;
    let p, div;
</script>

<div class='container'>
    <div class='item'>
        <textarea bind:value={content}></textarea>
        <button on:click={p.clear}>Clear Paragraph</button>
        
        <!-- Bind to component reference -->
        <Paragraph bind:content bind:this={p}></Paragraph>
    </div>

    <!-- Bind to DOM element -->
    <div class='item' bind:this={div}>
        <button on:click={() => div.style.backgroundColor='red'}>
            Change Color
        </button>
    </div>
</div>

<style>
    div {
        display: flex;
        flex-wrap: wrap;
        gap: 1em;
        justify-content: center;
        align-items: center;
    }

    .container {
        flex-direction: row;
        width: 80%;
    }

    .item {
        flex-direction: column;
        padding: 1em;
        border: 2px solid green;
    }
</style>