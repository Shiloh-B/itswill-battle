<script>
	import CharacterSelector from './character-selector.svelte';
	import GameBoard from './game_board.svelte';
	import Nav from './nav.svelte';
	import store from '../store';
</script>

<div class="game-wrapper">
	<Nav/>
	<!-- <GameBoard/> -->
	
	{#if $store.matchmakingStatus !== ''}
		<div>{$store.matchmakingStatus}</div>
		<br />
	{/if}
	<CharacterSelector/>
</div>

<style>
</style>


