"use strict";

import "./header.sass";

import React from "react";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";

export default class Header extends React.Component {
    static propTypes = {
      mainNav: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
      })).isRequired,
      setItemList: PropTypes.func.isRequired
    }

    shouldComponentUpdate() {
      return false;
    }

    getNewList = e => {
      const {setItemList} = this.props;
      const newUrl = e.target.dataset.url;
      if (this.url !== newUrl) {
        setItemList(newUrl);
        this.url = newUrl;
      }
    }

    render() {
      const {mainNav} = this.props;

      const mainNavLists = mainNav.map(({title, url}) => {
        let link = `/${url}/`;
        return pug`
          li(className="nav-item", key=Math.random().toString())
            NavLink(
              activeClassName="active",
              className="nav-link",
              to=link
              onClick=this.getNewList,
              data-url=url
            ) #{title}
        `;
      });

      return pug`
        header(className="d-flex flex-wrap")
          h2.logo(className="col-12 col-md-4")
            NavLink.logo-link(to="/") StarDB

          ul.main-nav(className="col-12 col-md-8 nav justify-content-center") #{mainNavLists}
      `;
    }
}