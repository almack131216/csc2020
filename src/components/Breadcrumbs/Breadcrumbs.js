import React from "react";
import { useContext } from "react";
import { ItemContext } from "../../Context";
import BrandFilter from "../../components/Filter/Brand";
import NavData from "../../assets/_data/_data-navigation";
import { FaHome, FaCog, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Breadcrumbs({ items }) {
  // console.log("[Breadcrumbs.js] ItemContext...", context);
  // INIT context
  const context = useContext(ItemContext);
  const {
    filterIsActive,
    categoryArr,
    handleFilterChange,
    brand,
    brandArr,
    styleAppendClass
  } = context;
  // INIT appearance
  let catSettings = categoryArr.settings;
  let btnToggleFilter = null;
  let brandJumpList = null;
  let btnToggleFilterClasses = ["btn-toggle-filter"];
  let classForm = styleAppendClass("form-inline", "");
  let classParent = styleAppendClass("form-group", "");
  let classLabel = styleAppendClass("form-label", "display-none");
  let classControl = styleAppendClass("form-control", "form-control-sm");
  // FUNC
  const toggleFilter = e => {
    e.preventDefault();
    context.setFilterToggle();
    console.log("??? toggleFilter", catSettings.showFilter, filterIsActive);
  };
  // GET appearance
  if (catSettings) {
    if (catSettings.showFilter) {
      if (filterIsActive === true) btnToggleFilterClasses.push("active");

      btnToggleFilter = (
        <button
          className={btnToggleFilterClasses.join(" ")}
          onClick={e => {
            toggleFilter(e);
          }}
        >
          <FaCog />
        </button>
      );
    }

    brandJumpList = catSettings.showBrandList ? (
      <li className="li-jump-menu-wrap">
        <FaChevronRight />
        <form className={classForm}>
          {/* select brand */}
          <BrandFilter
            label="Make"
            classParent={classParent}
            classLabel={classLabel}
            classControl={classControl}
            brand={brand}
            items={items}
            brands={brandArr}
            changed={handleFilterChange}
          />
          {/* (END) select brand */}
        </form>
      </li>
    ) : null;
  }

  return (
    <div className="row row-breadcrumb">
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
              <FaChevronRight />
              <Link to={NavData.live.slug}>
                <span>{categoryArr.title}</span>
              </Link>
            </li>
            {brandJumpList}
          </ul>
        </div>
        {btnToggleFilter}
      </div>
    </div>
  );
}
