import 'antd/dist/antd.min.css'

import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import React from 'react';

import ReactDOM from 'react-dom';

import { LocationPickup } from './pages/LocationPickup';
import { Login } from './pages/Login';
import { TopBar } from './containers/TopBar';
import { UserActivity } from './pages/UserActivity';
import { configureStore, history } from './store';
import * as styles from './index.scss';

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className={styles.RouteContainer}>
        <Route component={TopBar} />

        <Route exact path="/" component={Login} />
        <Route path="/users/:email" component={UserActivity} />
        <Route path="/locations/:locationId" component={LocationPickup} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
