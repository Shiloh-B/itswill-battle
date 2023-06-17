const ANIMATION_DURATION = 1000;

export default class {
  constructor(playerCharacter, enemyCharacter, forceUpdate) {
    this.playerCharacter = playerCharacter
    this.enemyCharacter = enemyCharacter
    this.forceUpdate = forceUpdate;
  }

  attack() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.playerCharacter.attack(this.enemyCharacter);
        this.enemyCharacter.attack(this.playerCharacter);
        this.forceUpdate();
        resolve();
      }, ANIMATION_DURATION);
    })
  }
}