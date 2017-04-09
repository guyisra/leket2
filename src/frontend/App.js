import React, { Component } from 'react';
import * as styles from './App.css';
console.log(styles)
class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <div className={styles.header}>
          <h2>Welcome to React</h2>
        </div>
        <p className={styles.intro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
