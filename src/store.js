import { writable } from "svelte/store";

let gameState = {
  matchmakingStatus: '',
  oppTeamData: null,
  baseCharacters: [
    {
      type: "itswill7",
      image: 'itswill7.png',
      power: 1,
      health: 2
    },
    {
      type: "itswillHmm",
      image: 'itswillHmm.png',
      power: 1,
      health: 2
    },
    {
      type: "itswillHuh",
      image: 'itswillHUH.png',
      power: 1,
      health: 2
    }
  ],
  teamData: {
    name: '',
    characters: []
  }
};

let store = writable(gameState);

export default store;