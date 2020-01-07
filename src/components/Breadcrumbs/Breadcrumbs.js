import React from "react";
import { useContext } from "react";
import { ItemContext } from "../../Context";
import BrandFilter from "../../components/Filter/Brand";
import NavData from "../../assets/_data/_data-navigation";
import { FaHome, FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Breadcrumbs({ items }) {
  const context = useContext(ItemContext);
  // console.log("[Breadcrumbs.js] ItemContext...", context);
  const {
    categoryName,
    categoryArr,
    handleFilterChange,
    showFilter,
    brand,
    brandArr,
    styleAppendClass
  } = context;
  // STYLE
  let classForm = styleAppendClass("form-inline", "");
  let classParent = styleAppendClass("form-group", "");
  let classLabel = styleAppendClass("form-label", "display-none");
  let classControl = styleAppendClass("form-control", "form-control-sm");
  // (END) STYLE

  let toggleFilter = e => {
    e.preventDefault();
    context.setFilterToggle();
    console.log("??? toggleFilter", showFilter);
  };
  console.log("!!! toggleFilter", showFilter);

  let btnToggleFilterClasses = ["btn-toggle-filter"];
  if (showFilter) btnToggleFilterClasses.push("active");

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
              <Link to={NavData.live.slug}>
                <span>
                  {categoryArr.title} [{categoryName}]
                </span>
              </Link>
            </li>
            <li className="li-jump-menu-wrap">
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
          </ul>
        </div>
        <button
          className={btnToggleFilterClasses.join(" ")}
          onClick={e => {
            toggleFilter(e);
          }}
        >
          <FaCog />
        </button>
      </div>
    </div>
  );
}
