import React from "react";
import parse from "html-react-parser";
import loadingGif from "../../../assets/images/loading-spinner.gif";

const Alert = props => {
  return (
    <>
      <div className={`alert ${props.class}`} role="alert">
        {props.title ? parse(`<strong>${props.title}</strong>`) : null}
        {props.loading ? (
          <img src={loadingGif} alt="loading..." className="loading" />
        ) : null}
        {props.text ? parse(props.text) : null}
      </div>
    </>
  );
};

export default Alert;
