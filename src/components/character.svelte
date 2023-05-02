<script>
  import store from '../store';
  export let character;
  let selected;
  let isSelected = false;
  const characterSelectionHandler = () => {
    selected = $store.teamData.characters.findIndex((c) => { return c.type === character.type });
    isSelected = selected !== -1;
    if(isSelected) {
      
      $store.teamData.characters.splice(selected, 1);
    } else {
      $store.teamData.characters.push(character);
    }
    console.log($store.teamData);
  }
</script>

<div class={isSelected ? 'character selected' : 'character'}
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
    border: 5px solid red;
  }

  img {
    width: 100%;
  }
</style>