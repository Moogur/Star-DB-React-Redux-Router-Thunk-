"use strict";

import {SET_NEW_RANDOM_PLANET} from "./const";

const initialState = {
    len: 20, //61,
    data: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
    case SET_NEW_RANDOM_PLANET: {
        let st = {...state, data: action.payload};
        return st;
    }}
    return state;
}