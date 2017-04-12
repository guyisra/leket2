import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import { LoginForm } from '../../components/LoginForm';
import { gotoUserActivity, login } from '../../store/actions';
import * as styles from './index.scss';

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ login, gotoUserActivity }, dispatch)
})

@connect(mapStateToProps, mapDispatchToProps)
export class Login extends Component {
  handleSubmit (credentials) {
    if (!this.props.user.loading) {
      this.props.actions.login(credentials).then(data => {
        this.props.actions.gotoUserActivity(data.value.data.email)
      })
    }
  }
  render () {
    console.log('blah')
    return (
      <div className={styles.Login}>
        <div className={styles.LogoContainer}>
          <img src='/images/logo-sm.png' />
        </div>
        <div>
          <LoginForm 
            onSubmit={credentials => this.handleSubmit(credentials)} 
            loading={this.props.user.loading}
            errors={this.props.user.error}
          />
        </div>
      </div>
    )
  }
}