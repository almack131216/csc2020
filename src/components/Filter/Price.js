import React from "react";

const priceFilter = props => {
  const priceRange = props.priceRange;
  const maxPriceRounded = props.maxPriceInit;
  const label = props.label ? props.label : "Select";

  let classParent = [];
  classParent.push("form-group");
  if (props.classParent) {
    classParent.push(props.classParent);
  }

  let classLabel = [];
  if (props.classLabel) {
    classLabel.push(props.classLabel);
  }

  let minPriceArr = priceRange.filter(item => item < props.maxPrice);
  let maxPriceArr = priceRange.filter(item => item > props.minPrice);
  maxPriceArr = [...maxPriceArr, maxPriceRounded]; //(value / 1000).toFixed() * 1000
  console.log("[Filters > Price.js] minPriceArr...", minPriceArr);

  return (
    <div className={classParent.join(" ")}>
      <label htmlFor="price" className={classLabel.join(" ")}>
        {label}
        {/* price (max: {props.minPrice}:{props.maxPrice} -> {maxPriceRounded} [ ]) */}
      </label>
      <div className="size-inputs">
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
