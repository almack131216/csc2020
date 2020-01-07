import React from "react";

const Ribbon = props => {
  let classes = ["corner-ribbon top-right"];
  if (props.class) classes.push(props.class);

  return <div className={classes.join(" ")}>{props.text}</div>;
};

export default Ribbon;
