import { Enemy } from './characters'

const generateNewEnemy = (playerLvl) => {
  const initialState = new EnemyState(playerLvl)
  return new Enemy(initialState)
}


class EnemyState {
  constructor(playerLvl) {
    this.desc = generateEnemyDescription()
    this.lvl = generateEnemyLevel(playerLvl)
    this.hp = generateEnemyHp(this.lvl)
  }
}


import { potentialEnemyDescriptions } from './enemies'

const generateEnemyDescription = () => {
  const idx = rollDice(potentialEnemyDescriptions.length)
  return potentialEnemyDescriptions[idx]
}


import { enemyLvlChances } from './enemies'

const generateEnemyLevel = (playerLvl) => {
  const { isLower, isSame } = enemyLvlChances
  const diceRoll = rollDice(100)
  if (diceRoll <= isLower) return playerLvl > 1 ? playerLvl - 1 : playerLvl
  if (diceRoll > isLower && diceRoll <= isLower + isSame) return playerLvl
  if (diceRoll > isLower + isSame) return playerLvl + 1
}


import { enemyBaseHealth } from './enemies'

const generateEnemyHp = (lvl) => {
  let incrementor = lvl * 5
  incrementor = Math.round(incrementor / 2.5)
  return enemyBaseHealth + incrementor
}


const rollDice = (max) => Math.floor(Math.random() * Math.floor(max)) 


export { generateNewEnemy }