"use strict";

import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../main/item-list";
import PeoplesnDetail from "../main/person-detail";
import PlanetsDetail from "../main/planets-detail";
import StarshipsDetail from "../main/starships-detail";
import ErrorBoundary from "../error/error-boundary";
import Head from "../head";

export default function () {
  return pug`
    ErrorBoundary
      Router
        div(className="container")
          Header

          RandomPlanet

          main
            Route(exact path="/", component=Head)

            Route(exact path="/people", component=ItemList)

            Route(path="/people/:id", component=PeoplesnDetail)

            Route(exact path="/planets", component=ItemList)

            Route(path="/planets/:id", component=PlanetsDetail)

            Route(exact path="/starships", component=ItemList)

            Route(path="/starships/:id/", component=StarshipsDetail)
  `;
}