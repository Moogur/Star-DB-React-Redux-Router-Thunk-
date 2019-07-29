"use strict";

import React from "react";

import Detail from "../detail";

export default function ({details: {data, url}, match: {params: {id}}}) {
  const {
    name,
    population,
    rotation_period,
    diameter
  } = data[id];

  const arr = [
    {title: "Population", val: population},
    {title: "Rotation Period", val: rotation_period},
    {title: "Diameter", val: diameter}
  ];

  const src = `planets/${parseInt(id) + 2}.jpg`;
  return pug`
    Detail(
      src=src,
      name=name,
      listItem=arr,
      url=url
    )
  `;
}