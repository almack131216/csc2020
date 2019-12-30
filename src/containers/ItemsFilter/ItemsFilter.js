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
    handleChange,
    brand,
    brandArr,
    minPrice,
    maxPrice,
    maxPriceAbs,
    priceRangeArr
  } = context;

  return (
    <div class="row row-breadcrumb filter-wrap">
      <div class="col-xs-12 col-post-breadcrumb">
        <div class="crumbs-wrap">
          <ul class="ul-breadcrumb has-3-crumbs">
            <li class="home">
              <Link to={NavData.home.slug}>
                <FaHome className="fa-home" />
                <span>{NavData.home.title}</span>
              </Link>
            </li>
            <li class="li-category-2">
              <Link to={NavData.live.slug}>
                <span>Classic Cars For Sale</span>
              </Link>
            </li>
            <li class="li-jump-menu-wrap">
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

      <div className="filter-containerXXX">
        <form className="filter-formXXX">
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
    </div>
  );
}
