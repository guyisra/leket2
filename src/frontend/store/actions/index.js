import { createAction } from 'redux-actions';

import { LOGIN } from './types';
import { http } from './api';

export const login = createAction(LOGIN, (credentials) => http.post('/user', credentials))