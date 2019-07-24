"use strict";

import React from "react";
import PropTypes from "prop-types";

import Detail from "../detail";

export default class PlanetsDetail extends React.PureComponent {
    static propTypes = {
        details: PropTypes.shape({
            data: PropTypes.shape({
                population: PropTypes.string,
                rotation_period: PropTypes.string,
                diameter: PropTypes.string,
                name: PropTypes.string
            }),
            url: PropTypes.string
        }).isRequired,
        match: PropTypes.shape({
            params: PropTypes.shape({
                id: PropTypes.string
            })
        }).isRequired
    }

    render() {
        const {details, match: {params: {id}}} = this.props;
        const {
            name,
            population,
            rotation_period,
            diameter
        } = details.data[id];

        const arr = [
            {title: "Population", val: population},
            {title: "Rotation Period", val: rotation_period},
            {title: "Diameter", val: diameter}
        ];

        const src = `planets/${parseInt(id) + 2}.jpg`;
        return pug`
            Detail(
                src=${src},
                name=${name},
                listItem=${arr},
                url=${details.url}
            )
        `;
    }
}