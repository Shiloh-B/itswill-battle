<script>
  import Team from "./team.svelte";
  import store from '../store';
</script>

<div class="team-container">
  <Team team={$store.team1}/>
  <Team team={$store.team2} mirrored={true}/>
</div>

<style>
  .team-container {
    display: flex;
    justify-content: space-between;
    border: 2px dashed black;
    padding: 30px 10px;
  }
</style>
