<script>
  import Team from "./team.svelte";
</script>

<div class="team-holder">
  <Team/>
  <Team/>
</div>

<style>
  .team-holder {
    display: flex;
    justify-content: space-between;
    border: 2px dashed black;
    padding: 30px 0;
  }
</style>
