<script>
  import store from '../store';
  export let character;

  const characterSelectionHandler = () => {
    const selected = $store.teamData.characters.findIndex((c) => { return c.type === character.type });
    if(selected !== -1) {
      $store.teamData.characters.splice(selected, 1);
    } else {
      $store.teamData.characters.push(character);
    }
  }
</script>

<div class='character {$store.teamData.characters.find((c) => { return c.type === character.type }) && 'selected'}'
  on:click={characterSelectionHandler}
>
  <img src='/images/{character.image}' alt="">
</div>

<style>
  .character {
    width: 200px;
    height: 200px;
    cursor: pointer;
  }

  .selected {
    border: 2px solid blue;
  }

  img {
    width: 100%;
  }
</style>