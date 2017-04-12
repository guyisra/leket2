import React, { Component } from 'react';

import { Login } from './pages/Login';

import * as styles from './App.scss'

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Login />
      </div>
    );
  }
}

export default App;
