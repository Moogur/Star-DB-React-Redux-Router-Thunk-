"use strict";

import ajaxfetch from "../../lib/fetch";
import {SET_NEW_RANDOM_PLANET} from "./const";

const setNewPlanet = payload => ({
    type: SET_NEW_RANDOM_PLANET,
    payload
});

export const getNewRandomPlanet = id => dispatch => {
    ajaxfetch.get(`https://swapi.co/api/planets/${id}/`)
        .then(({name, population, diameter, rotation_period}) => {
            let newData = {
                name,
                population,
                diameter,
                rotation_period,
                src: `https://starwars-visualguide.com/assets/img/planets/${parseInt(id)}.jpg`,
                error: false
            };
            dispatch(setNewPlanet(newData));})
        .catch(() => dispatch(setNewPlanet({error: true})));

};