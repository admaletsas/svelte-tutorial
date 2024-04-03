<script>
    const users = [
        { username: 'user1', status: 'online'},
        { username: 'user2', status: 'offline'},
        { username: 'user3', status: 'online'}
    ];
</script>

<!-- else block is optional -->
{#each users as user}
    <p>{user.username} is {user.status}</p>
{:else}
    <p>No users to display</p>
{/each}

{#each users as user, index}
    <p>{index}. {user.username} is {user.status}</p>
{/each}