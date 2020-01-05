import React from "react";
import SiteData from "../../../assets/_data/_data";
import CatData from "../../../assets/_data/_data-categories";
import SearchWidget from "../Search/Search";
import { Link } from "react-router-dom";

const navLeft = props => {
  const navLinks = SiteData.navigation.map((link, index) => {
    // SET active class (basic: match url to slug)
    let isActive = window.location.pathname === link.slug;
    // SET active class (for when we are on a brand page - need to highlight parent category link)
    if (!isActive && CatData[props.categoryName].slug === link.slug)
      isActive = true;
    // ASSIGN class if active
    let className = isActive ? "active" : "";

    return (
      <li key={index}>
        <Link to={link.slug} title={link.titleHover} className={className}>
          {link.title}
        </Link>
      </li>
    );
  });

  return (
    <div className="nav-left-wrap">
      <ul>{navLinks}</ul>
      <SearchWidget />
    </div>
  );
};

export default navLeft;
