import React from "react";
import SiteData from "../../assets/_data/_data";

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
    </div>
  );
};

export default navLeft;
