<script>
    import { tweened } from 'svelte/motion';

    const initialValue = 100;
    const step = 50;

    const options = {
        delay: 0,       // Time in ms before the tween starts
        duration: 400,  // Time in ms or (from, to) => time in ms
        easing: t => t, // Linear easing
        interpolate: (from, to) => t => from + (to - from) * t
    };

    const tween = tweened(initialValue, options);

    function increase() {
        tween.update(n => n + step);
    }

    function reset() {
        tween.set(initialValue);
    }
</script>

<button on:click={increase}>Increase</button>
<button on:click={reset}>Reset</button>

<div>
    <p style:--size={$tween + 'px'}>
        {$tween} x {$tween}
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