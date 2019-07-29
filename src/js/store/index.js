"use strict";

import {combineReducers} from "redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import mainNavigation from "./main-navigation/reducers";
import itemList from "./item-list/reducers";
import randomPlanet from "./random-planet/reducers";

export default createStore(combineReducers({
  mainNavigation,
  itemList,
  randomPlanet
}), applyMiddleware(
  thunk
));