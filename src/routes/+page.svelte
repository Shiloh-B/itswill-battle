<script>
	import GameWrapper from "../components/game_wrapper.svelte";
</script>

<h1>ItsWill Battle</h1>
<GameWrapper/>

<style>
	:global(body) {
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		background: url('https://teamwoodgames.com/_app/immutable/assets/bg-field-sky.40b4b356.png');
		min-height: 100vh;
		background-size: cover;
		overflow: hidden;
	}

	h1 {
		font-size: 1.5em;
		text-align: center;
		margin-top: 20px;
	}
</style>