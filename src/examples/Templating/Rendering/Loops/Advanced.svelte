<script>
    const users = [
        { username: 'user1', age: 25, location: { country: 'USA' } },
        { username: 'user2', age: 35, location: { country: 'UK' } },
        { username: 'user3', age: 32, location: { country: 'USA' } },
        { username: 'user4', age: 23, location: { country: 'UK' } },
        { username: 'user5', age: 21, location: { country: 'UK' } },
        { username: 'user6', age: 44, location: { country: 'USA' } },
    ];
</script>

<!-- Object destruction-->
{#each users as { username, age, location }, index}
    <!-- Local constants -->
    {@const country = location.country}

    {#if country === 'USA'}
        {@const text = `${username}, ${age} is`}
        <p>{index + 1}. {text} from {country}</p>
    {/if}
{/each}