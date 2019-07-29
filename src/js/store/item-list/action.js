"use strict";

import ajaxfetch from "../../api/fetch";
import {SET_ITEM_LIST} from "./type";

const setIL = payload => ({
  type: SET_ITEM_LIST,
  payload
});

export const setItemList = (url) => dispatch => {
  ajaxfetch.get(`https://swapi.co/api/${url}/`)
    .then(data => dispatch(setIL({data: data.results, error: false, url: url})))
    .catch(() => dispatch(setIL({error: true})));
};