<script lang="ts">
	import { diceAmount, diceConfig, groupDiceByFaceUp, rollResult } from '$lib/generalState';
</script>

<div class="">
	{#each Object.entries(groupDiceByFaceUp($rollResult)) as [f, v]}
		<span style="padding-right: 2px; font-weight: 600;">{f} x {v}</span>
	{/each}
</div>
