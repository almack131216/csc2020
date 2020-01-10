import React from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import PropTypes from "prop-types";
import { memo } from "react";
import Img from "react-image";
import ImageNotFound from "../../assets/images/image-not-found.jpg";
import Ribbon from "./Ribbon/Ribbon";
import { useContext } from "react";
import { ItemContext } from "../../Context";

const Item = memo(({ item, layout }) => {
  const context = useContext(ItemContext);
  const {
    isStockPage,
    dateToday,
    categoryName,
    formatPrice,
    formatItemLink,
    formatBrandLink
  } = context;
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

  // IMG - shows 'image not found' graphic as fallback
  const myImg = (
    <Img src={[image, ImageNotFound]} alt={name} className="img-loading" />
  );
  // BASE vars
  let itemClass = ["card"];
  itemClass.push(layout);

  let imgClass = "card-img";
  let ribbonNewToday = null;
  let ribbonSold = null;
  let classPrice = ["price"];
  let itemPrice = 0;
  let itemPriceTag = null;
  let ftrTag = null;
  let categoryLinkTag = (
    <Link
      className="category"
      to={formatBrandLink(categoryName, subcategoryArr.slug)}
    >
      {subcategoryArr.brand}
    </Link>
  );
  let excerptTag = !isStockPage ? parse(`<p>${excerpt}</p>`) : null;
  // RIBBONS
  if (isStockPage) {
    ribbonNewToday =
      status === 1 && date === dateToday ? (
        <Ribbon text="Today" class="green" />
      ) : null;
    ribbonSold = status === 2 ? <Ribbon text="Sold" class="red" /> : null;

    if (ribbonNewToday || ribbonSold) imgClass += " corner-ribbon-wrap";
    // PRICE
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
    ftrTag = (
      <div className="card-ftr">
        {categoryLinkTag}
        <span className="year">{year}</span>
      </div>
    );
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
          <span className="source">Source: {source}</span>
          {excerptTag}
          {itemPriceTag}
          {excerptTag ? categoryLinkTag : null}
        </div>
        {ftrTag}
      </article>
    </div>
  );
});

Item.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    brand: PropTypes.number.isRequired,
    image: PropTypes.string,
    price: PropTypes.number,
    price_details: PropTypes.string,
    excerpt: PropTypes.string,
    date: PropTypes.string
  })
};
export default Item;
