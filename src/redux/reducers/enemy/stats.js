import {
  ENEMY_TAKE_DMG,
  SET_ENEMY_STATS
} from "../../actionTypes"

const initialState = {
  hp: null,
  lvl: null,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ENEMY_TAKE_DMG: {
      const { dmg } = action.payload;
      const updatedState = Object.assign(state)
      updatedState.hp = state.hp - dmg < 0 ? 0 : state.hp - dmg
      return updatedState
    }
    case SET_ENEMY_STATS: {
      return action.payload.stats
    }
    default:
      return state
  }
}