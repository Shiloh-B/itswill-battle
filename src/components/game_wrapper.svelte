<script>
	import CharacterSelector from './character-selector.svelte';
	import GameBoard from './game_board.svelte';
	import Nav from './nav.svelte';
	import store from '../store';
	import socket from '../socket';

	// found a game/q'd
	socket.on('lobby', (args) => {
		if(args.find((d) => { return d.uid !== $store.uid })) {
			$store.oppTeamData = args.teamData;
			$store.matchmakingStatus.isMatched = 'f';
		} else {
			$store.matchmakingStatus.isMatched = 'q'
		}
		console.log(args);
	});

</script>

<div class="game-wrapper">
	<Nav/>
	<GameBoard/>
	
	{#if $store.matchmakingStatus !== ''}
		<div>{$store.matchmakingStatus}</div>
		<br />
	{/if}
	<!-- <CharacterSelector/> -->
</div>

<style>
</style>


