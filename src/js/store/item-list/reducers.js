"use strict";

import {SET_ITEM_LIST} from "./type";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
  case SET_ITEM_LIST: {
    return action.payload;
  }
  default: {
    return state;
  }}
}