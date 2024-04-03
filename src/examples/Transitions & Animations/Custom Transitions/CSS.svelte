<script>
    import { elasticOut } from 'svelte/easing';

    let visible = true;

    function fade(node, { delay = 0, duration = 400 }) {
        const opacity = +getComputedStyle(node).opacity;

        return {
            delay,
            duration,
            css: t => `opacity: ${t * opacity};`
        };
    }

    function spin(_node, { duration }) {
        return {
            duration,
            css: t => {
                const eased = elasticOut(t);

                return `
                    transform: scale(${eased}) rotate(${eased * 360}deg);
                    color: red;
                `;
            }
        };
    }
</script>

<label>
    <input type='checkbox' bind:checked={visible} />
    Make Visible
</label>

{#if visible}
    <p 
        in:spin={{ duration: 8000 }}
        out:fade
    >
        Spins in and fades out
    </p>
{/if}