import { writable } from "svelte/store";
import { nanoid } from 'nanoid';
import { MatchmakingStatus } from "./enums";

let gameState = {
  uid: nanoid(6),
  matchmakingStatus: MatchmakingStatus.NOT_QUEUED,
  oppTeamData: null,
  itemSelected: null,
  numOfRounds: 0,
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
    characters: [null, null, null, null, null]
  },
  
};

export default writable(gameState);