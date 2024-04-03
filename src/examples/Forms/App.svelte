<script>
    import Profile from './Profile.svelte';
    import Register from './Register.svelte';
    import { isLoggedIn } from './user';
</script>

{#if $isLoggedIn}
    <Profile />
{:else}
    <Register />
{/if}