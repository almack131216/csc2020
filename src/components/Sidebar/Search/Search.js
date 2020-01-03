import React from "react";

const searchWidget = () => {
  return (
    <div className="search-wrap">
      <form role="search" method="get" id="searchform" className="searchform">
        <div>
          <label className="screen-reader-text" htmlFor="s">
            Search for:
          </label>
          <input type="text" name="s" id="s" />
          <input type="submit" id="searchsubmit" value="Search" />
        </div>
      </form>
    </div>
  );
};

export default searchWidget;
