"use strict";

import React from "react";

import Detail from "../detail";

export default function ({details, match: {params: {id}}}) {
  const {
    name,
    model,
    length,
    cost_in_credits,
    url
  } = details.data[id];

  const arr = [
    {title: "Model", val: model},
    {title: "Length", val: length},
    {title: "Cost", val: cost_in_credits}
  ];

  const src = `starships/${/\d+/.exec(url)}.jpg`;
  return pug`
    Detail(
      src=src,
      name=name,
      listItem=arr,
      url=details.url
    )
  `;
}