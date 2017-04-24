import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import _ from 'lodash'

import { getPickups } from '../../store/actions';

const mapStateToProps = (state) => ({
  pickups: state.pickups
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ getPickups }, dispatch)
})

@connect(mapStateToProps, mapDispatchToProps)
export class LocationPickup extends Component {
  componentWillMount() {
    console.log(this.props.pickups.loaded)
    if (!this.props.pickups.loaded) {
      this.props.actions.getPickups()
    }
  }
  getLocation (locationId) {
    return _.find(this.props.pickups.locations, location => location.id == locationId)
  }
  render () {
    return (
      <div>
        Pickup from ... {JSON.stringify(this.getLocation(this.props.match.params.locationId))}
      </div>
    )
  }
}