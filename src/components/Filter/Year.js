import React from "react";

const yearFilter = props => {
  const minYear = props.minYear;
  const minYearInit = props.minYearInit;
  const maxYear = props.maxYear;
  const maxYearInit = props.maxYearInit;
  const label = props.label ? props.label : "Select";
  // STYLE // get styling from filter container
  let classParent = props.classParent;
  let classLabel = props.classLabel;
  let classControl = props.classControl;
  // (END) STYLE
  console.log("[Filters > Year.js] minYear...", minYear, maxYear);

  return (
    <div className={classParent}>
      <label htmlFor="year" className={classLabel}>
        {label}
        {/* ({props.minYear} [{minYearInit}] --- {props.maxYear} [{maxYearInit}
        ]) */}
      </label>
      <input
        type="number"
        name="minYear"
        id="year"
        value={minYear}
        min={minYearInit}
        max={maxYear}
        onChange={props.changed}
        className={classControl}
      />
      <input
        type="number"
        name="maxYear"
        id="year"
        value={maxYear}
        min={minYear}
        max={maxYearInit}
        onChange={props.changed}
        className={classControl}
      />
    </div>
  );
};

export default yearFilter;
