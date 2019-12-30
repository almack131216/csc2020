import React from "react";

const searchWidget = () => {
  return (
    <div className="widget widget_search">
      <form role="search" method="get" id="searchform" className="searchform">
        <div>
          <label className="screen-reader-text" for="s">
            Search for:
          </label>
          <input type="text" value="" name="s" id="s" />
          <input type="submit" id="searchsubmit" value="Search" />
        </div>
      </form>
    </div>
  );
};

export default searchWidget;
