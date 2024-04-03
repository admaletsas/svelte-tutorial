<script>
    let stack = [0, 1, 2];
    let n = 3;

    let topVariable = stack.at(-1);

    $: topReactDecl = stack.at(-1);

    function topFn() {
        return stack.at(-1);
    }
</script>

<p>n: {n}</p>
<p>Stack top: {stack.at(-1)}</p>
<p>Stack top (Variable): {topVariable}</p>
<p>Stack top (Reactive Declaration): {topReactDecl}</p>
<p>Stack top (Function): {topFn()}</p>

<button on:click={() => stack = [...stack, ++n]}>
    Push
</button>