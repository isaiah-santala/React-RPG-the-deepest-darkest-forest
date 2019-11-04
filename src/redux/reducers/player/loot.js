import { ADD_LOOT } from "../../actionTypes";

const initialState = {
  
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_LOOT: {
      const { dmg } = action.payload;
      const updatedState = Object.assign(state)
      updatedState.hp = state.hp - dmg < 0 ? 0 : state.hp - dmg
      return updatedState
    }
    default:
      return state;
  }
}