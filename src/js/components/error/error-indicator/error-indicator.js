"use strict";

import "./error-indicator.sass";
import ErrorIcon from "./death-star.png";

import React from "react";

export default function () {
  return pug`
    div.error-indicator
      img(src=ErrorIcon, alt="error icon")

      span.boom BOOM!

      span something has gone terribly wrong

      span (but we already sent droids to fix it)
  `;
}