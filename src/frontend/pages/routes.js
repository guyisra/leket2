import { Route } from 'react-router';
import React from 'react';

import { LocationPickup } from './LocationPickup';
import { Login } from './Login';
import { TopBar } from '../containers/TopBar';
import { UserActivity } from './UserActivity';
import * as styles from './routes.scss'

export class Routes extends React.Component {
  render () {
    return (
      <div className={styles.RouteContainer}>
        <Route component={TopBar} />

        <Route exact path="/" component={Login} />
        <Route path="/users/:email" component={UserActivity} />
        <Route path="/locations/:locationId" component={LocationPickup} />
      </div>
    )
  }
}