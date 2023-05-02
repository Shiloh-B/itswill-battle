<script>
  import store from "../store";
  import Character from "./character.svelte";
</script>

<h3>Team {$store.oppTeamData.teamData.name}</h3>
<div class="active-characters-container">
  <ul class="active-characters">
    {#each $store.oppTeamData.teamData.characters as character, index}
      {#if character !== null}
      <li>
        <Character {character} />
      </li>
      {:else}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <li class="active-character-card">
          <div class:item-selected={$store.itemSelected} class="empty-character-card-contents"></div>
        </li>
      {/if}
    {/each}
  </ul>
</div>

<style>
  .active-characters {
    background: #fff;
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    padding: 0;
  }

  .active-character-card {
    font-weight: bold;
    padding: 4px;
  }

  .active-character-card__name {
    margin: 4px 0;
  }

  .empty-character-card-contents {
    background: black;
    height: 130px;
    width:130px;
  }

  .empty-character-card-contents.item-selected:hover {
    background: lightskyblue;
  }

  .character-stats {
    display: flex;
    justify-content: space-between;
  }
  
  .active-character-card__health,
  .active-character-card__power {
    padding: 3px 6px;
    border-radius: 4px;
  }

  .active-character-card__health {
    background: red;
  }

  .active-character-card__power {
    background: grey;
  }
</style>