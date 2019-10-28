import { Player, Enemy } from './baseChar'
import { EnemyState } from './newEnemy'
import { initialPlayerState } from '../player/initialState'

const generatePlayer = (name) => new Player(initialPlayerState, name)

const generateNewEnemy = (playerLvl) => {
  const initialState = new EnemyState(playerLvl)
  return new Enemy(initialState)
}

export { generatePlayer, generateNewEnemy }