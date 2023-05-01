<script>
  import Team from "./team.svelte";
  import TeamSelector from './team-selector.svelte';
  import store from '../store';
  import socket from '../socket';

</script>
<div class='game-container'>
  {#if $store.matchmakingStatus === ''}
    <TeamSelector />
    <div>
      <h3 class='battle-button'>Battle</h3>
    </div>
  {:else}
  <div class="team-container">
    <Team team={$store.team1}/>
    <Team team={$store.team2} mirrored={true}/>
  </div>
  {/if}
</div>

<style>
  .game-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .team-container {
    display: flex;
    justify-content: space-between;
    border: 2px dashed black;
    padding: 30px 10px;
    width: 90%;
  }

  .battle-button {
    text-align: center;
    outline: 2px solid black;
    border-radius: 5px;
    padding: 5px;
    cursor: pointer;
  }
</style>
