<script>
  import generateRoundStateStore from "../../generateRoundStateStore";
  import gameState from "../../gameState";
  import Character from '../../components/character.svelte';

  // create a store with a copy of the characters so we can mutate and render the components based on the state of this store
  let roundStateStore = generateRoundStateStore($gameState.teamData.characters, $gameState.oppTeamData?.teamData?.characters); 


</script>

{#each $roundStateStore.playerTeam.characters as character}
  <Character {character}/>
{/each}