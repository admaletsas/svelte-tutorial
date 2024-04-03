<script>
    import { onDestroy } from 'svelte';
    import { cart } from './cart';
    
    let items;
    let id = 0;

    const unsubscribe = cart.subscribe(val => items = val);
    onDestroy(unsubscribe);

    function addToCart() {
        cart.addToCart({ id, name: `Item ${id}` });
        id++;
    }

    function removeFromCart() {
        cart.removeFromCart(--id);
    }

    function emptyCart() {
        cart.emptyCart();
        id = 0;
    }
</script>

<h3>Cart Summary</h3>

<ul>
    {#each items as { id, name } (id)}
        <li>{name}</li>
    {/each}
</ul>

<button on:click={addToCart}>Add Item</button>
<button on:click={removeFromCart}>Remove Last Item</button>
<button on:click={emptyCart}>Empty Cart</button>