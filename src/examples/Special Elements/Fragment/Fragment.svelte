<script>
    import Widget from './Widget.svelte';
</script>

<Widget>
    <!-- "slot='header'" is visible on the source code -->
    <h3 slot='header'>Header</h3>

    <!-- "slot='footer'" is not visible on the source code -->
    <svelte:fragment slot='footer'>
        <h4>Footer</h4>
    </svelte:fragment>
</Widget>