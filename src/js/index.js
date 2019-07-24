"use strict";

import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

import App from "./components/app";
import rootReducers from "./store";

const store = createStore(rootReducers,compose(applyMiddleware(thunk)));

ReactDOM.render(
    pug`
        Provider(store=${store})
            App
    `,
    document.getElementById("root")
);