import { writable } from "svelte/store";
import { nanoid } from 'nanoid';

let gameState = {
  uid: nanoid(6),
  matchmakingStatus: '', // q === queued, f === found match, '' === idle
  oppTeamData: null,
  itemSelected: null,
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
    name: 'Dreamy bull',
    characters: [{
      type: "itswillHuh",
      image: 'itswillHUH.png',
      power: 1,
      health: 2
    }, null, null, null, null]
  }
};

let store = writable(gameState);

export default store;