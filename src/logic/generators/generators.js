import { Enemy } from './baseChar'
import { EnemyState } from './newEnemy'

const generateNewEnemy = (playerLvl) => {
  const initialState = new EnemyState(playerLvl)
  return new Enemy(initialState)
}

export { generateNewEnemy }