import React from "react";

const TitleText = props => {
  return (
    <div className="title-text">
      <h1>{props.title}</h1>
      {props.titleSub ? <h2>{props.titleSub}</h2> : null}
    </div>
  );
};
export default TitleText;
