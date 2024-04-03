<script>
    export let label;
    
    let toggled = true;
</script>

<!-- Toggle class without class directive -->
<button
    on:click={() => toggled = !toggled}
    class={toggled ? 'state-true' : 'state-false'}
>
    {label}
</button>

<!-- Toggle class with class directive -->
<button
    on:click={() => toggled = !toggled}
    class='state-true'
    class:state-false={!toggled}
>
    {label}
</button>

<!-- Toggle class with multiple class directives -->
<button
    on:click={() => toggled = !toggled}
    class:state-true={toggled}
    class:state-false={!toggled}
>
    {label}
</button>

<!-- Shorthand class directive -->
<button
    on:click={() => toggled = !toggled}
    class:toggled
>
    {label}
</button>

<style>
    .state-true {
        background-color: var(--color-true);
    }

    .state-false {
        background-color: var(--color-false);
    }

    .toggled {
        background-color: brown;
    }
</style>