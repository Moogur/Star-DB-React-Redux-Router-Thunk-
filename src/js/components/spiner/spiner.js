"use strict";

import "./spiner.sass";

import React from "react";

export default function () {
  return pug`
    div.spiner(
      className="spinner-border text-secondary",
      role="status"
    )
      span(className="sr-only")
  `;
}