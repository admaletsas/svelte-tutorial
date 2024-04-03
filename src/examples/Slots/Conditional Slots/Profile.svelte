<div>
    <p>
        <span>Name:</span>
        <slot name='name' />
    </p>

    {#if $$slots.email}
        <p>
            <span>Email:</span>
            <slot name='email' />
        </p>
    {/if}

    {#if $$slots.phone}
        <p>
            <span>Phone:</span>
            <slot name='phone' />
        </p>
    {/if}
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 10em;
        border: 2px solid #000;
        padding: 0.5em;
    }
</style>