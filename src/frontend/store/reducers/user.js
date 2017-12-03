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
        email: action.payload.data.email,
        loading: false,
        error: null
      }

    case REJECTED(LOGIN):
      return {
        ...state,
        loading: false,
        error: action.payload.response.data.error,
        email: null
      }

    default:
      return state
  }
}