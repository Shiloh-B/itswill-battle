<script>
  import Team from "./team.svelte";
  import TeamSelector from './team-selector.svelte';
  import store from '../store';
  import socket from '../socket';
  import OpposingTeam from "./opposing_team.svelte";

  const battleHandler = () => {
    socket.emit('lobby', {
      uid: $store.uid,
      numOfRounds: $store.numOfRounds,
      teamData: $store.teamData
    });
  }
</script>
<div class='game-container'>
  <TeamSelector/>
  {#if $store.matchmakingStatus === ''}
  <div>
    <h3 class='battle-button' on:click={battleHandler}>Battle</h3>
  </div>
  {:else}
    <h3>{$store.matchmakingStatus === 'q' ? 'Waiting for a match...' : 'Found a match!'}</h3>
  {/if}
  {#if $store.matchmakingStatus === 'f' && $store.oppTeamData !== null}
    <OpposingTeam/>
  {/if}
  
</div>

<style>
  .game-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .battle-button {
    text-align: center;
    outline: 2px solid black;
    border-radius: 5px;
    padding: 5px;
    cursor: pointer;
  }
</style>
