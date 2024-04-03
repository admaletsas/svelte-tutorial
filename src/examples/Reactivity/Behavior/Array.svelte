<script>
    let stack = [0, 1, 2];
    let n = 3;
</script>

<p>n: {n}</p>
<p>Stack top: {stack.at(-1)}</p>

<button on:click={() => stack.push(++n)}>
    Non-working Push
</button>

<button on:click={() => stack = [...stack, ++n]}>
    Working Push
</button>