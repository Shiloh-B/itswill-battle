<script>
  import generateRoundStateStore from "../generateRoundStateStore";
  import gameState from "../gameState";
  import Character from '../components/character.svelte';

  import CharacterObj from '../classes/characterBase';
  import GameHandlerObj from '../classes/gameHandlerObject';


  // create a store with a copy of the characters so we can mutate and render the components based on the state of this store
  let roundStateStore = generateRoundStateStore($gameState.teamData.characters, $gameState.oppTeamData?.teamData?.characters); 

  const forceUpdate = () => {
    $roundStateStore = $roundStateStore;
  }

  roundStateStore.subscribe((value) => {
    console.log(value);
  });

  // this needs to be >= animation time per tick (when we get there)
  let teamCharacters = $roundStateStore.playerTeam.characters.map((c) => {
    return new CharacterObj(c, forceUpdate);
  });

  let oppTeamCharacters = $roundStateStore.opposingTeam.characters.map((c) => {
    return new CharacterObj(c, forceUpdate);
  });

  console.log(teamCharacters);
  console.log(oppTeamCharacters);
  
  async function gameLoop() {
    console.log('calling the loop :)');
   
    let teamCharacter = teamCharacters[0];
    let oppTeamCharacter = oppTeamCharacters[0];

    let gameHandlerObject = new GameHandlerObj(teamCharacter, oppTeamCharacter, forceUpdate);

    await gameHandlerObject.attack();
  }
  // setTimeout(gameLoop, 1000); 
  gameLoop();
</script>

<div class="container">
  <div class="team-container player-team">
    {#each $roundStateStore.playerTeam.characters as character}
      <Character character={character}/>
    {/each}
  </div>
  <div class="team-container">
    {#each $roundStateStore.opposingTeam.characters as character}
      <Character character={character}/>
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