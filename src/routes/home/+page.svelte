<script>
	import GameWrapper from "../../components/game_wrapper.svelte";
	import store from '../../gameState';
</script>

<h1>ItsWill Battle</h1>
<h4>Team {$store.teamData.name}</h4>
<GameWrapper/>

<style>
	h1, h4 {
		font-size: 1.5em;
		text-align: center;
		margin-top: 20px;
	}

	h4 {
		font-size: 1em;
	}
</style>