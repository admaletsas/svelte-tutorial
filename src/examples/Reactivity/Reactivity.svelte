<script>
    let message = 'Initial value';
    let counter = 0;

    // Reactive declaration
    $: doubled = 2*counter + 1;
    
    // Single reactive statement
    $: console.log('Counter is', counter);

    // Multiple reactive statements
    $: {
        if (counter > 10)
            message = 'More than 10';
        else if (counter > 5)
            message = 'More than 5';
        else
            message = 'Less than or equal to 5';
    }
</script>

<p>{message}</p>
<p>Counter: {counter}</p>
<p>Doubled + 1: {doubled}</p>

<!-- 
    Reactive assignment.
    "counter++" translates to "counter = counter + 1" under the hood.
-->
<button on:click={() => counter++}>Increment</button>