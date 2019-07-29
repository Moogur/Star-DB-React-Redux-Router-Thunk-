"use strict";

import "./item-list.sass";

import React from "react";
import {Link} from "react-router-dom";

import ErrorIndicator from "../../error/error-indicator";
import Spiner from "../../spiner";

export default function ({listItems: {data, error}}) {
  const lIs = (arr) => {
    return arr.map(({name}, ind) => {
      let link = `${ind.toString()}`;
      return pug`
        li(
          className="list-group-item list-group-item-action",
          key=Math.random().toString()
        )
          Link.link-item-list(to=link) #{name}
      `;
    });
  };

  return pug`
    ul.item-list(className="list-group col-10 col-lg-8")
      if error === undefined
        Spiner

      else if error
        ErrorIndicator

      else
        ${lIs(data)}
  `;
}