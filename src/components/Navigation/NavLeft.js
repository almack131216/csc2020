import React from "react";
import NavArray from "../../assets/_data/_data";
import "./NavLeft.css";

const navLeft = props => {
  const navLinks = NavArray.navigation.map((link, index) => {
    return (
      <li key={index}>
        <a href={link.slug}>{link.title}</a>
      </li>
    );
  });

  return (
    <div className="nav-left">
      <ul>{navLinks}</ul>
    </div>
  );
};

export default navLeft;
