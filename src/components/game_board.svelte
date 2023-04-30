<script>
  import Team from "./team.svelte";
  import store from '../store';
  import socket from '../socket';

  const battleHandler = () => {
    console.log($store.team1);
    socket.emit('lobby', $store.team1.name);
  }

  socket.on('battle', (args) => {
    console.log(args);
  });
  socket.on('lobby', (args) => {
    console.log(args);
  })

</script>
<div class='game-container'>
  <div class="team-container">
    <Team team={$store.team1}/>
    <Team team={$store.team2} mirrored={true}/>
  </div>
  <div>
    <h3 class='battle-button' on:click={battleHandler}>Battle</h3>
  </div>
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
