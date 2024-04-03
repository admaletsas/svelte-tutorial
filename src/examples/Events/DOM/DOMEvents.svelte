<script>
    // @ts-nocheck
    import ForwardButton from './ForwardButton.svelte';
    import HandleButton from './HandleButton.svelte';

    let text = '';
</script>

<div class='container'>
    <div>
        <!-- Handling DOM event -->
        <input on:input={ ({ target }) => text = target.value} />
        <p>Input: {text}</p>
    </div>
    
    <div>
        <!-- Handle forwarded click event -->
        <ForwardButton 
            on:click={() => console.log('Received click event')} 
        />
    
        <!-- Event is not forwarded, hence the click handler will not be triggered -->
        <HandleButton 
            on:click={() => console.log('Received click event')} 
        />
    </div>
</div>

<style>
    div {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1em;
    }

    .container {
        flex-direction: row;
        gap: 5em;
    }
</style>