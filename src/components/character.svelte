<script>
  import store from '../store';
  export let character;
  export let selectable = false;

  $:selected = selectable && $store.itemSelected && $store.itemSelected.type == character.type;

  function selectCharacter () {
    if (selectable) {
      $store.itemSelected = character;
      selected = true;
    }
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="character-card" class:selected-character={selected} class:selectable-character={selectable} on:click={selectCharacter}>
  <img src="/images/{character.image}" alt="{character.type}">
  <p class="character-card__name">{character.type}</p>
  <div class="character-stats">
    <span class="character-card__health">{character.health}</span>
    <span class="character-card__power">{character.power}</span>
  </div>
</div>

<style>
  .character-card {
    font-weight: bold;
    padding: 4px;
  }

  .selectable-character {
    cursor: pointer;
  }

  .selectable-character:not(.selected-character):hover {
    border:5px dashed rgba(0, 223, 0, 0.4);
    margin: -5px;
    border-radius: 2px;
  }

  .character-card__name {
    margin: 4px 0;
  }

  .character-stats {
    display: flex;
    justify-content: space-between;
  }
  
  .character-card__health,
  .character-card__power {
    padding: 3px 6px;
    border-radius: 4px;
  }

  .character-card__health {
    background: red;
  }

  .character-card__power {
    background: grey;
  }

  img {
    width:130px;
    height:130px;
  }

  .selected-character {
    border: 5px dashed rgb(0, 223, 0);
    border-radius: 2px;
    margin: -5px; /* offset the extra spacing created by the border */
  }

</style>