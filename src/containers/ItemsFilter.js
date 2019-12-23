import React from "react";
import { useContext } from "react";
import { ItemContext } from "../Context";

// get all unique values
const getUnique = (getItems, value) => {
  return [...new Set(getItems.map(item => item[value]))];
};

export default function ItemsFilter({ items }) {
  const context = useContext(ItemContext);
  // console.log("[ItemsFilter.js] ItemContext...", context);
  const { handleChange, brand, minPrice, maxPrice } = context;

  // get unique types
  let brands = getUnique(items, "brand");
  // add all
  brands = ["all", ...brands];
  // map to jsx
  brands = brands.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  return (
    <div className="filter-containerXXX">
      <form className="filter-formXXX">
        {/* select brand */}
        <div className="form-groupXXX">
          <label htmlFor="brand">item brand</label>
          <select
            name="brand"
            id="brand"
            value={brand}
            className="form-controlXXX"
            onChange={handleChange}
          >
            {brands}
          </select>
        </div>
        {/* (END) select type */}
        {/* size */}
        <div className="form-groupXXX">
          <label htmlFor="price">price</label>
          <div className="size-inputsXXX">
            <input
              type="number"
              name="minPrice"
              id="price"
              value={minPrice}
              onChange={handleChange}
              className="size-inputXXX"
            />
            <input
              type="number"
              name="maxPrice"
              id="price"
              value={maxPrice}
              onChange={handleChange}
              className="size-inputXXX"
            />
          </div>
        </div>
        {/* (END) size */}
        {/* extras */}
        <div className="form-group"></div>
        {/* (END) extras */}
      </form>
    </div>
  );
}
