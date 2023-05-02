<script>
  import store from '../../store';
  import { goto } from '$app/navigation';
  let teamName = '';
  const nameSubmitHandler = () => {
    $store.teamName = teamName;
    if(teamName !== '') {
      window.location.assign('/home');
    }
  }
</script>

<div class='welcome-page'>
  <h1>ItsWill Battle</h1>
  <h3>Pick a team name</h3>
  <form class='name-form' on:submit={nameSubmitHandler}>
    <input class='name-picker' bind:value={teamName} />
    <button type='submit'>Let's Go!</button>
  </form>
</div>

<style>
	:global(body) {
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		background: url('https://teamwoodgames.com/_app/immutable/assets/bg-field-sky.40b4b356.png');
		min-height: 100vh;
		background-size: cover;
		overflow: hidden;
	}

  .welcome-page {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .name-form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .name-picker {
    background: none;
    outline: none;
    text-decoration: none;
    border: none;
    border-bottom: 3px solid black;
    font-size: 2em;
    padding: 3px;
    text-align: center;
    margin-bottom: .75em;
  }

  button {
    background: none;
    border: 2px solid black;
    border-radius: 3px;
    font-size: 1.5em;
    cursor: pointer;
    width: 40%;
  }
</style>