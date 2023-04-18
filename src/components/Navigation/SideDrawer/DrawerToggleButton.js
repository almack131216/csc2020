import React from "react";
import { GrFormClose } from "react-icons/gr";
import { HiOutlineMenu } from "react-icons/hi";

const drawerToggleButton = props => (
  <button className="toggle-button off-left" onClick={props.click}>
    <span className="lbl">More</span>
    <HiOutlineMenu className="more r-i show-menu" />
    <GrFormClose className="r-i hide-menu" />
  </button>
);

export default drawerToggleButton;
