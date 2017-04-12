import { Button, Form, Icon, Input } from 'antd';
import React, { Component } from 'react';

import { t } from '../../../i18n';
import * as styles from './index.scss'

@Form.create()
export class LoginForm extends Component {
  handleSubmit (e) {
    e.preventDefault()
    this.props.onSubmit(this.props.form.getFieldsValue())
  }
  render () {
    const { getFieldDecorator } = this.props.form

    return (
      <div className={styles.LoginForm}>
        <h2>{t('login_form.title')}</h2>
        <Form onSubmit={(e) => this.handleSubmit(e)}>
          <Form.Item>
            {getFieldDecorator('email')(
              <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder={t('login_form.email')} />
            )}
          </Form.Item>          
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" loading={this.props.loading}>
              {t('login_form.log_in')}
            </Button>
          </Form.Item>
          {
            this.props.errors ? this.props.errors.error : ''
          }
        </Form>
      </div>
    )
  }
}