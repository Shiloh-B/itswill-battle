const ANIMATION_DURATION = 1000;

export default class {
  constructor(charObj, forceUpdate) {
    this.data = charObj;
    this.forceUpdate = forceUpdate;
  }

  getProperty(key) {
    return this.data[key];
  }

  setProperty(key, value) {
    this.data[key] = value;
  }

  attack(enemy) {
    enemy.data.health = enemy.data.health - this.data.power;
  }
}