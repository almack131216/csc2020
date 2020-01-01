import React from "react";

const brandFilter = props => {
  const brand = props.brand; //get active brand
  const className = props.class ? props.class : "form-control form-control-sm";
  const label = props.label ? props.label : "Select";
  const labelClass = props.labelClass ? props.labelClass : "display-none";

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

  console.log("[Filters > Brand.js] brands...", brands);

  return (
    <div className={className}>
      <label htmlFor="brand" className={labelClass}>
        {label}
      </label>
      <select
        name="brand"
        id="brand"
        value={brand}
        className="form-control"
        onChange={props.changed}
      >
        {brands}
      </select>
    </div>
  );
};

export default brandFilter;
