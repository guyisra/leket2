import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import { LocationOverview } from '../../components/LocationOverview';
import { getPickups, gotoLocationPickup } from '../../store/actions';
import { t } from '../../../i18n';

const mapStateToProps = (state) => ({
  pickups: state.pickups
})
const mapDispatchToProps = 
  (dispatch) => 
    ({actions: bindActionCreators({ getPickups, gotoLocationPickup }, dispatch)})

@connect(mapStateToProps, mapDispatchToProps)
export class UserActivity extends Component {
  gotoLocationPickup (location) {
    this.props.actions.gotoLocationPickup(location.id)
  }

  componentWillMount () {
    this.props.actions.getPickups()
  }

  render () {
    return (
      <div>
        <h1>{t('user_activity.locations')}</h1>
        
        {this.props.pickups.locations.map(location => (
          <LocationOverview 
            key={location.id} 
            location={location} 
            onClick={() => this.gotoLocationPickup(location)}
          />
        ))}
      </div>
    )
  }
}