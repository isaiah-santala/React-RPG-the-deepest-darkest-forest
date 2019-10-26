import enemyLvlChances from './logic'

const generateEnemyLevel = (playerLvl) => {
  const { isLower, isSame } = enemyLvlChances
  const diceRoll = Math.floor(Math.random() * Math.floor(100))
  if (diceRoll <= isLower) return playerLvl > 1 ? playerLvl - 1 : playerLvl
  if (diceRoll > isLower && diceRoll <= isLower + isSame) return playerLvl
  if (diceRoll > isLower + isSame) return playerLvl + 1
}

export { generateEnemyLevel }