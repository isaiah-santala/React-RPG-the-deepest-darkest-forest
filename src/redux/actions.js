import { 
  TAKE_DMG, 
  ENEMY_TAKE_DMG, 
  GAIN_XP, 
  SET_PLAYER, 
  SET_ENEMY,
  ADD_LOOT, 
  ENEMY_ADD_LOOT,
  SET_ENEMY_STATS,
  GAIN_AP,
  GAIN_LOOT
} from "./actionTypes";

export const takeDmg = dmg => ({
  type: TAKE_DMG,
  payload: {
    dmg
  }
})

export const enemyTakeDmg = dmg => ({
  type: ENEMY_TAKE_DMG,
  payload: {
    dmg
  }
})

export const gainXp = earnedXp => ({
  type: GAIN_XP,
  payload: {
    earnedXp
  }
})

export const gainAp = earnedAp => ({
  type: GAIN_AP,
  payload: {
    earnedAp
  }
})

export const setPlayer = desc => ({
  type: SET_PLAYER,
  payload: {
    desc
  }
})

export const setEnemy = desc => ({
  type: SET_ENEMY,
  payload: {
    desc
  }
})

export const addLoot = loot => ({
  type: ADD_LOOT,
  payload: {
    loot
  }
})

export const enemyAddLoot = loot => ({
  type: ENEMY_ADD_LOOT,
  payload: {
    loot
  }
})

export const setEnemyStats = stats => ({
  type: SET_ENEMY_STATS,
  payload: {
    stats
  }
})