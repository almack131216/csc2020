import React from "react";

const priceFilter = props => {
  const priceRange = props.priceRange;
  const maxPriceRounded = props.maxPriceAbs;

  let minPriceArr = priceRange.filter(item => item < props.maxPrice);
  let maxPriceArr = priceRange.filter(item => item > props.minPrice);
  maxPriceArr = [...maxPriceArr, maxPriceRounded]; //(value / 1000).toFixed() * 1000
  console.log("[Filters > Price.js] minPriceArr...", minPriceArr);

  return (
    <div className="form-groupXXX">
      <label htmlFor="price">
        price (max: {props.minPrice}:{props.maxPrice} -> {maxPriceRounded} [ ])
      </label>
      <div className="size-inputsXXX">
        <select
          name="minPrice"
          id="price"
          onChange={props.changed}
          value={props.minPrice}
        >
          {minPriceArr.map((price, index) => (
            <option key={index} value={price}>
              {price}
            </option>
          ))}
        </select>
        <select
          name="maxPrice"
          id="price"
          onChange={props.changed}
          value={props.maxPrice}
        >
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
