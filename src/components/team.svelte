<script>
	import Character from "./character.svelte";
</script>

<div class="team">
	<Character/>
	<Character/>
	<Character/>
	<Character/>
	<Character/>
</div>

<style>
	.team {
		display: flex;
		justify-content: space-between;
		width: 40%;
	}
</style>