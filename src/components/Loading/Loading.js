import React from "react";
import loadingGif from "../../assets/images/loading-spinner.gif";

const Loading = () => {
  return (
    <div className="loading-wrap">
      <h4>loading....</h4>
      <img src={loadingGif} alt="loading..." />
    </div>
  );
};

export default Loading;
