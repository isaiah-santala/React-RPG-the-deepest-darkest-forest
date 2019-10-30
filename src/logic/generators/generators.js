import { Player, Enemy } from './baseChar'
import { EnemyState } from './newEnemy'
import { initialPlayerState } from '../player/initialState'
import { allItems } from '../items/all'
const { potion } = allItems

const generatePlayer = (name, saying) => {
  const player = new Player(initialPlayerState, name, saying)
  player.loot.addItem(potion)
  return player
}

const generateNewEnemy = (playerLvl) => {
  const initialState = new EnemyState(playerLvl)
  return new Enemy(initialState)
}

export { generatePlayer, generateNewEnemy }