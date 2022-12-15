<script lang="ts">
	import type { TodoType } from 'src/types';

	export let todo: TodoType;
	export let deleteTodo: (id: number) => Promise<void>;
</script>

<div class="todo">
	<div id="todo-wrapper">
		<div class="todo-title">
			<label for="completed"
				><span><input type="checkbox" class="checkbox" name="completed" /></span></label
			>
			<p class="empty-list">{todo.title}</p>
		</div>
		<div class="todo-actions">
			<button type="button" class="remove-btn" on:click={() => deleteTodo(todo.id)}>x</button>
		</div>
	</div>
</div>

<style>
	.todo {
		background-color: #fff;
		color: rgba(0, 0, 0, 0.87);
		-webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
		transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
		border-radius: 4px;
		box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
			0px 1px 3px 0px rgb(0 0 0 / 12%);
		overflow: hidden;
		margin-top: 16px;
		margin-bottom: 16px;
		background-color: #f5f5f5;
	}
	#todo-wrapper {
		padding: 16px;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: justify;
		-webkit-justify-content: space-between;
		justify-content: space-between;
	}
	#todo-wrapper:last-child {
		padding-bottom: 24px;
	}
	.todo-title {
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-align-items: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
	}
	.todo-actions {
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-align-items: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
	}
	.todo-actions button {
		display: -webkit-inline-box;
		display: -webkit-inline-flex;
		display: -ms-inline-flexbox;
		display: inline-flex;
		-webkit-align-items: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		position: relative;
		box-sizing: border-box;
		-webkit-tap-highlight-color: transparent;
		background-color: transparent;
		outline: 0;
		border: 0;
		margin: 0;
		border-radius: 0;
		padding: 0;
		cursor: pointer;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		vertical-align: middle;
		-moz-appearance: none;
		-webkit-appearance: none;
		-webkit-text-decoration: none;
		text-decoration: none;
		color: inherit;
		text-align: center;
		-webkit-flex: 0 0 auto;
		-ms-flex: 0 0 auto;
		flex: 0 0 auto;
		font-size: 1.5rem;
		padding: 8px;
		border-radius: 50%;
		overflow: visible;
		color: rgba(0, 0, 0, 0.54);
		-webkit-transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
		transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
		color: #f44336;
	}
</style>
