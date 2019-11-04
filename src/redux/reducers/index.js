import { combineReducers } from "redux"
import loot from './player/loot'
import stats from './player/stats'

export default combineReducers({ loot, stats })