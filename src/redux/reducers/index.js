import { combineReducers } from "redux"
import playerLoot from './player/loot'
import playerStats from './player/stats'
import playerDesc from './player/desc'

export default combineReducers({ 
  playerLoot, 
  playerStats, 
  playerDesc 
})