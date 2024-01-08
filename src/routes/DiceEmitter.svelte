<script lang="ts">
	import { T, useThrelte } from '@threlte/core';
	// import { dicenum2rot, randDiceNumber, randRotation } from '$lib/utils/diceRotation';
	import RigidDie from '$lib/components/RigidDie.svelte';
	import { delay } from '$lib/utils/delay';
	import { diceAmount, diceConfig } from '$lib/generalState';
	const { renderer, scene, size, camera } = useThrelte();
</script>

{#key $diceConfig}
	{#if $diceConfig}
		{#await delay(250) then}
			{#each $diceConfig as d (d.id)}
				<RigidDie id={d.id} rotation={d.rot} position={d.pos}></RigidDie>
			{/each}
		{/await}
	{/if}
{/key}
