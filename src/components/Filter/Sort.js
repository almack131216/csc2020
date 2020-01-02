import React from "react";

const sortFilter = props => {
  const sortRangeArr = props.sortRangeArr;
  const label = props.label ? props.label : "Order";
  // STYLE // get styling from filter container
  let classParent = props.classParent;
  let classLabel = props.classLabel;
  let classControl = props.classControl;
  // (END) STYLE
  console.log("[Filters > Sort.js] sortRangeArr...", sortRangeArr);

  return (
    <div className={classParent}>
      <label htmlFor="sortBy" className={classLabel}>
        {label}
        {/* sort ({props.sortBy}:{props.sortBy} -> {props.sortBy} [ ]) */}
      </label>
      <select
        name="sortBy"
        id="sortBy"
        className={classControl}
        onChange={props.changed}
        value={props.sortBy}
      >
        {sortRangeArr.map((sort, index) => (
          <option key={index} value={sort.name}>
            {sort.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default sortFilter;
