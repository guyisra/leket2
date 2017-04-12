import { LOGIN_FAILED, LOGIN_LOADING, LOGIN_SUCCESS } from '../actions/types';

const initialState = {
  email: null,
  loading: false
}

export const user = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
        email: null
      }

    case LOGIN_SUCCESS:
      return {
        ...state,
        email: action.payload.email,
        loading: false,
        error: null,
        email: action.payload.email
      }

    case LOGIN_FAILED:
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