import React from "react";
import { useContext } from "react";
import { ItemContext } from "../Context";
import Title from "../components/Title";

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
    <section className="filter-container">
      <Title title="search items" />
      <form className="filter-form">
        {/* select brand */}
        <div className="form-group">
          <label htmlFor="brand">item brand</label>
          <select
            name="brand"
            id="brand"
            value={brand}
            className="form-control"
            onChange={handleChange}
          >
            {brands}
          </select>
        </div>
        {/* (END) select type */}
        {/* size */}
        <div className="form-group">
          <label htmlFor="price">price</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minPrice"
              id="price"
              value={minPrice}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxPrice"
              id="price"
              value={maxPrice}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/* (END) size */}
        {/* extras */}
        <div className="form-group"></div>
        {/* (END) extras */}
      </form>
    </section>
  );
}
