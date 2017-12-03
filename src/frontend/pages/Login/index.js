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
      this.props.actions.login(credentials).then(
        data => this.props.actions.gotoUserActivity(data.value.data.email),
        reason => {}
      )
    }
  }
  render () {
    return (
      <div className={styles.Login}>
        <div>
          <LoginForm
            onSubmit={credentials => this.handleSubmit(credentials)}
            loading={this.props.user.loading}
            error={this.props.user.error}
          />
        </div>
      </div>
    )
  }
}