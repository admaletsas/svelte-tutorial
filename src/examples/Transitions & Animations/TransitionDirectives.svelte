<script>
    import { fade, fly } from 'svelte/transition';

    let visible1 = true;
    let visible2 = true;
    let visible3 = true;
</script>

<div>
    <div>
        <label>
            <input type='checkbox' bind:checked={visible1} />
            Make Visible
        </label>
        
        {#if visible1}
            <p transition:fade>
                Fades in and out
            </p>
        {/if}
    </div>
    
    <div>
        <label>
            <input type='checkbox' bind:checked={visible2} />
            Make Visible
        </label>
        
        {#if visible2}
            <!-- 
                "transition" directive with parameters.
                Transition is reversible, 
                  meaning if you toggle the checkbox while
                  the transition is ongoing, 
                  it transitions from the current point.
            -->
            <p transition:fly={{ y: 200, duration: 2000 }}>
                Flies in and out
            </p>
        {/if}
    </div>
    
    <div>
        <label>
            <input type='checkbox' bind:checked={visible3} />
            Make Visible
        </label>
        
        {#if visible3}
            <!-- 
                Different transitions for when the element 
                  is added and removed from the DOM.
            -->
            <p in:fly={{ y: 200, duration: 2000 }} out:fade>
                Flies in and fades out
            </p>
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
        width: 10em;
        height: 5em;
        padding: 1em;
        border: 2px solid #000;
    }
</style>