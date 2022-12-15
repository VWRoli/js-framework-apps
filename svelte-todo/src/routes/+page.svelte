<script lang="ts">
	import Header from '../components/Header.svelte';
	import Form from '../components/Form.svelte';
	import Item from '../components/Item.svelte';
	import { API_URL } from '../constants/index';
	import { onMount } from 'svelte';
	import type { TodoType } from '../types/index';

	let todos: any = [];
	let isOpen = true;

	function toggleOpen() {
		isOpen = !isOpen;
	}
	async function deleteTodo(id: number) {
		try {
			await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
			todos = todos.filter((t: TodoType) => t.id !== id);
		} catch (error) {
			console.log(error);
		}
	}
	async function editTodo(id: number, todo: TodoType) {
		try {
			await fetch(`${API_URL}/${id}`, {
				method: 'PUT',
				body: JSON.stringify(todo),
				headers: {
					'Content-type': 'application/json; charset=UTF-8'
				}
			});
			todos = todos.map((p: TodoType) => (p.id === id ? todo : p));
		} catch (error) {
			console.log(error);
		}
	}
	onMount(async function (): Promise<void> {
		const response = await fetch(`${API_URL}?_limit=5`);
		const data = await response.json();
		todos = data;
	});
</script>

<Header {isOpen} {toggleOpen} />
{#if isOpen}<Form />{/if}
{#each todos as todo}
	<Item {todo} {deleteTodo} {editTodo} />
{/each}
