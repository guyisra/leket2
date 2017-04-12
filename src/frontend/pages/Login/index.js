import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import { LoginForm } from '../../components/LoginForm';
import { login } from '../../store/actions';
import * as styles from './index.scss';

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ login }, dispatch)
})

@connect(mapStateToProps, mapDispatchToProps)
export class Login extends Component {
  render () {
    console.log('blah')
    return (
      <div className={styles.Login}>
        <div className={styles.LogoContainer}>
          <img src='/images/logo-sm.png' />
        </div>
        <div>
          <LoginForm 
            onSubmit={(credentials) => this.props.actions.login(credentials)} 
            loading={this.props.user.loading}
            errors={this.props.user.error}
          />
        </div>
      </div>
    )
  }
}