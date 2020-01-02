import React from "react";

const brandFilter = props => {
  const brand = props.brand; //get active brand
  const className = props.class ? props.class : "form-control form-control-sm";
  const label = props.label ? props.label : "Select";
  // STYLE // get styling from filter container
  let classParent = props.classParent;
  let classLabel = props.classLabel;
  let classControl = props.classControl;
  // (END) STYLE

  // get unique types
  let brands = props.brands;
  // add all
  brands = [{ id: "all", brand: "all" }, ...brands];
  // map to jsx
  brands = brands.map((item, index) => {
    return (
      <option value={item.id} key={index}>
        {item.brand} [{item.id}]
      </option>
    );
  });

  // console.log("[Filters > Brand.js] brands...", brands);

  return (
    <div className={classParent}>
      <label htmlFor="brand" className={classLabel}>
        {label}
      </label>
      <select
        name="brand"
        id="brand"
        className={classControl}
        value={brand}
        onChange={props.changed}
      >
        {brands}
      </select>
    </div>
  );
};

export default brandFilter;
