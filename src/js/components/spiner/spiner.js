"use strict";

import "./spiner.sass";

import React from "react";

export default class Spiner extends React.PureComponent{
    render() {
        return pug`
            div.spiner(
                className="spinner-border text-secondary",
                role="status"
            )
                span(className="sr-only")
        `;
    }
}