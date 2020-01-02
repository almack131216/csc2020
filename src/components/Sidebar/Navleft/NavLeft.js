import React from "react";
import SiteData from "../../../assets/_data/_data";
import SearchWidget from "../Search/Search";
import { Link } from "react-router-dom";

const navLeft = props => {
  const navLinks = SiteData.navigation.map((link, index) => {
    var isActive = window.location.pathname === link.slug;
    var className = isActive ? "active" : "";

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
