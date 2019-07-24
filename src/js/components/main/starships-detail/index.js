"use strict";

import {connect} from "react-redux";

import StarshipsDetail from "./starships-detail";

const mapStateToProps = state => ({
    details: state.itemList
});

export default connect(mapStateToProps, null)(StarshipsDetail);