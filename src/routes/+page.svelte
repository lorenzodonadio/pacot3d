<script lang="ts">
	import ModalFinish from './ModalFinish.svelte';
	import ModalStart from './ModalStart.svelte';
	import { gameState, rollResult } from '$lib/generalState';
	import Dice from './App.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		$rollResult = [];
	});
</script>

<div style="width: 100vw;">
	{#if $gameState === 'start'}
		<ModalStart></ModalStart>
	{:else if $gameState === 'finish'}
		<ModalFinish></ModalFinish>
	{/if}
</div>
<div style="width: 100vw; height: 100vh;">
	<Dice />
</div>
