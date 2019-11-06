import {
  SET_ENEMY
} from "../../actionTypes"

const initialState = {
  name: null,
  saying: null,
  img: {
    name: null,
    type: 'enemy'
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_ENEMY: {
      return action.payload.desc
    }
    default:
      return state
  }
}