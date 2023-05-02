<script>
  import store from '../store';
  export let character;
  export let selectable;

  function selectCharacter () {
    if(selectable) {
      $store.itemSelected = character;
    }
  }
</script>

<div class="character-card" on:click={selectCharacter}>
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
    width:100%;
    height:130px;
  }

</style>