<script>
  import socket from "../socket";
  import { nanoid } from 'nanoid';
  import store from '../gameState';
  import { MatchmakingStatus } from "../enums";

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
      $store.matchmakingStatus = MatchmakingStatus.QUEUED
    } else {
      $store.oppTeamData = foundMatch;
      $store.matchmakingStatus = MatchmakingStatus.MATCH_FOUND
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

{#if $store.matchmakingStatus === MatchmakingStatus.NOT_QUEUED}
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
{#if $store.matchmakingStatus !== MatchmakingStatus.NOT_QUEUED}
<div>{character1}</div>
<div>{character2}</div>
<div>{character3}</div>
{/if}
{#if $store.matchmakingStatus === MatchmakingStatus.MATCH_FOUND}
  <br />
  <div>opp team</div>
  {#each $store.oppTeamData.teamData.characters as oppChar}
      <div>{oppChar.name}</div>
  {/each}
{/if}
