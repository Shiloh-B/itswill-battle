<script>
  import store from '../store';
</script>

<nav>
  <h2>{$store.team1.name}</h2>
  <h2>{$store.team2.name}</h2>
</nav>

<style>
  nav {
    display: flex;
    justify-content: space-between;
  }
</style>