<script>
    import ToggleButtons from './ToggleButtons.svelte';
</script>

<!-- Using component styles -->
<ToggleButtons
    label='Click'
    --color-true='green'
    --color-false='red'
/>

<!-- Using style directive on DOM element -->
<p style:--text-color='blue'>Click any button</p>

<style>
    p {
        color: var(--text-color);
    }
</style>