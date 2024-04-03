<script>
    const user = {
        location: {
            country: 'France'
        } 
    };

    let nonWorkingLocation = user.location;
    let workingLocation = user.location;

    let value;

    function nonWorkingSetCountry(country) {
        user.location.country = country;
    }

    function workingSetCountry(country) {
        user.location.country = country;
        workingLocation = user.location;
    }
</script>

<p>{user.location.country}</p>
<p>{nonWorkingLocation.country}</p>
<p>{workingLocation.country}</p>

<input bind:value />

<button on:click={() => nonWorkingSetCountry(value)}>
    Non-working Set Country
</button>

<button on:click={() => workingSetCountry(value)}>
    Working Set Country
</button>