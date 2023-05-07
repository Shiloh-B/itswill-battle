import store from './gameState';

export default class {
  constructor() {
    this.storeVal = null;
    store.subscribe(value => {
      this.storeVal = value;
    });
  }

  playRound() {
    // for now, only focus on having characters attack each other, no pre/post-attach moves

    // store each team's players in memory to go off of (do not mutate the store state)
    const playerTeamCharacters = this.storeVal.teamData.characters;
    const opposingTeamCharacters = this.storeVal.oppTeamData.teamData.characters;

    const playerTeamActiveCharacter = playerTeamActiveCharacters[0];
    const opposingTeamActiveCharacter = opposingTeamCharacters[0];
  }
}