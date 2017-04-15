import React, { Component } from 'react';

export class LocationPickup extends Component {
  render () {
    return (<div>LocationPickup {JSON.stringify(this.props.match.params.locationId)}</div>)
  }
}