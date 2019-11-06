import { rollDice } from '../helpers'

class EnemyState {
  constructor(playerLvl) {
    this.desc = generateEnemyDescription()
    this.loot = generateEnemyLoot()
    
    this.stats = {}
    this.stats.lvl = generateEnemyLevel(playerLvl)
    this.stats.hp = generateEnemyHp(this.stats.lvl)
  }
}


import { potentialEnemyDescriptions } from '../enemies/enemies'

const generateEnemyDescription = () => {
  const idx = rollDice(potentialEnemyDescriptions.length)
  return potentialEnemyDescriptions[idx]
}


import { enemyLvlChances } from '../enemies/enemies'

const generateEnemyLevel = (playerLvl) => {
  const { isLower, isSame } = enemyLvlChances
  const diceRoll = rollDice(100)
  if (diceRoll <= isLower) return playerLvl > 1 ? playerLvl - 1 : playerLvl
  if (diceRoll > isLower && diceRoll <= isLower + isSame) return playerLvl
  if (diceRoll > isLower + isSame) return playerLvl + 1
}


import { enemyBaseHealth } from '../enemies/enemies'

const generateEnemyHp = (lvl) => {
  let incrementor = lvl * 5
  incrementor = Math.round(incrementor / 2.5)
  return enemyBaseHealth + incrementor
}


import { allItems } from '../items/all'

const generateEnemyLoot = () => {
  const items = Object.keys(allItems)
  const idx = rollDice(items.length)
  const item = allItems[items[idx]]
  return {
    [item.name]: item
  }
}


export { EnemyState } 