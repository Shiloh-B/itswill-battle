import { writable } from "svelte/store"

export default function (teamCharacters, opposingTeamCharacters) {
  const roundState = {
    playerTeam: {
      characters: teamCharacters
    },
    opposingTeam: {
      characters: teamCharacters
    }
  }

  return writable(roundState);
}