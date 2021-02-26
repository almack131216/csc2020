import React from "react";
import SiteData from "../../../assets/_data/_data";
import CatData from "../../../assets/_data/_data-categories";
// import SearchWidget from "../Search/Search";
import { Link } from "react-router-dom";

const navLeft = props => {
  const navLinks = SiteData.navigation.map((link, index) => {
    // SET active class (basic: match url to slug)
    let isActive = window.location.pathname === `${link.slug}`;// add /[dirname] if working in subdir
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

    return link.navTop ? (
      <li key={index} className={liClass}>
        <Link to={link.slug} title={link.titleHover} className={className}>
          {liClass && liClass === "new" ? <span className="detail">NEW</span> : null}
          {link.title}
        </Link>
      </li>
    ) : null;
  });

  return (
    <div className="nav-left-wrap">
      <ul>{navLinks}</ul>
      {/* <SearchWidget /> */}
    </div>
  );
};

export default navLeft;
