<script>
  import store from '../store';
  export let character;
</script>

<div class="active-character-card">
  <img src="/images/{character.image}" alt="{character.type}">
  <p class="active-character-card__name">{character.type}</p>
  <div class="character-stats">
    <span class="active-character-card__health">{character.health}</span>
    <span class="active-character-card__power">{character.power}</span>
  </div>
</div>

<style>
  .character {
    width: 200px;
    height: 200px;
    cursor: pointer;
  }

  .selected {
    border: 5px solid red;
  }

  img {
    width: 100%;
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
    height: 120px;
    min-width:100px;
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