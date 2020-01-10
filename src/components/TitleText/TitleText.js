import React from "react";

const TitleText = props => {
  return (
    <div className="title-text">
      <h1>{props.categoryArr.title}</h1>
      {props.categoryArr.titleSub ? (
        <h2>{props.categoryArr.titleSub}</h2>
      ) : null}
    </div>
  );
};
export default TitleText;
