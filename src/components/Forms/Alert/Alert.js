import React from "react";
import parse from "html-react-parser";

const Alert = props => {
  return (
    <>
      <div className={`alert ${props.class}`} role="alert">
        {props.title ? parse(`<strong>${props.title}</strong>`) : null}
        {props.text ? parse(props.text) : null}
      </div>
    </>
  );
};

export default Alert;
