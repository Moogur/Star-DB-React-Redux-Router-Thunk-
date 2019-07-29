"use strict";

import React from "react";
import PropTypes from "prop-types";

import ErrorIndicator from "../error-indicator";

export default class ErrorBoundary extends React.PureComponent {
  static propTypes = {
    children: PropTypes.objectOf.isRequired
  }

  componentDidCatch() {
    this.isError = true;
  }

    isError = false;

    render() {
      const {children} = this.props;
      return pug`
        if this.isError
          ErrorIndicator

        else
          ${children}
      `;
    }
}