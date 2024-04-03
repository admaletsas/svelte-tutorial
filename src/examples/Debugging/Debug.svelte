<script>
    const user = {
        firstName: 'John',
        lastName: 'Doe',
        location: {
            country: 'France',
            city: 'Paris'
        }
    };
</script>

<input bind:value={user.firstName} />
<input bind:value={user.lastName} />
<input bind:value={user.location.country} />
<input bind:value={user.location.city} />

{#if user}
    {@const { firstName, lastName, location } = user}
    {@const { country, city } = location}
    <p>{firstName} {lastName} from {city}, {country}</p>
{/if}

{@debug user}