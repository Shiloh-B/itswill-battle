<script>
  import store from '../store';
  import Character from './character.svelte';
</script>

<div class='team-selector-container'>
  <h3>Choose 2 hero's!</h3>
  <div class='team-container'>
    {#each $store.baseCharacters as character}
      <Character {character} />
    {/each}
  </div>
</div>

<style>
  .team-selector-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .team-container {
    display: flex;
    width: 50%;
    justify-content: space-around;
  }
</style>