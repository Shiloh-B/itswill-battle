<script>
	import CharacterSelector from './character-selector.svelte';
	import GameBoard from './game_board.svelte';
	import Nav from './nav.svelte';
	import store from '../gameState';
	import socket from '../socket';
	import { createEventDispatcher } from 'svelte';
	import game_runner from '../game_runner';
	import { MatchmakingStatus } from '../enums';

	const gr = new game_runner();

	const dispatch = createEventDispatcher();

	// found a game/q'd
	socket.on('gameData', (args) => {
		const oppTeam = args.find((d) => { return d.uid !== $store.uid });
		if(oppTeam) {
			$store.oppTeamData = oppTeam;
			$store.matchmakingStatus = MatchmakingStatus.MATCH_FOUND;
		} else {
			$store.matchmakingStatus = MatchmakingStatus.QUEUED
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


