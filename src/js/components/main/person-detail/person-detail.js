"use strict";

import React from "react";
import PropTypes from "prop-types";

import Detail from "../detail";

export default class PersonDetail extends React.PureComponent {
    static propTypes = {
        details: PropTypes.shape({
            data: PropTypes.shape({
                name: PropTypes.string,
                birth_year: PropTypes.string,
                gender: PropTypes.string,
                eye_color: PropTypes.string
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
            gender,
            birth_year,
            eye_color
        } = details.data[id];

        const arr = [
            {title: "Gender", val: gender},
            {title: "Birth year", val: birth_year},
            {title: "Eye color", val: eye_color}
        ];

        const src = `characters/${parseInt(id) + 1}.jpg`;
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