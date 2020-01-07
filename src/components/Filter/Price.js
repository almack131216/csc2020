import React from "react";

const priceFilter = props => {
  const funcFormatPrice = props.funcFormatPrice;
  const priceRange = props.priceRange;
  const maxPriceRounded = props.maxPriceInit;
  const label = props.label ? props.label : "Select";
  // STYLE // get styling from filter container
  let classParent = props.classParent;
  let classLabel = props.classLabel;
  let classControl = props.classControl;
  // (END) STYLE
  let minPriceArr = priceRange.filter(item => item < props.maxPrice);
  let maxPriceArr = priceRange.filter(item => item > props.minPrice);
  maxPriceArr = [...maxPriceArr, maxPriceRounded]; //(value / 1000).toFixed() * 1000
  console.log("[Filters > Price.js] minPriceArr...", minPriceArr);

  return (
    <div className={classParent}>
      <label htmlFor="price" className={classLabel}>
        {label}
        {/* price (max: {props.minPrice}:{props.maxPrice} -> {maxPriceRounded} [ ]) */}
      </label>
      <select
        name="minPrice"
        id="minPrice"
        className={classControl}
        onChange={props.changed}
        value={props.minPrice}
      >
        {minPriceArr.map((price, index) => (
          <option key={index} value={price}>
            {funcFormatPrice(price)}
          </option>
        ))}
      </select>
      <select
        name="maxPrice"
        id="maxPrice"
        className={classControl}
        onChange={props.changed}
        value={props.maxPrice}
      >
        {maxPriceArr.map((price, index) => (
          <option key={index} value={price}>
            {funcFormatPrice(price)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default priceFilter;
