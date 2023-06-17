<script>
  import store from '../gameState';
  export let character;
  export let selectable = false;
  export let attacking = false;

  $:selected = selectable && $store.itemSelected && $store.itemSelected.type == character.type;

  function selectCharacter () {
    if (selectable) {
      if (!selected) {
        $store.itemSelected = character;
        selected = true;
      } else {
        selected = false;
        $store.itemSelected = null;
      } 
    }
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="character-card" class:attacking={attacking} class:selected-character={selected} class:selectable-character={selectable} on:click={selectCharacter}>
  <div class="character-image" style="background-image:url(/images/{character?.image || 'nothing_here.png'})"></div>
  <p class="character-card__name">{character?.type}</p>
  <div class="character-stats">
    <span class="character-card__health">{character.health || 0}</span>
    <span class="character-card__power">{character?.power || 0}</span>
  </div>
</div>

<style>
  .character-card {
    font-weight: bold;
    padding: 4px;
    width: 120px;
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
    text-align: center;
  }

  .character-image {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 100px;
    width: 100%;
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

  .selected-character {
    border: 5px dashed rgb(0, 223, 0);
    border-radius: 2px;
    margin: -5px; /* offset the extra spacing created by the border */
  }

  .attacking {
    animation: attack 1s ease;
  }

  @keyframes attack {
    from {
      transform: translateX(0);
    } to {
      transform: translateX(200px); 
    }
  }

</style>