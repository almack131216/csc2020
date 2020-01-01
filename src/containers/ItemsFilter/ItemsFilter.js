import React from "react";
import { useContext } from "react";
import { ItemContext } from "../../Context";
import PriceFilter from "../../components/Filter/Price";
import YearFilter from "../../components/Filter/Year";
import SortFilter from "../../components/Filter/Sort";

export default function ItemsFilter({ items }) {
  const context = useContext(ItemContext);
  // console.log("[ItemsFilter.js] ItemContext...", context);
  const {
    categoryName,
    handleFilterChange,
    showFilter,
    minPrice,
    maxPrice,
    maxPriceInit,
    minYear,
    minYearInit,
    maxYear,
    maxYearInit,
    priceRangeArr,
    sortBy,
    sortRangeArr
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
                  changed={handleFilterChange}
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
                changed={handleFilterChange}
              />
              {/* (END) year */}
            </div>
            <div className="filter-column">
              <SortFilter
                sortRangeArr={sortRangeArr}
                sortBy={sortBy}
                changed={handleFilterChange}
              />
              {/* (END) sort */}
            </div>
          </div>
        </div>
      </form>
    </div>
  ) : null;
}
