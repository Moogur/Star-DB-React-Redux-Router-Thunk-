"use strict";

import "./item-list.sass";

import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import ErrorIndicator from "../../error/error-indicator";
import Spiner from "../../spiner";

export default class ItemList extends React.PureComponent {
    static propTypes = {
        listItems: PropTypes.shape({
            error: PropTypes.bool,
            data: PropTypes.array,
            url: PropTypes.string
        }).isRequired
    }

    lIs = (arr) => {
        return arr.map(({name}, ind) => {
            let link = `${ind.toString()}`;
            return pug`
                li(
                    className="list-group-item list-group-item-action",
                    key=${Math.random().toString()}
                )
                    Link.link-item-list(to=${link}) ${name}
            `;
        });
    }

    render() {
        const {listItems: {data, url, error}} = this.props;
        return pug`
            ul.item-list(className="list-group col-10 col-lg-8")
                if error === undefined
                    Spiner

                else if error
                    ErrorIndicator

                else
                    ${this.lIs(data)}
        `;
    }
}