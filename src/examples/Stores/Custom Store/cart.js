import { writable } from 'svelte/store';

// Create a custom store for a shopping cart
function createCart() {
    const { subscribe, set, update } = writable([]);

    // Do not expose set and update methods
    return {
        subscribe,
        addToCart: item => update((cart) => [...cart, item]),
        removeFromCart: itemId => {
            update(cart => 
                cart.filter((item) => item.id !== itemId)
            );
        },
        emptyCart: () => set([]),
    };
}

// Singleton cart
export const cart = createCart();
