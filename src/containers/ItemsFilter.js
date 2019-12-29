import React from "react";
import { useContext } from "react";
import { ItemContext } from "../Context";
import PriceFilter from "../components/Filter/Price";
import BrandFilter from "../components/Filter/Brand";

export default function ItemsFilter({ items }) {
  const context = useContext(ItemContext);
  // console.log("[ItemsFilter.js] ItemContext...", context);
  const {
    categoryName,
    handleChange,
    brand,
    brandArr,
    minPrice,
    maxPrice,
    maxPriceAbs,
    priceRangeArr
  } = context;

  return (
    <div className="filter-containerXXX">
      <form className="filter-formXXX">
        {/* select brand */}
        <BrandFilter
          brand={brand}
          items={items}
          brands={brandArr}
          changed={handleChange}
        />
        {/* (END) select type */}
        {categoryName === "Live" ? (
          <PriceFilter
            priceRange={priceRangeArr}
            minPrice={minPrice}
            maxPrice={maxPrice}
            maxPriceAbs={maxPriceAbs}
            changed={handleChange}
          />
        ) : null}
        {/* extras */}
        <div className="form-group"></div>
        {/* (END) extras */}
      </form>
    </div>
  );
}
