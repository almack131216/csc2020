import React from "react";
import { useContext } from "react";
import { ItemContext } from "../../Context";
import PriceFilter from "../../components/Filter/Price";
import BrandFilter from "../../components/Filter/Brand";
import NavData from "../../assets/_data/_data-navigation";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ItemsFilter({ items }) {
  const context = useContext(ItemContext);
  // console.log("[ItemsFilter.js] ItemContext...", context);
  const {
    categoryName,
    categoryArr,
    handleChange,
    brand,
    brandArr,
    minPrice,
    maxPrice,
    maxPriceAbs,
    priceRangeArr
  } = context;

  return (
    <div className="row row-breadcrumb">
      <form>
        <div className="col-xs-12 col-post-breadcrumb">
          <div className="crumbs-wrap">
            <ul className="ul-breadcrumb has-3-crumbs">
              <li className="home">
                <Link to={NavData.home.slug}>
                  <FaHome className="fa-home" />
                  <span>{NavData.home.title}</span>
                </Link>
              </li>
              <li className="li-category-2">
                <Link to={NavData.live.slug}>
                  <span>
                    {categoryArr.title} [{categoryName}]
                  </span>
                </Link>
              </li>
              <li className="li-jump-menu-wrap">
                {/* select brand */}
                <BrandFilter
                  brand={brand}
                  items={items}
                  brands={brandArr}
                  changed={handleChange}
                />
                {/* (END) select brand */}
              </li>
            </ul>
          </div>
        </div>

        <div className="filter-wrap">
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
      </form>
    </div>
  );
}
