<script>
    import { onMount } from 'svelte';
    import Error404 from './components/404.svelte';
    import Home from './components/Home.svelte';
    import Page from './components/Page.svelte';

    const routes = {
        '/': Home,
        'page': Page,
        '*': Error404
    };

    let currentRoute = '';

    function handleRoute() {
        const { hash } = window.location;
        currentRoute = hash ? hash.slice(1) : '/';
    }

    onMount(() => {
        handleRoute();
        window.addEventListener('hashchange', handleRoute);
    });

    $: Component = routes[currentRoute] || routes['*'];
</script>

<svelte:component this={Component} />