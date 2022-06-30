import { ActionTypes } from "../constants/actionTypes"
export const setUser = (user) => {
  return {
    type: ActionTypes.SET_USER,
    payload: user
  }
}