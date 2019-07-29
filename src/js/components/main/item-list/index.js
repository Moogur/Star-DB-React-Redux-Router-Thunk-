"use strict";

import {connect} from "react-redux";

import ItemList from "./item-list";

const mapStateToProps = state => ({
  listItems: state.itemList
});


export default connect(mapStateToProps, null)(ItemList);
