"use strict";

import {connect} from "react-redux";

import PlanetsDetail from "./planets-detail";

const mapStateToProps = state => ({
    details: state.itemList
});

export default connect(mapStateToProps, null)(PlanetsDetail);