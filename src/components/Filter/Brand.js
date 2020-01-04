import React from "react";

const brandFilter = props => {
  const brand = props.brand; //get active brand
  const label = props.label ? props.label : "Select";
  // STYLE // get styling from filter container
  let classParent = props.classParent;
  let classLabel = props.classLabel;
  let classControl = props.classControl;
  // (END) STYLE

  // GET all brands
  let brands = props.brands;
  // MAP to jsx
  brands = brands.map((item, index) => {
    return (
      <option value={item.id} key={index}>
        {item.brand} {item.itemCount ? `(${item.itemCount})` : null}
      </option>
    );
  });

  return (
    <div className={classParent}>
      <label htmlFor="brand" className={classLabel}>
        {label}
      </label>
      <select
        name="brand"
        id="brand"
        className={classControl}
        value={brand ? brand : ""}
        onChange={props.changed}
      >
        {brands}
      </select>
    </div>
  );
};

export default brandFilter;
