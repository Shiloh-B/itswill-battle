<script>
  import Team from "./team.svelte";
  import store from '../store';
  console.log($store);
</script>

<div class="team-holder">
  <Team team={$store.team1}/>
  <Team team={$store.team2} mirrored={true}/>
</div>

<style>
  .team-holder {
    display: flex;
    justify-content: space-between;
    border: 2px dashed black;
    padding: 30px 0;
  }
</style>
