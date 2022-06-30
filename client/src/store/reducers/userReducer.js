import { ActionTypes } from '../constants/actionTypes'
const initialState = {
  user: {
    userId: '',
    name: '',
    image: '',
    admin: false
  }
}

export const userReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ActionTypes.SET_USER:
      return {
        ...state, 
        user: {
          userId: payload.userId,
          name: payload.name,
          image: payload.image,
          admin: payload.admin ? payload.admin : false
        }
      }
    default:
      return state; 
  }
}