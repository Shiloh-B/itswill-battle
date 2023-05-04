<script>
  import store from '../gameState';
  import Character from './character.svelte';

  function putCharacterInSlot (e) {
    if(!$store.itemSelected) return false;
    $store.teamData.characters[e.currentTarget.dataset.characterIndex] = $store.itemSelected;
    $store.itemSelected = null;
  }
</script>

<div class='team-selector-container'>
  <div class="active-characters-container">
    <ul class="active-characters">
      {#each $store.teamData.characters as character, index}
        {#if character !== null}
        <li>
          <Character {character} />
        </li>
        {:else}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <li class="active-character-card" data-character-index={index} on:click={putCharacterInSlot}>
            <div class:item-selected={$store.itemSelected} class="empty-character-card-contents"></div>
          </li>
        {/if}
      {/each}
    </ul>
  </div>

  {#if $store.matchmakingStatus === ''}
  <h3>Choose your will's!</h3>
  <div class='team-container'>
    {#each $store.baseCharacters as character}
      <Character {character} selectable=true />
    {/each}
  </div>
  {/if}
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