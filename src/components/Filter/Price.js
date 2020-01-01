import React from "react";

const priceFilter = props => {
  const priceRange = props.priceRange;
  const maxPriceRounded = props.maxPriceAbs;
  const className = props.class ? props.class : "form-group";
  const label = props.label ? props.label : "Select";
  const labelClass = props.labelClass ? props.labelClass : "display-none";

  let minPriceArr = priceRange.filter(item => item < props.maxPrice);
  let maxPriceArr = priceRange.filter(item => item > props.minPrice);
  maxPriceArr = [...maxPriceArr, maxPriceRounded]; //(value / 1000).toFixed() * 1000
  console.log("[Filters > Price.js] minPriceArr...", minPriceArr);

  return (
    <div className={className}>
      <label htmlFor="price" className={labelClass}>
        {label}
        {/* price (max: {props.minPrice}:{props.maxPrice} -> {maxPriceRounded} [ ]) */}
      </label>
      <div className="size-inputsXXX">
        <select
          name="minPrice"
          id="price"
          className="form-control"
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
          className="form-control"
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
