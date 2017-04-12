import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxPromiseMiddleware from 'redux-promise-middleware';

import { user } from './reducers/user';

export const configureStore = () => {
  return createStore(
    combineReducers({
      user
    }),
    composeWithDevTools(
      applyMiddleware(
        reduxPromiseMiddleware()
      )
    )
  )
}