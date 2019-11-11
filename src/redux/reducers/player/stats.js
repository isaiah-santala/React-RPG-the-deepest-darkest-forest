import { 
  TAKE_DMG, 
  GAIN_XP,
  GAIN_AP
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
      const { dmg } = action.payload
      const updatedState = Object.assign({}, state)

      updatedState.hp = state.hp - dmg < 0 ? 0 : state.hp - dmg

      return updatedState
    }
    case GAIN_XP: {
      const updatedState = Object.assign({}, state)
      const { earnedXp } = action.payload
      let xpToNextLvl = state.lvl * 100

      updatedState.xp = state.xp + earnedXp

      while (updatedState.xp >= xpToNextLvl) {
        updatedState.lvl = updatedState.lvl + 1
        updatedState.xp = updatedState.xp - xpToNextLvl
        xpToNextLvl = updatedState.lvl * 100
      }
      
      return updatedState
    } 
    case GAIN_AP: {
      const updatedState = Object.assign({}, state)
      const { earnedAp } = action.payload

      updatedState.ap = state.ap + earnedAp
      
      return updatedState
    }
    default:
      return state
  }
}