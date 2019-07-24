"use strict";

import {connect} from "react-redux";

import Header from "./header";
import {setItemList} from "../../store/item-list/action";

const mapStateToProps = state => ({
    mainNav: state.mainNavigation
});

const mapDispatchToProps = {
    setItemList
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
