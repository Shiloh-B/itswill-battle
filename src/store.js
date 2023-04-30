import { writable } from "svelte/store";

let gameState = {
  team1: {
    name: 'Team Justin',
    characters: [
      {
        type: "itswill7",
        image: 'itswill7.png',
        power: 1,
        health: 2
      },
      {
        type: "itswill7",
        image: 'itswillHmm.png',
        power: 1,
        health: 2
      },
      {
        type: "itswill7",
        image: 'itswillHUH.png',
        power: 1,
        health: 2
      },
    ]
  },
  team2: {
    name: 'Team Brett',
    characters: [
      {
        type: "itswill7",
        image: 'itswill7.png',
        power: 1,
        health: 2
      },
      {
        type: "itswill7",
        image: 'itswillHmm.png',
        power: 1,
        health: 2
      },
      {
        type: "itswill7",
        image: 'itswillHUH.png',
        power: 1,
        health: 2
      },
    ]
  }
};

let store = writable(gameState);

export default store;