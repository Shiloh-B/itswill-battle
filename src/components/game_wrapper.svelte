<script>
	import CharacterSelector from './character-selector.svelte';
	import GameBoard from './game_board.svelte';
	import Nav from './nav.svelte';
	import store from '../gameState';
	import socket from '../socket';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	// found a game/q'd
	socket.on('gameData', (args) => {
		const oppTeam = args.find((d) => { return d.uid !== $store.uid });
		if(oppTeam) {
			$store.oppTeamData = oppTeam;
			$store.matchmakingStatus = 'f';
		} else {
			$store.matchmakingStatus = 'q'
		}
		console.log(args);
	});

</script>

<div class="game-wrapper">
	<Nav/>
	<GameBoard/>
	<!-- <CharacterSelector/> -->
</div>

<style>
</style>


