<script>
  export let character;
</script>

<div class="character">
  <img src='/images/{character.image}' alt="">
</div>

<style>
  .character {
    width: 70px;
    height: 70px;
    border: 1px solid black;
  }

  img {
    width: 100%;
  }
</style>