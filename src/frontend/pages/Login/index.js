import React, { Component } from 'react';

import { LoginForm } from '../../components/LoginForm';
import * as styles from './index.scss';

export class Login extends Component {
  render () {
    console.log('blah')
    return (
      <div className={styles.Login}>
        <div className={styles.LogoContainer}>
          <img src='/images/logo-sm.png' />
        </div>
        <div>
          <LoginForm onSubmit={console.log} />
        </div>
      </div>
    )
  }
}