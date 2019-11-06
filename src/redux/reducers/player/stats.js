import { 
  TAKE_DMG, 
  GAIN_XP 
} from "../../actionTypes"

const initialState = {
  hp: 10,
  lvl: 1,
  xp: 0,
  ap: 3,
  triumphs: 0
}

export default function (state = initialState, action) {
  switch (action.type) {
    case TAKE_DMG: {
      const { dmg } = action.payload;
      const updatedState = Object.assign(state)
      updatedState.hp = state.hp - dmg < 0 ? 0 : state.hp - dmg
      return updatedState
    }
    case GAIN_XP: {
      const { earnedXp } = action.payload
      const xpToNextLvl = (state.xp * 100) - xp 
      const updatedState = Object.assign(state)
      const lvlUp = xpToNextLvl - earnedXp < 0 
      if (lvlUp) {
        updatedState.lvl = state.lvl + 1
        updatedState.xp = earnedXp - xpToNextLvl
      }
      else updatedState.xp = state.xp + earnedXp
      return updatedState
    } 
    default:
      return state
  }
}