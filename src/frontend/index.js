import 'antd/dist/antd.min.css'

import './index.scss';

import { Provider } from 'react-redux';
import React from 'react';

import ReactDOM from 'react-dom';

import { configureStore } from './store';
import App from './App';

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
