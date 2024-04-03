<script>
    import { getAllContexts, getContext, hasContext } from 'svelte';

    const name = hasContext('name') ? getContext('name') : '';
    const { format } = getContext('format');
    const contextMap = getAllContexts();
</script>

<p>{format(name)}</p>
<p>Contexts: {Array.from(contextMap.keys()).join(', ')}</p>