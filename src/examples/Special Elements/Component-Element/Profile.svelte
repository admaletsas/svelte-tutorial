<script>
    import AdminBadge from './badges/AdminBadge.svelte';
    import ModeratorBadge from './badges/ModeratorBadge.svelte';
    import UserBadge from './badges/UserBadge.svelte';

    const badges = [
        { name: 'user', component: UserBadge },
        { name: 'moderator', component: ModeratorBadge },
        { name: 'admin', component: AdminBadge }
    ];

    const formats = ['h4', 'h5', 'h6', 'p'];

    let selectedBadge = badges[0];
    let selectedFormat = formats[0];
</script>

<div>
    <svelte:component this={selectedBadge.component} />

    <svelte:element this={selectedFormat}>
        Username
    </svelte:element>
</div>

<div>
    <!-- Select component -->
    <select bind:value={selectedBadge}>
        {#each badges as badge}
            <option value={badge}>{badge.name}</option>
        {/each}
    </select>

    <!-- Select element -->
    <select bind:value={selectedFormat}>
        {#each formats as format}
            <option value={format}>{format}</option>
        {/each}
    </select>
</div>

<style>
    div {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
    }
</style>