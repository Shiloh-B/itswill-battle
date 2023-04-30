<script>
	import Character from "./character.svelte";

	export let team;
  export let mirrored = false;


</script>

<div class="team {mirrored ? 'mirrored' : ''}">

	{#each team.characters as character}
		<Character {character}/>
	{/each}
	
</div>

<style>
	.team {
		display: flex;
		flex-direction: row-reverse;
		justify-content: space-between;
		width: 40%;
	}
	.mirrored {
		flex-direction: row;
	}
</style>