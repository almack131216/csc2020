import React from "react";
import NavArray from "../../assets/_data/_data";
import "./NavLeft.css";

const navLeft = props => {
  const navLinks = NavArray.navigation.map((link, index) => {
    return <li key={index}>{link.title}</li>;
  });

  return (
    <div className="column-left">
      <ul>{navLinks}</ul>
      nav left
    </div>
  );
};

export default navLeft;
