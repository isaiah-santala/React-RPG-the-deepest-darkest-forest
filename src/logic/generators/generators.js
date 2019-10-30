import { Player, Enemy } from './baseChar'
import { EnemyState } from './newEnemy'
import { initialPlayerState } from '../player/initialState'
import { allItems } from '../items/all'
const { potion } = allItems

const nullPlayer = { name: null, saying: null, img: { type: null, name: null } }

const generatePlayer = (playerInfo = nullPlayer) => {
  const player = new Player(initialPlayerState, playerInfo)
  player.loot.addItem(potion)
  return player
}

const generateNewEnemy = (playerLvl) => {
  const initialState = new EnemyState(playerLvl)
  return new Enemy(initialState)
}

export { generatePlayer, generateNewEnemy }