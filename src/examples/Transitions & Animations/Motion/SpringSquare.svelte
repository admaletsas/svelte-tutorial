<script>
    import { spring } from 'svelte/motion';

    const initialValue = 100;
    const step = 50;

    const options = {
        stiffiness: 0.5,
        damping: 0.1
    };

    const size = spring(initialValue, options);

    function increase() {
        size.update(n => n + step);
    }

    function reset() {
        size.set(initialValue);
    }
</script>

<button on:click={increase}>Increase</button>
<button on:click={reset}>Reset</button>

<div>
    <p style:--size={$size + 'px'}>
        {$size} x {$size}
    </p>
</div>

<style>
    div {
        display: flex;
        margin: 2em;
    }

    p {
        width: var(--size);
        height: var(--size);
        padding: 2em;
        background-color: red;
        color: #fff;
    }
</style>