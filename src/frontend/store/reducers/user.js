import { FULFILLED, LOGIN, PENDING, REJECTED } from '../actions/types';

const initialState = {
  email: null,
  loading: false
}

export const user = (state = initialState, action) => {
  switch (action.type) {
    case PENDING(LOGIN):
      return {
        ...state,
        loading: true,
        error: null,
        email: null
      }

    case FULFILLED(LOGIN):
      return {
        ...state,
        email: action.payload.email,
        loading: false,
        error: null,
        email: action.payload.email
      }

    case REJECTED(LOGIN):
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        email: null  
      }

    default:
      return state
  }
}