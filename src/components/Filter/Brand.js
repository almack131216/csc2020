import React from "react";

const brandFilter = props => {
  const brand = props.brand; //get active brand

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
    <div className="form-group">
      <label htmlFor="brand">{props.label}</label>
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
