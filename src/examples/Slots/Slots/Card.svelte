<div class='card'>
    <header>
        <slot name='name' />
    </header>

    <!-- 
        There is no way to apply CSS directly to a slot, 
          wrap it in a DOM element.
        i.e. ".card > *" will not match an unwrapped slot 
          inside the card container, so target the parent element.
    -->
    <div>
        <slot />
    </div>
    
    <footer>
        <span>Power:</span>
        <slot name='power'>100</slot>
    </footer>
</div>

<style>
    .card {
        width: 22em;
        border: 2px solid #000;
        border-radius: 0.5em;
        background-color:slategray;
    }

    .card > * {
        display: flex;
        justify-content: center;
        align-items: center;
        width: auto;
        padding: 1em;
        margin: 0.5em;
        background-color: cornflowerblue;
        color: #fff;
        font-size: 1.2rem;
    }

    header {
        border-radius: 0.3em 0.3em 0 0;
    }

    footer {
        border-radius: 0 0 0.3em 0.3em;
    }

    footer > span {
        padding-right: 0.5em;
    }

    :is(header, footer > span) {
        font-weight: 800;
    }

    :not(header, footer) {
        text-align: center;
        text-wrap: balance;
    }
</style>