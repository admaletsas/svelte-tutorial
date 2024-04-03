<script>
    import { cubicOut } from 'svelte/easing';
    import { tweened } from 'svelte/motion';

    const initialValue = 0;
    const step = 0.25;

    // Options for the tweened animation
    const options = {
        delay: 0,      // Time in ms before the tween starts
        duration: 400, // Time in ms or (from, to) => time in ms
        easing: cubicOut
    };

    let progress = initialValue;
    const tweenProgress = tweened(initialValue, options);

    function increase() {
        if (progress !== 1) {
            progress += step;
        }

        if ($tweenProgress < 1) {
            // Returns a promise that resolves when the tween completes
            tweenProgress.update(n => n + step);
        }
    }

    function reset() {
        progress = 0;

        // Returns a promise that resolves when the tween completes
        tweenProgress.set(initialValue);
    }
</script>

<div>
    <p>Without tweening:</p>
    <progress value={progress} />
</div>

<div>
    <p>Tweened:</p>
    <progress value={$tweenProgress} />
</div>

<button on:click={increase}>Increase</button>
<button on:click={reset}>Reset</button>

<style>
    div {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 1em;
        margin-bottom: 1em;
    }

    p {
        width: 8em;
    }

    progress {
        flex: 1;
    }
</style>