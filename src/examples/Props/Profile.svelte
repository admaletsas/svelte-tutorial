<script>
    import User from './User.svelte';

    const userEmail = 'user2@mail.com';
    const status = 'Online';
    const user = { 
        username: 'User 4',
        email: 'user4@mail.com',
        status
    };
</script>

<div class='container'>
    <!-- Passing all props -->
    <User 
        username='User 1'
        email='user1@mail.com'
        group='Super Users'
        status='Offline'
    />

    <!-- 
        Passing all props except for the "group" prop, which has a default value.
        "email" prop receives the value of variable userEmail.
        "status" prop receives the value of variable status.
    -->
    <User 
        username='User 2'
        email={userEmail}
        status={status}
    />

    <!-- "{status}" is shorthand for "status={status}" -->
    <User 
        username='User 3'
        email='user3@mail.com'
        {status}
    />

    <!-- Spread props -->
    <User {...user} />

    <!-- 
        User with extra props.
        The "prop=value" syntax passes values as a string.
        When the value is enclosed in {value}, it will retain its original type. 
    -->
    <User
        {...user}
        arr={[1, 2, 3]}
        obj={{ a: 1, b: 2, c: 3 }}
        bool={true}
        num={123}
    />
</div>

<style>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 1em;
    }
</style>