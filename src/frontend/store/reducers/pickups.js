import { FULFILLED, PENDING, REJECTED, GET_PICKUPS } from '../actions/types';

const initialState = {
  loading: false,
  locations: []
}

export const pickups = (state = initialState, action) => {
  switch (action.type) {
    case PENDING(GET_PICKUPS):
      return {
        ...state,
        locations: state.locations || [],
        loading: true
      }
    case REJECTED(GET_PICKUPS):
      return {
        loading: false,
        locations: state.locations || [],
        error: action.payload.response.data
      }
    case FULFILLED(GET_PICKUPS):
      return {
        loading: false,
        locations: action.payload.data.locations
      }
    default:
      return state
  }
}