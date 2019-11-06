import { TAKE_DMG, GAIN_XP, SET_PLAYER } from "./actionTypes";

export const takeDmg = dmg => ({
  type: TAKE_DMG,
  payload: {
    dmg
  }
})

export const gainXP = earnedXP => ({
  type: GAIN_XP,
  payload: {
    earnedXP
  }
})

export const setPlayer = desc => ({
  type: SET_PLAYER,
  payload: {
    desc
  }
})
