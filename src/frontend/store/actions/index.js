import { createAction } from 'redux-actions';
import { push } from 'react-router-redux';

import { LOGIN, GET_PICKUPS } from './types';
import { http } from './api';

export const login = createAction(LOGIN, (credentials) => http.post('/user', credentials))
export const gotoUserActivity = email => push('/users/' + email)

export const getPickups = createAction(GET_PICKUPS, () => http.get('/pickups'))
export const gotoLocationPickup = locationId => push('/locations/' + locationId)