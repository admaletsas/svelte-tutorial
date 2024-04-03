<script>
    function nonWorkingLogout(user) {
        user = { ...user, status: 'offline' };
    }

    function workingLogout(loggedUser) {
        user = { ...loggedUser, status: 'offline' };
    }

    let user = {
        username: 'user',
        status: 'online'
    };
</script>

<p>{user.username} is {user.status}</p>

<button on:click={() => nonWorkingLogout(user)}>
    Non-working Logout
</button>

<button on:click={() => workingLogout(user)}>
    Working Logout
</button>