import React from "react";
import parse from "html-react-parser";
import "./Widgets.css";

const Widget = props => {
  return (
    <>
      <div className={`widget ${props.class}`}>
        {props.body.title
          ? parse(`<strong>${props.body.title}</strong>`)
          : null}
        {props.body.text ? parse(props.body.text) : null}
      </div>
    </>
  );
};

export default Widget;
