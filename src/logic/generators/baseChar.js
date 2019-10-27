// BASE CHARACTER CLASS FOR PLAYER AND ENEMY

class Character {
  constructor(initialState) {
    Object.assign(this, initialState)
  }

  updateHealth(type, amount) {
    switch(type) {
      case 'HEAL' :
        return this.hp = (this.hp + amount) > this.maxHp ? 
          this.maxHp : this.hp + amount
      case 'DAMAGE' :
        return this.hp = (this.hp - amount) < 0 ?
          0 : this.hp - amount
    }
  }
}

// BASE PLAYER CLASS, CHILD OF CHAR CLASS

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