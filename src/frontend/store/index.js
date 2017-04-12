import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import reduxPromiseMiddleware from 'redux-promise-middleware';

import createHistory from 'history/createHashHistory'

import { user } from './reducers/user';

export const history = createHistory()

const routingMiddleware = routerMiddleware(history)

export const configureStore = () => {
  return createStore(
    combineReducers({
      user,
      router: routerReducer
    }),
    composeWithDevTools(
      applyMiddleware(
        reduxPromiseMiddleware(),
        routingMiddleware
      )
    )
  )
}
