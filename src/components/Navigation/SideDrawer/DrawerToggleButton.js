import React from "react";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";

const drawerToggleButton = props => (
  <button className="toggle-button" onClick={props.click}>
    <AiOutlineMenuUnfold className="r-i show-menu" />
    <AiOutlineMenuFold className="r-i hide-menu" />
  </button>
);

export default drawerToggleButton;
