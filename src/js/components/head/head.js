"use strict";

import "./head.sass";

import React from "react";

export default class Head extends React.PureComponent {
    render() {
        return pug`
            h3.head Welcom to StarDB
        `;
    }
}