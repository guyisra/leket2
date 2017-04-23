import React, { Component } from "react";
import classnames from "classnames";

import * as styles from "./index.scss";

export class LogoComponent extends Component {
  isLogin() {
    return this.props.location.pathname === "/";
  }

  renderLogo() {
    return (
      <div
        className={classnames(
          styles.LogoContainer,
          this.isLogin() ? styles.LogoContainerLarge : styles.LogoContainerSmall
        )}
      >
        <img src="/images/logo.png" className={styles.Logo} />
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderLogo()}
      </div>
    );
  }
}
