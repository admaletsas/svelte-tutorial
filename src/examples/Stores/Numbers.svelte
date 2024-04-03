<script>
    import { onDestroy } from 'svelte';
    import { 
        count, 
        readableCount, 
        doubledCount, 
        multiCount, 
        random 
    } from './stores';

    // Store values received from subscriptions will be stored to these variables
    let countValue, doubledCountValue, randomValue;
    
    // Subscribe to the stores and store the returned unsubscribe functions
    const unsubscribeCount = count
        .subscribe(cnt => countValue = cnt);

    const unsubscribeDoubledCount = doubledCount
        .subscribe(val => { doubledCountValue = val; });

    const unsubscribeRandom = random
        .subscribe(val => randomValue = val);

    // Unsubscribe when component is about to be removed from the DOM
    onDestroy(() => {
        unsubscribeCount();
        unsubscribeDoubledCount();
        unsubscribeRandom();
    });
</script>

<p>Count: {countValue}</p>
<p>Readable Count: {$readableCount}</p>
<p>Doubled Count (1 Store): {doubledCountValue}</p>
<p>Doubled Count (2 Stores): {$multiCount}</p>
<p>Random Number: {randomValue}</p>

<!-- 
    Writable stores can be updated or set by the subscribers.
    Readable stores do not have set and update methods.
-->
<button on:click={() => count.update(cnt => cnt + 1)}>
    Increment Count
</button>

<button on:click={() => count.set(0)}>
    Reset Count
</button>