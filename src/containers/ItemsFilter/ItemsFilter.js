import React from "react";
import { useContext } from "react";
import { ItemContext } from "../../Context";
import PriceFilter from "../../components/Filter/Price";
import YearFilter from "../../components/Filter/Year";

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
    maxPriceInit,
    minYear,
    minYearInit,
    maxYear,
    maxYearInit,
    priceRangeArr
  } = context;

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
                  maxPriceInit={maxPriceInit}
                  changed={handleChange}
                />
              ) : null}
              {/* (END) price */}
            </div>
            <div className="filter-column">
              <YearFilter
                label="Year"
                minYear={minYear}
                minYearInit={minYearInit}
                maxYear={maxYear}
                maxYearInit={maxYearInit}
                changed={handleChange}
              />
              {/* (END) year */}
            </div>
          </div>
        </div>
      </form>
    </div>
  ) : null;
}
