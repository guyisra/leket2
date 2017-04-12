import { LOGIN_FAILED, LOGIN_LOADING, LOGIN_SUCCESS } from './types';
import { http } from './api';

export const login = (credentials) => async (dispatch) => {
  dispatch({type: LOGIN_LOADING})

  try {
    const user = await http.post('/user', credentials)
    dispatch({type: LOGIN_SUCCESS, payload: user.data})
  } catch (e) {
    dispatch({type: LOGIN_FAILED, payload: e.response.data})
  }
}