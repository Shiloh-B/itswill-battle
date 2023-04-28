import { writable } from "svelte/store";

let gameState = {
  team1: {
    name: 'Team Justin',
    characters: [
      {
        type: "itsWill7",
        image: 'itsWill7.png',
        power: 1,
        health: 2
      },
      {
        type: "itsWill7",
        image: 'itsWill7.png',
        power: 1,
        health: 2
      },
      {
        type: "itsWill7",
        image: 'itsWill7.png',
        power: 1,
        health: 2
      },
    ]
  },
  team2: {
    name: 'Team Brett',
    characters: [
      {
        type: "itsWill7",
        image: 'itsWill7.png',
        power: 1,
        health: 2
      },
      {
        type: "itsWill7",
        image: 'itsWill7.png',
        power: 1,
        health: 2
      },
      {
        type: "itsWill7",
        image: 'itsWill7.png',
        power: 1,
        health: 2
      },
    ]
  }
};

let store = writable(gameState);

export default store;