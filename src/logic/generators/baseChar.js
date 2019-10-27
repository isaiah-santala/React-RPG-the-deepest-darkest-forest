// BASE CHARACTER CLASS FOR PLAYER AND ENEMY

class Character {
  constructor(initialState) {
    Object.assign(this, initialState)
  }
}

// BASE PLAYER CLASS, CHILD OF CHAR CLASS

import initialPlayerState from '../player/initialState'

class Player extends Character {
  constructor(initialPlayerState, name) {
    super(initialPlayerState)
    this.name = name
  }

  nextLevel() {
    return this.lvl * 100
  }
}

// BASE ENEMY CLASS, CHILD OF CHAR CLASS

class Enemy extends Character {
  constructor(state) {
    super(state)
  }
}

export { Player, Enemy }