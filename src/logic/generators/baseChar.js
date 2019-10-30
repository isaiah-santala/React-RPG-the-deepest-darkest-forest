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

  maxHit() {
    return (this.lvl * 2) + 10
  }

  baseHit() {
    return this.maxHit() / 2
  }

  maxHp() {
    return (Math.ceil(this.desc.lvl / 2) * 10) + this.dec.lvl - 1
  }

  rollAttack() {
    const roll = rollDice(100)
    if (roll <= 10) return 0
    if (roll > 10 && roll <= 30) return Math.floor(this.baseHit() - (this.baseHit() / 2) + rollDice(this.baseHit() / 4))
    if (roll > 30 && roll <= 70) return Math.floor(this.baseHit() + (rollDice(this.baseHit() / 4)))
    if (roll > 70 && roll <= 90) return Math.floor(this.baseHit() + (this.baseHit() / 2) + (rollDice(this.baseHit() / 4)))
    if (roll > 90) return Math.floor(this.maxHit() + (rollDice(this.baseHit() / 4)))
  }
}

// BASE PLAYER CLASS, CHILD OF CHARACTER CLASS
import { Loot } from './loot'
import { rollDice } from '../helpers'

class Player extends Character {
  constructor(state, name, saying) {
    super(state)
    this.desc = {
      name, 
      saying, 
      img: {
        type: 'player',
        imgName: 'male1'
      } 
    }
    this.loot = new Loot()
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