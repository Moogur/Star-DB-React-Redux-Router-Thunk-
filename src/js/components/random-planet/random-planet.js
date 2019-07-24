"use strict";

import "./random-planet.sass";

import React from "react";
import PropTypes from "prop-types";

import Spiner from "../spiner";
import ErrorIndicator from "../error/error-indicator";

export default class RandomPlanet extends React.Component {
    static propTypes = {
        getNewRandomPlanet: PropTypes.func.isRequired,
        randomPlanet: PropTypes.shape({
            len: PropTypes.number,
            data: PropTypes.object
        }).isRequired
    }

    async componentDidMount () {
        const {randomPlanet} = this.props;

        let allCount = randomPlanet.len;
        await this.getNewPlanet(allCount);
        window.setInterval(async () => {
            await this.getNewPlanet(allCount);
        }, 5000);
    }

    getNewPlanet = (allCount) => {
        const {getNewRandomPlanet} = this.props;

        const newID = Math.floor(Math.random() * (allCount - 0 + 1)) + 0 - 1;
        return getNewRandomPlanet(newID);
    }

    render() {
        const {randomPlanet: {data: {
            name,
            population,
            diameter,
            rotation_period,
            src,
            error
        }}} = this.props;

        return pug`
            article.random-planet(className="card mb-3")
                if error === undefined
                    Spiner

                else if error
                    ErrorIndicator

                else
                    section(className="row no-gutters")
                        div(className="col-10 offset-1 offset-sm-0 col-sm-6 col-lg-4")
                            img.planet-image(
                                className="card-img",
                                src=${src}
                            )

                        div(className="col-12 col-sm-6 col-lg-4")
                            h3.planet-header ${name}

                            ul.planet-description(className="list-group list-group-flush")
                                li(className="list-group-item") Population:
                                    span  ${population}

                                li(className="list-group-item") Rotation period:
                                    span  ${rotation_period}

                                li(className="list-group-item") Diameter:
                                    span  ${diameter}

                        div(className="d-lg-block d-none col-lg-4")
                            img.planet-image(
                                className="card-img",
                                src=${src}
                            )
        `;
    }
}