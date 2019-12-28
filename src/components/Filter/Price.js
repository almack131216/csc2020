import React from "react";

const priceFilter = props => {
  const priceRange = props.priceRange;
  const minPriceArr = props.priceRange;
  let maxPriceArr = priceRange.filter(item => item > props.minPrice);
  console.log("[Filters > Price.js] minPriceArr...", minPriceArr);

  return (
    <div className="form-groupXXX">
      <label htmlFor="price">price</label>
      <div className="size-inputsXXX">
        <select name="minPrice" id="price" onChange={props.changed}>
          {minPriceArr.map((price, index) => (
            <option key={index} value={price}>
              {price}
            </option>
          ))}
        </select>
        <select name="maxPrice" id="price" onChange={props.changed}>
          {maxPriceArr.map((price, index) => (
            <option key={index} value={price}>
              {price}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default priceFilter;
