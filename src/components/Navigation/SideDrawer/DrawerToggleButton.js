import React from "react";

const drawerToggleButton = props => (
  <button className="toggle-button" onClick={props.click}>
    <div className="nav-icon">
      <div></div>
    </div>
  </button>
);

export default drawerToggleButton;
