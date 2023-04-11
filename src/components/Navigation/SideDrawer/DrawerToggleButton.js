import React from "react";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";

const drawerToggleButton = props => (
  <button className="toggle-button" onClick={props.click}>
    <span className="lbl">More</span>
    <AiOutlineMenuFold className="more r-i show-menu" />
    <AiOutlineMenuUnfold className="r-i hide-menu" />
  </button>
);

export default drawerToggleButton;
