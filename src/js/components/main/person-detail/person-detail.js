"use strict";

import React from "react";

import Detail from "../detail";

export default function ({details: {data, url}, match: {params: {id}}}) {
  const {
    name,
    gender,
    birth_year,
    eye_color
  } = data[id];

  const arr = [
    {title: "Gender", val: gender},
    {title: "Birth year", val: birth_year},
    {title: "Eye color", val: eye_color}
  ];

  const src = `characters/${parseInt(id) + 1}.jpg`;
  return pug`
    Detail(
      src=src,
      name=name,
      listItem=arr,
      url=url
    )
  `;
}