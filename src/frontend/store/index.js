import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';

import { user } from './reducers/user';

export const configureStore = () => {
  return createStore(
    combineReducers({
      user
    }),
    composeWithDevTools(applyMiddleware(reduxThunk))
  )
}