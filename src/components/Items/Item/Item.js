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

const Item = memo(({ item, itemSettingsCust }) => {
  // console.log("[Item] ...", itemSettingsCust);
  // INIT context
  const context = useContext(ItemContext);
  const {
    categoryArr,
    dateToday,
    categoryName,
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
    if(source && categoryName === "Press") sourceTag = (<span className="source">Source: {source}</span>);
    if(source && categoryName === "Staff") sourceTag = (<span className="source title">{source}</span>);
    
    // HISTORY
    dateHistory =
      categoryName === "History" && (price_details || date) ? (
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
        to={formatBrandLink(status, subcategoryArr.slug)}
      >
        {subcategoryArr.brand}
      </Link>
    ) : null;
    if(categoryArr.id === 12 && itemSettings.showCategoryLink && !isCustomLink){
      categoryLinkTag = <Link
      className="category"
      to={`${subcategoryArr.slug}/staff`}
    >
      {subcategoryArr.brand}
    </Link>
    }
    excerptTag =
      itemSettings.showExcerpt && excerpt ? parse(`<p>${excerpt}</p>`) : null;

    ribbonNewToday =
      itemSettings.showRibbons && status === 1 && date === dateToday ? (
        <Ribbon text="Today" class="green" />
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
