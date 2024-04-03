<script>
    // @ts-nocheck
    import { isLoggedIn, userDetails } from './user';

    function logout() {
        $isLoggedIn = false;
        $userDetails = {};
    }
</script>

{#if $isLoggedIn}
    <p>Email: {$userDetails?.email}</p>
    <button on:click={logout}>Logout</button>
{/if}