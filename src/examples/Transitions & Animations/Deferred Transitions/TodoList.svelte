<script>
	import { send, receive } from './transition.js';

	export let store, done;
</script>

<ul>
	{#each $store.filter(todo => todo.done === done) as todo (todo.id)}
		<li
			class:done
			in:receive={{ key: todo.id }}
			out:send={{ key: todo.id }}
		>
			<label>
				<input
					type='checkbox'
					checked={todo.done}
					on:change={
						e => store.mark(todo, e.currentTarget.checked)
					}
				/>

				<span>{todo.description}</span>
				
                <button on:click={() => store.remove(todo)}>
                    Remove
                </button>
			</label>
		</li>
	{/each}
</ul>

<style>
    ul {
        padding: 0;
    }

    li {
        list-style: none;
        display: flex;
        align-items: center;
    }

	label {
		width: 90%;
		display: inline;
	}

	span {
		flex: 1;
	}

	button {
		margin-top: 0.5em;
        cursor: pointer;
	}
</style>