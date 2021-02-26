import React from "react";
import { Link } from "react-router-dom";

const sideDrawer = props => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
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
          {liClass && liClass === "new" ? <span className="detail">NEW</span> : null}
          {link.title}
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
