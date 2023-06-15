<script>
  import generateRoundStateStore from "../generateRoundStateStore";
  import gameState from "../gameState";
  import Character from '../components/character.svelte';

  import CharacterObj from '../classes/character';

  // create a store with a copy of the characters so we can mutate and render the components based on the state of this store
  let roundStateStore = generateRoundStateStore($gameState.teamData.characters, $gameState.oppTeamData?.teamData?.characters); 

  // this needs to be >= animation time per tick (when we get there)
  let teamCharacters = $roundStateStore.playerTeam.characters.map((c) => {
    return new CharacterObj(c.type, c.health, c.power);
  });

  console.log(teamCharacters);
  
  function gameLoop() {
    console.log('calling the loop :)');
    // current fighters
    let teamCharacter = $roundStateStore.playerTeam.characters[0];
    let opposingTeamCharacter = $roundStateStore.opposingTeam.characters[0];

    // team character attack
    $roundStateStore.playerTeam.characters[0].health -= teamCharacter.power;

    // opposing character attack
    $roundStateStore.opposingTeam.characters[0].health -= opposingTeamCharacter.power;
  }
  // setTimeout(gameLoop, 1000);
</script>

<div class="container">
  <div class="team-container player-team">
    {#each $roundStateStore.playerTeam.characters as character}
      <Character {character}/>
    {/each}
  </div>
  <div class="team-container">
    {#each $roundStateStore.opposingTeam.characters as character}
      <Character {character}/>
    {/each}
  </div>
</div>

<style>
  .container {
    border: 2px solid rgb(25, 185, 4);
    display: flex;
    justify-content: space-between;
  }
  
  .team-container {
    display: flex;
    border: 1px solid red;
    padding: 10px;
    margin: 20px;
    justify-content: space-between;
    width: 40%;
  }

  .player-team {
    flex-direction: row-reverse;
  }
</style>