"use strict";

import React from "react";
import PropTypes from "prop-types";

import Detail from "../detail";

export default class StarshipsDetail extends React.PureComponent {
    static propTypes = {
        details: PropTypes.shape({
            data: PropTypes.shape({
                model: PropTypes.string,
                length: PropTypes.string,
                cost_in_credits: PropTypes.string,
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
            model,
            length,
            cost_in_credits,
            url
        } = details.data[id];

        const arr = [
            {title: "Model", val: model},
            {title: "Length", val: length},
            {title: "Cost", val: cost_in_credits}
        ];

        const src = `starships/${/\d+/.exec(url)}.jpg`;
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