import { writable } from "svelte/store"

export default function (teamCharacters, opposingTeamCharacters) {
  const roundState = {
    playerTeam: {
      characters: [{
        type: "itswill7",
        image: 'itswill7.png',
        power: 1,
        health: 2
      },{
        type: "itswill7",
        image: 'itswill7.png',
        power: 1,
        health: 2
      },{
        type: "itswillHmm",
        image: 'itswillHmm.png',
        power: 1,
        health: 2
      },{
        type: "itswill7",
        image: 'itswill7.png',
        power: 1,
        health: 2
      },{
        type: "itswill7",
        image: 'itswill7.png',
        power: 1,
        health: 2
      }]
    },
    opposingTeam: {
      characters: [{
        type: "itswill7",
        image: 'itswill7.png',
        power: 1,
        health: 2
      },{
        type: "itswill7",
        image: 'itswill7.png',
        power: 1,
        health: 2
      },{
        type: "itswill7",
        image: 'itswill7.png',
        power: 1,
        health: 2
      },{
        type: "itswill7",
        image: 'itswill7.png',
        power: 1,
        health: 2
      },{
        type: "itswill7",
        image: 'itswill7.png',
        power: 1,
        health: 2
      }]
    }
  }

  return writable(roundState);
}