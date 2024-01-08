<script lang="ts">
	import Modal from '$lib/components/Modal.svelte';
	import { diceAmount, diceConfig, rollResult } from '$lib/generalState';
	import { randDiceConfig } from '$lib/utils/diceConfig';
	import Dice from './App.svelte';
	import { onDestroy, onMount } from 'svelte';
	let dialog: HTMLDialogElement;
	let dialogStart: HTMLDialogElement;

	// $: console.log($rollResult);
	$: if ($rollResult.length >= $diceAmount) {
		dialog.showModal();
	}

	const handlePlayAgain = () => {
		$rollResult = [];
		$diceConfig = randDiceConfig($diceAmount);
		dialog.close();
	};

	onMount(() => {
		$rollResult = [];
		dialogStart.showModal();
	});
</script>

<div style="width: 100vw;">
	<Modal bind:dialog on:close={() => ($rollResult = [])}>
		<div style="padding: 4rem;">
			<p>Result:</p>
			{#each $rollResult as r}
				<span style="padding-right: 2px; font-weight: 600;">{r.faceUp}</span>
			{/each}

			<label for="range">
				<span>
					Dice number: {$diceAmount}
				</span>
				<input
					type="range"
					min="2"
					max="15"
					bind:value={$diceAmount}
					id="diceAmountRange"
					name="diceAmountRange"
				/>
			</label>

			<button on:click={handlePlayAgain}>Play Again</button>
		</div>
	</Modal>

	<Modal bind:dialog={dialogStart}>
		<div style="padding: 4rem;">
			<h1>Les Paccots</h1>

			<button
				on:click={() => {
					dialogStart.close();
					handlePlayAgain();
				}}>Start</button
			>
		</div>
	</Modal>
</div>
<div style="width: 100vw; height: 100vh;">
	<Dice />
</div>
