import React from "react";
import { useContext } from "react";
import { ItemContext } from "../../Context";
import BrandFilter from "../../components/Filter/Brand";
import NavData from "../../assets/_data/_data-navigation";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Breadcrumbs({ items }) {
  const context = useContext(ItemContext);
  // console.log("[Breadcrumbs.js] ItemContext...", context);
  const {
    categoryName,
    categoryArr,
    handleChange,
    showFilter,
    brand,
    brandArr
  } = context;

  let toggleFilter = e => {
    e.preventDefault();
    context.setFilterToggle();
    console.log("??? toggleFilter", showFilter);
  };
  console.log("!!! toggleFilter", showFilter);

  return (
    <div className="row row-breadcrumb row-filter">
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
                  label={"Make"}
                  brand={brand}
                  items={items}
                  brands={brandArr}
                  changed={handleChange}
                />
                {/* (END) select brand */}
              </li>
            </ul>
          </div>
          <button
            onClick={e => {
              toggleFilter(e);
            }}
          >
            filter {showFilter ? "visible" : "hidden"}
          </button>
        </div>
      </form>
    </div>
  );
}
