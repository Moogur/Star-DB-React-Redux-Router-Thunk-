"use strict";

import {combineReducers} from "redux";

import mainNavigation from "./main-navigation/reducers";
import itemList from "./item-list/reducers";
import randomPlanet from "./random-planet/reducers"

export default combineReducers({
    mainNavigation,
    itemList,
    randomPlanet
});