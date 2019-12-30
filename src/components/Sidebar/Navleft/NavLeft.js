import React from "react";
import SiteData from "../../../assets/_data/_data";
import SearchWidget from "../Search/Search";

const navLeft = props => {
  const navLinks = SiteData.navigation.map((link, index) => {
    return (
      <li key={index}>
        <a href={link.slug}>{link.title}</a>
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
