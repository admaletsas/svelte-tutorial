<script>
    // @ts-nocheck
    import { resizeAction } from './actions';

    let visible = true;
    let bgColor;
</script>

<label>
    <input type='checkbox' bind:checked={visible} />
    Make Visible
</label>

<label>
    Background Color:
    <input type='color' bind:value={bgColor} />
</label>

{#if visible}
    <div use:resizeAction={bgColor}></div>
{/if}

<style>
    div {
        border: 2px solid #000;
        resize: both;
        overflow: auto;
    }
</style>