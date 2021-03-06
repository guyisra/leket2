import { Button, Card, Timeline } from 'antd';
import React, { Component } from 'react';

import { t } from '../../../i18n';
import * as styles from './index.scss';

export class LocationOverview extends Component {
  render () {
    const { name, suppliers } = this.props.location
    const pickupButton = 
      <Button type="primary" onClick={this.props.onClick}>{t('location_overview.collect_from')+name}</Button>
    return (
      <div className={styles.LocationOverview}>
        <Card title={pickupButton}>
          <Timeline>
            {
              suppliers.map(supplier => (
                <Timeline.Item key={supplier.id}>{supplier.name}</Timeline.Item>
              ))
            }
          </Timeline>
        </Card>
      </div>
    )
  }
}