// BASE CHARACTER CLASS FOR PLAYER AND ENEMY
class Character {
  constructor(name, initialState) {
    this.name = name
    Object.assign(this, initialState)
  }
}

// BASE PLAYER CLASS, CHILD OF CHAR CLASS
import initialPlayerState from './logic'

class Player extends Character {
  constructor(name) {
    super(name, initialPlayerState)
  }

  nextLevel() {
    return this.lvl * 100
  }
}

// BASE ENEMY CLASS, CHILD OF CHAR CLASS
class Enemy extends Character {
  constructor() {
    super(initialEnemyState)
  }
}

export { Player, Enemy }