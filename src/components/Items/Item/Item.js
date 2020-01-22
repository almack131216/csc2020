import React from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import PropTypes from "prop-types";
import { memo } from "react";
import Img from "react-image";
import ImageNotFound from "../../../assets/images/image-not-found.jpg";
import Ribbon from "../Ribbon/Ribbon";
import { useContext } from "react";
import { ItemContext } from "../../../Context";

const Item = memo(({ item, itemSettingsCust }) => {
  // console.log("[Item.js] ...", itemSettingsCust);
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
    name,
    subcategoryArr,
    image,
    price,
    price_details,
    source,
    status,
    year,
    excerpt,
    date
  } = item;
  // INIT image
  // <IMG> - shows 'image not found' graphic as fallback
  const myImg = (
    <Img src={[image, ImageNotFound]} alt={name} className="img-loading" />
  );
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
    // PRESS
    sourceTag =
      categoryName === "Press" && source ? (
        <span className="source">Source: {source}</span>
      ) : null;

    categoryLinkTag = itemSettings.showCategoryLink ? (
      <Link
        className="category"
        to={formatBrandLink(categoryName, subcategoryArr.slug)}
      >
        {subcategoryArr.brand}
      </Link>
    ) : null;
    excerptTag = itemSettings.showExcerpt ? parse(`<p>${excerpt}</p>`) : null;

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
        itemPrice = formatPrice(price);
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

  return (
    <div className={itemClass.join(" ")}>
      <article>
        <div className={imgClass}>
          <Link to={formatItemLink(item)}>{myImg}</Link>
          {ribbonNewToday}
          {ribbonSold}
        </div>
        <div className="card-txt">
          <h5 className="title">
            <Link to={formatItemLink(item)}>{name}</Link>
          </h5>
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
