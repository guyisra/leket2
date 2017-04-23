import 'antd/dist/antd.min.css'

import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import React from 'react';

import ReactDOM from 'react-dom';

import { Routes } from './pages/routes';
import { configureStore, history } from './store';

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
