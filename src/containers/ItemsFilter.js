import React from "react";
import { useContext } from "react";
import { ItemContext } from "../Context";
import PriceFilter from "../components/Filter/Price";

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
        <PriceFilter
          priceRange={[0, 5000, 10000, 20000, 30000, 40000, 100000]}
          minPrice={minPrice}
          maxPrice={maxPrice}
          changed={handleChange}
        />
        {/* extras */}
        <div className="form-group"></div>
        {/* (END) extras */}
      </form>
    </div>
  );
}
