<script>
  import socket from "../socket";
  let id = Math.random();

  let character1;
  let character2;
  let character3;
  let teamName;
  console.log('my id is: ' + id);
  socket.on(id, (args) => {
    console.log(args);
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
