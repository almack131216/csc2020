import React from "react";
import { useContext } from "react";
import { ItemContext } from "../../Context";
import PriceFilter from "../../components/Filter/Price";

export default function ItemsFilter({ items }) {
  const context = useContext(ItemContext);
  // console.log("[ItemsFilter.js] ItemContext...", context);
  const {
    categoryName,
    categoryArr,
    handleChange,
    showFilter,
    brand,
    brandArr,
    minPrice,
    maxPrice,
    maxPriceAbs,
    priceRangeArr
  } = context;

  let toggleFilter = e => {
    e.preventDefault();
    context.setFilterToggle();
    console.log("??? toggleFilter", showFilter);
  };
  console.log("!!! toggleFilter", showFilter);

  return showFilter === true ? (
    <div className="row row-breadcrumb row-filter">
      <form>
        <div className="col-xs-12 col-post-filter">
          <div className="filter-wrap">
            <div className="filter-column">
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
            </div>
          </div>
        </div>
      </form>
    </div>
  ) : null;
}
