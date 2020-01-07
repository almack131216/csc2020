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
    sortRangeArr,
    styleAppendClass,
    formatPrice
  } = context;

  // STYLE
  let classForm = styleAppendClass("form-inline", "");
  let classParent = styleAppendClass("form-group", "");
  let classLabel = styleAppendClass("form-label", "");
  let classControl = styleAppendClass("form-control", "form-control-sm");
  // (END) STYLE

  return showFilter === true ? (
    <form className={classForm}>
      <div className="row row-filter">
        {categoryName === "Live" ? (
          <div className="col-xs-4 col-post-filter two-control">
            <PriceFilter
              label="Price"
              funcFormatPrice={formatPrice}
              classParent={classParent}
              classLabel={classLabel}
              classControl={classControl}
              priceRange={priceRangeArr}
              minPrice={minPrice}
              maxPrice={maxPrice}
              maxPriceInit={maxPriceInit}
              changed={handleFilterChange}
            />
          </div>
        ) : null}
        {/* (END) price */}

        <div className="col-xs-4 col-post-filter two-control">
          <YearFilter
            label="Year"
            classParent={classParent}
            classLabel={classLabel}
            classControl={classControl}
            minYear={minYear}
            minYearInit={minYearInit}
            maxYear={maxYear}
            maxYearInit={maxYearInit}
            changed={handleFilterChange}
          />
          {/* (END) year */}
        </div>
        <div className="col-xs-4 col-post-filter one-control">
          <SortFilter
            label="Order"
            classParent={classParent}
            classLabel={classLabel}
            classControl={classControl}
            sortRangeArr={sortRangeArr}
            sortBy={sortBy}
            changed={handleFilterChange}
          />
          {/* (END) sort */}
        </div>
      </div>
    </form>
  ) : null;
}
