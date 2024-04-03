<script>
    export let username, email;
    export let group = 'Users';
    export let status;

    /**
     * $$props is a special object that contains all the props passed to 
     *  a component as key-value pairs.
     * $$restProps is used to access any additional props passed 
     *  that are not explicitly defined in the component to its child.
     * $$props include $$restProps, but not vice versa.
    */
    if (Object.entries($$restProps).length) {
        console.log('props:', $$props);
        console.log('restProps:', $$restProps);
    }
</script>

<div class='container'>
    <p>Username: {username}</p>
    <p>Email: {email}</p>
    <p>Group: {group}</p>
    <p>Status: {status}</p>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin-left: 1em;
        padding: 1em;
        border: 2px solid;
    }
</style>