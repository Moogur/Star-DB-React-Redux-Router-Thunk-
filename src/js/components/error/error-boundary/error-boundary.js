"use strict";

import React from "react";

import ErrorIndicator from "../error-indicator";

export default class ErrorBoundary extends React.PureComponent {
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