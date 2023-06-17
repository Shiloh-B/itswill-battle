const ANIMATION_DURATION = 1000;

export default class {
  constructor(charObj) {
    this.data = charObj;
  }

  getProperty(key) {
    return this.data[key];
  }

  setProperty(key, value) {
    this.data[key] = value;
  }

  attack(enemy) {
    return new Promise((resolve, reject) => {
      // start animation
      console.log('attacking enemy: ' + enemy.data.type);
      setTimeout(() => {
        
        enemy.data.health = enemy.data.health - this.data.power;
        console.log("Enemy health is now: " + enemy.data.health);

        resolve();
      }, ANIMATION_DURATION);
    })
  }
}