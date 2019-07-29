"use strict";

import {SET_NEW_RANDOM_PLANET} from "./type";

const initialState = {
  len: 15,
  data: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
  case SET_NEW_RANDOM_PLANET: {
    let st = {...state, data: action.payload};
    return st;
  }
  default: {
    return state;
  }}
}