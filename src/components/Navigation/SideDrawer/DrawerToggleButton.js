import React from "react";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
import { FiMoreVertical } from "react-icons/fi";

const drawerToggleButton = props => (
  <button className="toggle-button" onClick={props.click}>
    <span className="lbl">More</span>
    <AiOutlineMenuUnfold className="r-i show-menu" />
    <AiOutlineMenuFold className="r-i hide-menu" />
    <FiMoreVertical className="more show-menu" />
  </button>
);

export default drawerToggleButton;
