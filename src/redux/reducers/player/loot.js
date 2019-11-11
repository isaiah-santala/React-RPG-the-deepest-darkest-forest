import { ADD_LOOT } from "../../actionTypes";

const initialState = {}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_LOOT: {
      const { loot } = action.payload;
      const updatedState = Object.assign({}, state)
      console.log(loot)
      for (let item in loot) {
        if (updatedState[item]) {
          updatedState[item].qt = updatedState[item].qt + loot[item].qt
        }
        else updatedState[item] = loot[item]
      }
      console.log(updatedState)
      return updatedState
    }
    default:
      return state;
  }
}