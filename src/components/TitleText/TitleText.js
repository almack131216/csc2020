import React from "react";
import parse from "html-react-parser";

const TitleText = props => {
  return (
    <div className="title-text">
      <h1>{props.title}</h1>
      {props.titleSub ? <h2>{props.titleSub}</h2> : null}
      {props.text && props.parseText ? <div className="text">{parse(props.text)}</div> : null}
      {props.text && !props.parseText ? <div className="text">{props.text}</div> : null}
    </div>
  );
};
export default TitleText;
