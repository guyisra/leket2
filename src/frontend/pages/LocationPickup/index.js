import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import _ from 'lodash'

const mapStateToProps = (state) => ({
  locations: state.pickups.locations
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ }, dispatch)
})

@connect(mapStateToProps, mapDispatchToProps)
export class LocationPickup extends Component {
  render () {
    return (
      <div>Pickup from ... TBD</div>
    )
  }
}