<script>
    let show, key, selection;

    const externalCss = 'https://cdnjs.cloudflare.com' + 
        '/ajax/libs/nes.css/2.3.0/css/nes.min.css';
</script>

<svelte:head>
    <link 
        rel='stylesheet' 
        href='https://fonts.googleapis.com/css?family=Gelasio' 
    />

    <link 
        rel='stylesheet' 
        href={externalCss}
    />

    <title>Svelte App</title>
</svelte:head>

<svelte:window
    on:keydown={e => key = e.key}
/>

<svelte:body
    on:mouseenter={() => show = true}
    on:mouseleave={() => show = false}
/>

<svelte:document
    on:selectionchange={() => selection = `${document.getSelection()}`}
/>

<div>
    {#if show}
        <p>Pressed: {key || '--'}</p>
        <p>Selected Text: {selection || '--'}</p>
    {:else}
        <p>Hover over here</p>
    {/if}
</div>

<style>
    div {
        font-family: Gelasio;
        border: 2px solid #000;
        margin: 1em;
        padding: 1em;
    }
</style>