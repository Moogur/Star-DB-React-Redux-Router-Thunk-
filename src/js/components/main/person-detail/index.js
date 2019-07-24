"use strict";

import {connect} from "react-redux";

import PersonDetail from "./person-detail";

const mapStateToProps = state => ({
    details: state.itemList
});

export default connect(mapStateToProps, null)(PersonDetail);