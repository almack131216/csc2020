import React from "react";

const yearFilter = props => {
  const minYear = props.minYear;
  const minYearInit = props.minYearInit;
  const maxYear = props.maxYear;
  const maxYearInit = props.maxYearInit;
  const label = props.label ? props.label : "Select";

  let classParent = [];
  classParent.push("form-group");
  if (props.classParent) {
    classParent.push(props.classParent);
  }

  let classLabel = [];
  if (props.classLabel) {
    classLabel.push(props.classLabel);
  }

  console.log("[Filters > Year.js] minYear...", minYear, maxYear);

  return (
    <div className={classParent.join(" ")}>
      <label htmlFor="year" className={classLabel.join(" ")}>
        {label}
        year ({props.minYear} [{minYearInit}] --- {props.maxYear} [{maxYearInit}
        ])
      </label>
      <div className="size-inputs">
        <input
          type="number"
          name="minYear"
          id="year"
          value={minYear}
          min={minYearInit}
          max={maxYear}
          onChange={props.changed}
          className="size-input"
        />
        <input
          type="number"
          name="maxYear"
          id="year"
          value={maxYear}
          min={minYear}
          max={maxYearInit}
          onChange={props.changed}
          className="size-input"
        />
      </div>
    </div>
  );
};

export default yearFilter;
