"use strict";

import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

import App from "./components/app";
import store from "./store";

ReactDOM.render(
  pug`
    Provider(store=store)
      App
  `,
  document.getElementById("root")
);