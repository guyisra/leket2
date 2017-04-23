import { connect } from 'react-redux';
import React from 'react';

import { LogoComponent } from '../components/LogoComponent';

const mapStateToProps = state => ({
  user: state.user
})

@connect(mapStateToProps)
export class TopBar extends React.Component {
  render () {
    return (
      <div>
        <LogoComponent {...this.props} />
      </div>
    )
  }
}