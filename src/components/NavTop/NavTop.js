import React, { useEffect } from "react";
import SiteData from "../../assets/_data/_data";
import CatData from "../../assets/_data/_data-categories";
// import SearchWidget from "../Search/Search";
import NavData from "../../assets/_data/_data-navigation";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import DrawerToggleButton from "../Navigation/SideDrawer/DrawerToggleButton";
import { useLocation } from 'react-router-dom';
// import DynamicTabs from '../DynamicTabs';
// import {css} from '@emotion/css';

const navTop = (props) => {

  const navLinks = SiteData.navigationNavTop.map((link, index) => {
    const location = useLocation().pathname;

    // SET active class (basic: match url to slug)
    let isActive = window.location.pathname === `${link.slug}`; // add /[dirname] if working in subdir
    // SET class to <li> tag so we can control responsive
    let liClass = link.class ? link.class : null;
    // SET active class (for when we are on a brand page - need to highlight parent category link)
    if (
      !isActive &&
      props.categoryName &&
      CatData[props.categoryName].slug === link.slug &&
      CatData[props.categoryName].slug !== "/"
    )
    isActive = true;
    // ASSIGN class if active
    let className = isActive ? "active" : "";

    useEffect(() => {
      // console.log('TopNav.js : ', window.location.pathname)
    }, [location]);

    return link.navTop ? (
      <li key={index} className={liClass}>
        <Link to={link.slug} title={link.titleHover} className={className}>
          {liClass && liClass === "new" ? (
            <span className="detail">NEW</span>
          ) : null}
          {link.title}
        </Link>
      </li>
    ) : null;
  });

  return (
    <div className="navTop">
      <div className="container">
        <nav>          
          <ul>
            <li className="home">
              <Link to={NavData.home.slug}>
                <FaHome className="i-home" />
              </Link>
            </li>
            {navLinks}
            <li className="more">
            <DrawerToggleButton
                click={props.drawerToggleClickHandler}
              ></DrawerToggleButton>
            </li>
          </ul>
          {/* <SearchWidget /> */}
        </nav>
      </div>
    </div>
  );
};

export default navTop;
