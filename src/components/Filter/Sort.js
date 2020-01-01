import React from "react";

const sortFilter = props => {
  const sortRangeArr = props.sortRangeArr;
  console.log("[Filter>Sort.js] sortRangeArr: ", sortRangeArr);

  const label = props.label ? props.label : "Order";

  let classParent = [];
  classParent.push("form-group");
  if (props.classParent) {
    classParent.push(props.classParent);
  }

  let classLabel = [];
  if (props.classLabel) {
    classLabel.push(props.classLabel);
  }

  console.log("[Filters > Price.js] sortRangeArr...", sortRangeArr);

  return (
    <div className={classParent.join(" ")}>
      <label htmlFor="sortBy" className={classLabel.join(" ")}>
        {label}
        {/* sort ({props.sortBy}:{props.sortBy} -> {props.sortBy} [ ]) */}
      </label>
      <div className="size-inputs">
        <select
          name="sortBy"
          id="sortBy"
          className="form-control"
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
    </div>
  );
};

export default sortFilter;
