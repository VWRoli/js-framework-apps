<script lang="ts">
	import Header from '../components/Header.svelte';
	import Form from '../components/Form.svelte';

	let isOpen = false;

	function toggleOpen() {
		isOpen = !isOpen;
	}
</script>

<Header {isOpen} {toggleOpen} />
{#if isOpen}<Form />{/if}
