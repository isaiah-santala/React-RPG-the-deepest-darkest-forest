import { combineReducers } from "redux"

import playerLoot from './player/loot'
import playerStats from './player/stats'
import playerDesc from './player/desc'

import enemyLoot from './enemy/loot'
import enemyStats from './enemy/stats'
import enemyDesc from './enemy/desc'

export default combineReducers({ 
  playerLoot, 
  playerStats, 
  playerDesc,
  enemyLoot,
  enemyStats,
  enemyDesc
})