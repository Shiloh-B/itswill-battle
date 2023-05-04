<script>
  import socket from "../socket";
  import { nanoid } from 'nanoid';
  import store from '../gameState';

  let id = nanoid(10);

  let character1;
  let character2;
  let character3;
  let teamName;

  console.log('my id is: ' + id);
  socket.on('gameData', (args) => {
    console.log(args);

    const foundMatch = args.find((d) => { return d.uid !== id });

    if(!foundMatch) {
      $store.matchmakingStatus = 'Waiting for a match...'
    } else {
      $store.oppTeamData = foundMatch;
      $store.matchmakingStatus = 'Found a match!'
    }
  });

  function emit() {
    socket.emit("lobby", {
      uid: id,
      numOfRounds: 1,
      teamData: {
        teamName: teamName,
        characters: [
          {
            name: character1,
          },
          {
            name: character2,
          },
          {
            name: character3,
          },
        ],
      },
    });
  }
</script>

{#if $store.matchmakingStatus === ''}
<select name="" id="" bind:value={character1}>
  <option value="itswill7">itswill7</option>
  <option value="itswillHUH">itswillHUH</option>
  <option value="itswillHmm">itswillHmm</option>
</select>
<select name="" id="" bind:value={character2}>
  <option value="itswill7">itswill7</option>
  <option value="itswillHUH">itswillHUH</option>
  <option value="itswillHmm">itswillHmm</option>
</select>
<select name="" id="" bind:value={character3}>
  <option value="itswill7">itswill7</option>
  <option value="itswillHUH">itswillHUH</option>
  <option value="itswillHmm">itswillHmm</option>
</select>
<input type="text" bind:value={teamName} placeholder="team name" />
<button on:click={emit}>Send 'er?</button>
{/if}
{#if $store.matchmakingStatus !== ''}
<div>{character1}</div>
<div>{character2}</div>
<div>{character3}</div>
{/if}
{#if $store.matchmakingStatus === 'Found a match!'}
  <br />
  <div>opp team</div>
  {#each $store.oppTeamData.teamData.characters as oppChar}
      <div>{oppChar.name}</div>
  {/each}
{/if}
