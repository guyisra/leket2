import { createAction } from 'redux-actions';
import { push } from 'react-router-redux';

import { GOTO_ACTIVITY, LOGIN } from './types';
import { http } from './api';

export const login = createAction(LOGIN, (credentials) => http.post('/user', credentials))
export const gotoUserActivity = email => push('/users/' + email)