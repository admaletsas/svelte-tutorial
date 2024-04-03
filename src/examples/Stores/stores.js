import { writable, readable, derived, readonly } from 'svelte/store';

/**
 * Writable store.
 * Allows to retrieve and update the data.
 */
export const count = writable(0);

/** 
 * Readable store created with readonly(). 
 * Allows to retrieve the data.
 */
export const readableCount = readonly(count);

/** Derived readble store.
 * Allows to retrieve the computed data.
 */
export const doubledCount = derived(count, (cnt) => 2 * cnt);

/** 
 * Derived readble store from multiple stores.
 * Allows to retrieve the computed data.
 */
export const multiCount = derived(
    [count, readableCount],
    vals => vals[0] + vals[1],
);

/** 
 * Readable store.
 * Allows to retrieve the data.
 */
export const random = readable(randNum(), start);

// Generate a random number from 0 to 99
function randNum() {
    return Math.floor(Math.random() * 100);
}

// Start function to generate values
function start(set) {
    // Generate and set a random number every second
    const intervalId = setInterval(() => set(randNum()), 1000);

    /**
     * Stop function will be called on component destruction.
     * If multiple components use the random store at the same time, 
     * and one of them calls the stop function, it will impact all. 
     */
    return () => clearInterval(intervalId);
}
