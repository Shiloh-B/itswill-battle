<script>
  import generateRoundStateStore from "../../generateRoundStateStore";
  import gameState from "../../gameState";
  import Character from '../../components/character.svelte';

  // create a store with a copy of the characters so we can mutate and render the components based on the state of this store
  let roundStateStore = generateRoundStateStore($gameState.teamData.characters, $gameState.oppTeamData?.teamData?.characters); 
</script>

<!-- {#each $roundStateStore.playerTeam.characters as character}
  <Character {character}/>
{/each} -->

<!-- ********************************************************************************************** -->

<header>
  
</header>




<div class="container">
  <ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
  <ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</div>


<style>
  .container {
    border: 2px solid rgb(25, 185, 4);
    display: flex;
    justify-content: space-between;
  }
  
  ul {
    list-style: none; 
    display: flex;
    flex-direction: row;
    border: 1px solid red;
    padding: 10px;
    margin: 20px;
    justify-content: space-between;
    width: 40%;
  }

  li {
    padding: 8px;
    width: 80px;
    height: 80px;
    background: black;
  }
</style>