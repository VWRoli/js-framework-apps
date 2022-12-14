<script lang="ts">
	import Button from './Button.svelte';
	export let isOpen: boolean;
	export let toggleOpen: () => void;
</script>

<header>
	<h5 class="title">Vue todo app</h5>
	<Button
		label={isOpen ? 'close' : 'open'}
		clickHandler={toggleOpen}
		className={isOpen ? 'error' : 'primary'}
	/>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		padding: 16px;
	}
	.title {
		margin: 0;
		font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
		font-weight: 400;
		font-size: 1.5rem;
		line-height: 1.334;
		letter-spacing: 0em;
		margin-bottom: 0.35em;
	}
</style>
