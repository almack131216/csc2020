import React from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import Moment from "react-moment";
import PropTypes from "prop-types";
import { memo } from "react";
import Img from "react-image";
import ImageNotFound from "../../../assets/images/image-not-found.jpg";
import Ribbon from "../Ribbon/Ribbon";
import { useContext } from "react";
import { ItemContext } from "../../../Context";

/**
 * Checks if a given date string (YYYY-MM-DD) is within the past 48 hours.
 * @param {string} dateString The date string in "YYYY-MM-DD" format.
 * @returns {boolean} True if the date is within the past 48 hours, false otherwise.
 */
const isDateWithinPast48Hours = (dateString) => {
    // Parse the input date string into a Date object.
    // The YYYY-MM-DD format is a simplified ISO 8601 format and is generally well-supported 
    // by the Date constructor, though it might be interpreted as UTC or local time 
    // depending on the browser/context.
    // For reliable results, especially when time is not specified in the input string, 
    // it's best to handle timezones explicitly or assume a consistent time (e.g., midnight UTC).
    // The comparison below works based on the number of milliseconds since the Unix epoch (UTC).
    const inputDate = new Date(dateString);

    // Check for an invalid date (e.g., "2025-02-31" would be invalid).
    if (isNaN(inputDate.getTime())) {
        console.error("Invalid date string provided");
        return false;
    }

    // Get the current time in milliseconds since the Unix epoch.
    const now = Date.now();

    // Calculate the timestamp for 48 hours ago (48 hours * 60 minutes/hour * 60 seconds/minute * 1000 milliseconds/second).
    const fortyEightHoursInMillis = 72 * 60 * 60 * 1000;
    const fortyEightHoursAgo = now - fortyEightHoursInMillis;

    // Get the timestamp of the input date.
    const inputTime = inputDate.getTime();

    // Check if the input date is after or equal to the time 48 hours ago, 
    // and also check that it is not in the future.
    return inputTime >= fortyEightHoursAgo && inputTime <= now;
};

const Item = memo(({ categoryName, item, itemSettingsCust }) => {
  // console.log("[Item] ...", itemSettingsCust);
  // INIT context
  const context = useContext(ItemContext);
  const {
    categoryArr,
    // dateToday,
    // categoryName,
    formatPrice,
    formatItemLink,
    formatBrandLink
  } = context;
  // INIT item
  const {
    isCustomLink,
    slug,
    name,
    url,
    subcategoryArr,
    image,
    src,
    price,
    price_details,
    source,
    status,
    year,
    excerpt,
    date,
    // imageDir,
    // imageFilename
  } = item;
  // INIT image
  // <IMG> - shows 'image not found' graphic as fallback
  // const imgSrcLarge = `${process.env.REACT_APP_IMG_DDIR}${imageDir}/lg/${imageFilename}`;
  // const imgSrcPrimary = `${process.env.REACT_APP_IMG_DDIR}${imageDir}/pr/${imageFilename}`;
  const myImg = (
    <Img src={[image, ImageNotFound]}
      alt={name}
      className="img-loading"
      />
  );
  //srcSet={imageDir ? `${imgSrcLarge} 640w,${imgSrcPrimary} 400w` : null}
  // INIT settings.item
  let itemClass = ["item"];
  let imgClass = "card-img";
  let excerptTag = null;
  let ribbonNewToday = null;
  let ribbonSold = null;
  let classPrice = ["price"];
  let itemPrice = 0;
  let itemPriceTag = null;
  let itemYearTag = null;
  let categoryLinkTag = null;
  let sourceTag = null;
  let dateHistory = null;
  let ftrTag = null;
  let itemSettings = {};
  // SET category if not set at parent level
  let itemCategoryName = null;
  if(categoryName) itemCategoryName = categoryName;
  if(!itemCategoryName && item.categoryArr) itemCategoryName = item.categoryArr.name;
  // INIT item settings from category or custom received prop
  if (itemSettingsCust) {
    itemSettings = itemSettingsCust;
  } else {
    itemSettings = categoryArr.settings
      ? { ...categoryArr.settings.item }
      : null;
  }
  // GET settings
  if (itemSettings) {
    itemClass.push(itemSettings.layout);
    // PRESS source / STAFF source(title)
    if(source && itemCategoryName === "Press") sourceTag = (<span className="source">Source: {source}</span>);
    if(source && itemCategoryName === "Staff") sourceTag = (<span className="source title">{source}</span>);
    // HISTORY
    dateHistory =
    itemCategoryName === "History" && (price_details || date) ? (
        <span className="dateHistory">
          {
            <Moment
              date={price_details ? price_details : date}
              format="MMMM YYYY"
            />
          }
        </span>
      ) : null;

    categoryLinkTag = itemSettings.showCategoryLink && !isCustomLink ? (
      <Link
        className="category"
        to={formatBrandLink({categoryName: itemCategoryName, status: status, slug: subcategoryArr.slug})}
      >
        {subcategoryArr.brand}
      </Link>
    ) : null;

    excerptTag =
      itemSettings.showExcerpt && excerpt ? parse(`<p>${excerpt}</p>`) : null;

    ribbonNewToday =
      itemSettings.showRibbons && status === 1 && isDateWithinPast48Hours(date) ? (
        <Ribbon text="NEW" class="green" />
      ) : null;
    ribbonSold =
      itemSettings.showRibbons && status === 2 ? (
        <Ribbon text="Sold" class="red" />
      ) : null;

    if (ribbonNewToday || ribbonSold) imgClass += " corner-ribbon-wrap";
    // PRICE
    if (itemSettings.showPrice) {
      if (price !== 0) {
        itemPrice = formatPrice(price, status);
      } else {
        itemPrice = price_details;
        classPrice.push("detail");
      }
      if (status === 2) {
        itemPrice = "Sold";
        classPrice.push("sold");
      }
      itemPriceTag = <span className={classPrice.join(" ")}>{itemPrice}</span>;
    }

    itemYearTag =
      itemSettings.showYear && year ? (
        <span className="year">{year}</span>
      ) : null;

    ftrTag =
      categoryLinkTag || itemYearTag ? (
        <div className="ftr">
          {categoryLinkTag}
          {itemYearTag}
        </div>
      ) : null;
  }

  let imgLink = url ? (
    <a href={url} title={`Link to ${name} in a new window`} target="_blank" rel="noopener noreferrer">
      <Img src={[src, ImageNotFound]}
        alt={name}
        className="img-loading" 
        />
        {/* srcSet={imageDir ? `${imgSrcLarge} 640w,${imgSrcPrimary} 400w` : null} */}
    </a>
  ) : (
    <Link to={formatItemLink(item)}>{myImg}</Link>
  );

  let titleLink = url ? (
    <a href={url} title={`Link to ${name} in a new window`} target="_blank" rel="noopener noreferrer">
      {name}
    </a>
  ) : (
    <Link to={formatItemLink(item)}>{name}</Link>
  );
  if(isCustomLink){
    itemClass.push('custom-link');
    imgLink = <Link to={slug}>{myImg}</Link>;
    titleLink = <Link to={slug}>{name}</Link>;
  }

  return (
    <div className={itemClass.join(" ")}>
      <article>
        <div className={imgClass}>
          {imgLink}
          {ribbonNewToday}
          {ribbonSold}
        </div>
        <div className="card-txt">
          <h5 className="title">{titleLink}</h5>
          {dateHistory}
          {sourceTag}
          {excerptTag}
          {itemPriceTag}
          {/* {excerptTag ? categoryLinkTag : null} */}
          <span className="spacer"></span>
          {ftrTag}
        </div>
      </article>
    </div>
  );
});

Item.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    brand: PropTypes.number,
    image: PropTypes.string,
    price: PropTypes.number,
    price_details: PropTypes.string,
    excerpt: PropTypes.string,
    date: PropTypes.string
  })
};
export default Item;
