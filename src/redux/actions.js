import { TAKE_DMG, GAIN_XP } from "./actionTypes";

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

// let nextTodoId = 0;

// export const addTodo = content => ({
//   type: ADD_TODO,
//   payload: {
//     id: ++nextTodoId,
//     content
//   }
// });

// export const toggleTodo = id => ({
//   type: TOGGLE_TODO,
//   payload: { id }
// });

// export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
