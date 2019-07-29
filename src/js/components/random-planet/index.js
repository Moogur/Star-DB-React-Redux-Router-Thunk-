"use strict";

import {connect} from "react-redux";

import RandomPlanet from "./random-planet";
import {getNewRandomPlanet} from "../../store/random-planet/actions";

const mapStateToProps = state => ({
  randomPlanet: state.randomPlanet
});

const mapDispatchToProps = {
  getNewRandomPlanet
};

export default connect(mapStateToProps, mapDispatchToProps)(RandomPlanet);
