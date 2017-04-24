import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import React, { Component } from "react";

import { LocationOverview } from "../../components/LocationOverview";
import {
  getPickups,
  gotoLocationPickup,
  gotoLogin,
  login
} from "../../store/actions";
import { t } from "../../../i18n";

const mapStateToProps = state => ({
  pickups: state.pickups,
  user: state.user
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    { getPickups, gotoLocationPickup, login, gotoLogin },
    dispatch
  )
});

@connect(mapStateToProps, mapDispatchToProps)
export class UserActivity extends Component {
  constructor(props) {
    super(props);
  }

  gotoLocationPickup(location) {
    this.props.actions.gotoLocationPickup(location.id);
  }

  componentWillMount() {
    const match = this.props.match;

    Promise.resolve()
      .then(() => {
        if (!this.props.user.email) {
          return this.props.actions.login({ email: match.params.email });
        }
      })
      .then(() => {
        this.props.actions.getPickups();
      })
      .catch(() => {
        return this.props.actions.gotoLogin();
      });
  }

  render() {
    return (
      <div>
        <h1>{t("user_activity.locations")}</h1>

        {this.props.pickups.locations.map(location => (
          <LocationOverview
            key={location.id}
            location={location}
            onClick={() => this.gotoLocationPickup(location)}
          />
        ))}
      </div>
    );
  }
}
