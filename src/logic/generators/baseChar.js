// BASE CHARACTER CLASS FOR PLAYER AND ENEMY
class Character {
  constructor(initialState, name) {
    if (name) this.name = name
    Object.assign(this, initialState)
  }
}

// BASE PLAYER CLASS, CHILD OF CHAR CLASS
import initialPlayerState from '../player/initialState'

class Player extends Character {
  constructor(name) {
    super(initialPlayerState, name)
  }

  nextLevel() {
    return this.lvl * 100
  }
}

// BASE ENEMY CLASS, CHILD OF CHAR CLASS

class Enemy extends Character {
  constructor(initialEnemyState) {
    super(initialEnemyState)
  }
}

export { Player, Enemy }