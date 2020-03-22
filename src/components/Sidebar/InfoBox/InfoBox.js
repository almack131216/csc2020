import React from "react";
import parse from "html-react-parser";

const Widget = props => {
  let classes = props.class ? props.class : null;
  let title = props.title ? props.title : null;
  let text = props.text ? props.text : null;

  if (props.arr) {
    classes = props.arr.class ? props.arr.class : null;
    title = props.arr.title ? props.arr.title : null;
    text = props.arr.text ? props.arr.text : null;
  }

  return (
    <>
      <div className={`widget ${classes}`}>
        {title ? <strong>{title}</strong> : null}
        {text}
      </div>
    </>
  );
};

export default Widget;
