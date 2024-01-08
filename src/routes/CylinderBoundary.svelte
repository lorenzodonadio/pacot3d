<script lang="ts">
	import { VerticalLineCurve } from '$lib/VerticalLineCurve';
	import { T } from '@threlte/core';
	import { AutoColliders } from '@threlte/rapier';
	export let height: number = 8;
	export let radius: number = 8;
	export let visible = false;
</script>

<AutoColliders shape={'trimesh'} restitution={0.9}>
	<T.Mesh position.y={-0.55} {visible}>
		<!-- <T.CircleGeometry args={[10, 60]} /> -->
		<T.TubeGeometry args={[new VerticalLineCurve(height), 64, radius, 20]}></T.TubeGeometry>
		<T.MeshStandardMaterial color="0xFFFFFF" wireframe={true} />
	</T.Mesh>
</AutoColliders>
