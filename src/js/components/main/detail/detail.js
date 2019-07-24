"use strict";

import "./detail.sass";

import React from "react";
import PropTypes from "prop-types";
import {Link}from "react-router-dom";

export default class Detail extends React.PureComponent {
    static propTypes = {
        src: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        listItem: PropTypes.arrayOf.isRequired,
        url: PropTypes.string.isRequired
    }

    render() {
        const {
            name,
            src,
            url,
            listItem
        } = this.props;

        const items = listItem.map(({title, val}) => {
            return pug`
                li(
                    className="list-group-item",
                    key=${title}
                ) ${title}:
                    span  ${val}
            `;
        });

        const link = `/${url}/`;
        const newSrc = "https://starwars-visualguide.com/assets/img/" + src;
        return pug`
            article.detail(className="card mb-3 col-12 col-md-10 col-lg-8")
                section(className="row no-gutters")
                    div.detail-image(className="col-8 offset-2 offset-sm-0 col-sm-5")
                        img(className="card-img")(src=${newSrc})

                    div(className="col-10 col-sm-6 offset-1")
                        h3.detail-header ${name}

                        ul.detail-description(className="list-group list-group-flush")
                            ${items}

                Link.back(to=${link}) Back
        `;
    }
}