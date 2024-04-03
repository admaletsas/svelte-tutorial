<script>
    const promiseThatResolves = new Promise(resolve => {
        setTimeout(
            () => resolve('Hello, world'), 
            2000
        );
    });

    const promiseThatRejects = new Promise((_, reject) => {
        setTimeout(
            () => reject('An error occured'), 
            2000
        );
    });
</script>

<!-- Handle pending and resolved states-->
{#await promiseThatResolves}
    <p>1. Waiting to resolve...</p>
{:then data} 
    <p>1. Resolved to "{data}"</p>
{/await}

<!-- Handle resolved state -->
{#await promiseThatResolves then data}
    <p>2. Resolved to "{data}"</p>
{/await}

<!-- Handle pending, resolved, and rejected states -->
{#await promiseThatRejects}
    <p>3. Waiting to resolve...</p>
{:then data} 
    <p>3. Resolved to "{data}"</p>
{:catch error}
    <p>3. Rejected with "{error}"</p>
{/await}

<!-- Handle resolved and rejected states -->
{#await promiseThatRejects then data}
    <p>4. Resolved to "{data}"</p>
{:catch error}
    <p>4. Rejected with "{error}"</p>
{/await}