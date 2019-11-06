import {
  SET_PLAYER
} from "../../actionTypes"

const initialState = {
  name: null,
  saying: null,
  img: {
    name: null,
    type: 'player'
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_PLAYER: {
      return action.payload.desc
    }
    default:
      return state
  }
}