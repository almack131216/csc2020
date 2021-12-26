import React from "react";
import { useContext } from "react";
import { ItemContext } from "../../Context";
import BrandFilter from "../../components/Filter/Brand";
import NavData from "../../assets/_data/_data-navigation";
import { FaHome, FaFilter, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { StripOpeningSlash } from '../../assets/js/Helpers';

export default function Breadcrumbs({ items, crumbsArr, pageType }) {
  // console.log("[Breadcrumbs] ItemContext...", items, crumbsArr);

  // INIT context
  const context = useContext(ItemContext);
  const {
    filterIsActive,
    categoryArr,
    subcategoryArr,
    brandArr,
    styleAppendClass
  } = context;

  let crumbCount = 1; // home
  if (!crumbsArr && categoryArr) {
    crumbsArr = [
      {
        title: categoryArr.title,
        slug: categoryArr.slug,
        class: categoryArr.class
      }
    ];
  }

  const dynamicCrumbs =
    crumbsArr &&
    crumbsArr.map((item, index) => {
      // console.log("[Breadcrumbs] ", item.title, " | " + item.name);
      return item.title ? (
        <li key={index} className={item.class ? item.class : ""}>
          <FaChevronRight />
          {index < crumbsArr.length - 1 ? (
            <Link to={item.slug} className="crumb-resp">
              <span>{item.title}</span>
            </Link>
          ) : (
            <span className="crumb-resp">
              <span>{item.title}</span>
            </span>
          )}
        </li>
      ) : null;
    });
  crumbCount += crumbsArr.length;

  // INIT appearance
  let catSettings = categoryArr.settings;
  let brandJumpList = null;
  let btnToggleFilter = null;
  let btnToggleFilterClasses = ["btn icon-md btn-toggle-filter"];

  let showFilter = false;
  let showBrandList = false;
  const slugBase = categoryArr.slug ? StripOpeningSlash(categoryArr.slug) : null;
  const slugAppendBrand = categoryArr.slugAppendBrand ? categoryArr.slugAppendBrand : null;

  switch (pageType) {
    case "item-details":
      showFilter = false;
      showBrandList = false;
      break;

    case "items-list":
      if (catSettings && catSettings.showFilter) showFilter = true;
      if (catSettings && catSettings.showBrandList) showBrandList = true;
      break;

    default:
      showFilter = false;
      showBrandList = false;
  }

  // FUNC
  const toggleFilter = e => {
    e.preventDefault();
    context.setFilterToggle();
  };
  // GET appearance
  if (showFilter) {
    crumbCount += 1;
    if (filterIsActive === true) btnToggleFilterClasses.push("active");

    btnToggleFilter = (
      <button
        className={btnToggleFilterClasses.join(" ")}
        onClick={e => {
          toggleFilter(e);
        }}
      >
        <FaFilter />
      </button>
    );
  }

  // brandlist
  if (showBrandList) {
    // STYLE
    let classForm = styleAppendClass("form-inline", "");
    let classParent = styleAppendClass("form-group", "");
    let classLabel = styleAppendClass("form-label", "");
    let classControl = styleAppendClass("form-control", "form-control-sm");
    // (END) STYLE

    brandJumpList = (
      <li className="li-jump-menu-wrap">
        <FaChevronRight />
        <form className={classForm}>
          {/* select brand */}
          <BrandFilter
            label="Make"
            classParent={classParent}
            classLabel={classLabel}
            classControl={classControl}
            brand={subcategoryArr.slug}
            brands={brandArr}
            categorySlugsArr={
              {
                base: slugBase,
                appendBrand: slugAppendBrand
              }
            }
          />
          {/* (END) select brand */}
        </form>
      </li>
    );
  }

  // UI - better control styling of breadcrumbs - especially for responsive
  let classCrumbsUl = [];
  classCrumbsUl.push(`has-${crumbCount}-crumbs`);

  return (
    <div className="row row-breadcrumb">
      <div className="col-xs-12 col-post-breadcrumb">
        <div className="crumbs-wrap">
          <ul className={classCrumbsUl.join(" ")}>
            <li className="home">
              <Link to={NavData.home.slug}>
                <FaHome className="i-home" />
                <span>{NavData.home.title}</span>
              </Link>
            </li>
            {dynamicCrumbs}
            {brandJumpList}
          </ul>
        </div>
        {btnToggleFilter}
      </div>
    </div>
  );
}
