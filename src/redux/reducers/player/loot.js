import { ADD_LOOT } from "../../actionTypes";

const initialState = {}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_LOOT: {
      const { loot } = action.payload;
      const updatedState = Object.assign({}, state)
      for (let item in loot) {
        if (updatedState[item.name]) {
          updatedState[item.name].qt = updatedState[item.name].qt + item.qt
        }
        else updatedState[item.name] = item
      }
      return updatedState
    }
    default:
      return state;
  }
}