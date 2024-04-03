<script>
    import Profile from './Profile.svelte';
</script>

<div>
    <Profile>
        <span slot='name'>John Doe</span>
        <span slot='email'>john@mail.com</span>    
    </Profile>
    
    <Profile>
        <span slot='name'>George Doe</span>
        <span slot='phone'>+1234567890</span>    
    </Profile>
    
    <Profile>
        <span slot='name'>Andrew Doe</span>
    </Profile>
</div>

<style>
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5em;
    }
</style>