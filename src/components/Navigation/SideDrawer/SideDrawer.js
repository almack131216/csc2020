import React from "react";
import { Link } from "react-router-dom";

const sideDrawer = props => {
  let drawerClasses = "side-drawer off-left";
  if (props.show) {
    drawerClasses = "side-drawer off-left open";
  }

  const navLinks = props.navigation.map((link, index) => {
    var isActive = window.location.pathname === link.slug;
    var className = isActive ? "active" : "";
    let liClass = link.class ? link.class : null;

    return link.navSide ? (
      <li key={index} className={liClass}>
        <Link
          onClick={props.clicked}
          to={link.slug}
          title={link.titleHover}
          className={className}
        >
          {link.title}
          {liClass && liClass === "new" ? <span className="detail">NEW</span> : null}
        </Link>
      </li>
    ) : null;
  });

  return (
    <nav className={drawerClasses}>
      <ul>{navLinks}</ul>
    </nav>
  );
};

export default sideDrawer;
