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

    return link.navSide ? (
      <li key={index}>
        <Link
          onClick={props.clicked}
          to={link.slug}
          title={link.titleHover}
          className={className}
        >
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
