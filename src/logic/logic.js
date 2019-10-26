// INITIAL STATE OF PLAYER'S ATTRIBUTES
const initialPlayerState = {
  hp: 10,
  lvl: 1,
  loot: {},
  ap = 3,
  triumphs = 0,
}

// CHANCES OF ENEMY LEVEL RELATED TO PLAYER LEVEL UPON GENERATION
const enemyLvlChances = {
  isLower: 3,
  isSame: 75,
  isHigher: 22
}



export { initialPlayerState, enemyLvlChances }