const ANIMATION_DURATION = 1000;

export default class {
  constructor(name, health, power) {
    Object.assign(this, {name, health, power});
  }

  attack(enemy) {
    return new Promise((resolve, reject) => {
      // start animation
      console.log('attacking enemy: ' + enemy.name);
      setTimeout(() => {
        
        enemy.health -= this.power;
        console.log("Enemy health is now: " + enemy.health);

        resolve();
      }, ANIMATION_DURATION);
    })
  }
}