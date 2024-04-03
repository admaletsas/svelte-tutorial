<script>
	import { createTodoStore } from './todos.js';
	import TodoList from './TodoList.svelte';

	const todos = createTodoStore([
		{ done: false, description: 'Todo 1' },
		{ done: false, description: 'Todo 2' },
		{ done: true, description: 'Todo 3' },
		{ done: false, description: 'Todo 4' },
		{ done: false, description: 'Todo 5' },
		{ done: false, description: 'Todo 6' }
	]);
</script>

<div class='board'>
	<input
		placeholder='What needs to be done?'
		on:keydown={(e) => {
			if (e.key !== 'Enter') return;

			todos.add(e.currentTarget.value);
			e.currentTarget.value = '';
		}}
	/>

	<div class='todo'>
		<h2>Todo</h2>
		<TodoList store={todos} done={false} />
	</div>

	<div class='done'>
		<h2>Done</h2>
		<TodoList store={todos} done={true} />
	</div>
</div>

<style>
	.board {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-column-gap: 1em;
		max-width: 36em;
		margin: auto;
	}

	.board > input {
		font-size: 1em;
		grid-column: 1/3;
		padding: 0.5em;
		margin: 0 0 1rem 0;
	}

	h2 {
		font-size: 2em;
		font-weight: 200;
	}
</style>