import { Collapse } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import React, { Component } from 'react';
import _ from 'lodash'

import { getPickups } from '../../store/actions';

const customPanelStyle = {
  background: '#f7f7f7',
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
};

const mapStateToProps = (state) => ({
  pickups: state.pickups
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ getPickups }, dispatch)
})

@connect(mapStateToProps, mapDispatchToProps)
export class LocationPickup extends Component {
  componentWillMount() {
    if (!this.props.pickups.loaded) {
      this.props.actions.getPickups()
    }
  }
  getLocation (locationId) {
    return _.find(this.props.pickups.locations, location => location.id == locationId)
  }
  render () {
    const { locationId } = this.props.match.params
    const location = this.getLocation(locationId) 
    console.log(location)

    return (
      <div>
        {location && location.suppliers.map(supplier => (
          <Collapse key={supplier.id} bordered={false} defaultActiveKey={['1']}>
            <Collapse.Panel header={supplier.name} key="1" style={customPanelStyle}>
              <p>איסוף כאן</p>
            </Collapse.Panel>
          </Collapse>
        ))}
      </div>
    )
  }
}