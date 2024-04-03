<script>
    let visible = false;

    function typewriter(node, { speed = 1 }) {
        const hasOneChild = node.childNodes.length === 1;
        const isTextChild = node.childNodes[0].nodeType === Node.TEXT_NODE;
        const isValid = hasOneChild && isTextChild;

        if (!isValid) {
            throw new Error(
                'Transition can be applied only to elements' +
                    'with a single text node child'
            );
        }

        const text = node.textContent;
        const duration = text.length / (speed * 0.01);

        return {
            duration,
            tick: t => {
                const idx = Math.trunc(text.length * t);
                node.textContent = text.slice(0,  idx);
            }
        };
    }
</script>

<label>
    <input type='checkbox' bind:checked={visible} />
    Make Visible
</label>

{#if visible}
    <p transition:typewriter>
        Hello, world!
    </p>
{/if}