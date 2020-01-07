import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { memo } from "react";
import Img from "react-image";
import ImageNotFound from "../../assets/images/image-not-found.jpg";
import Ribbon from "./Ribbon/Ribbon";
import { useContext } from "react";
import { ItemContext } from "../../Context";

const Item = memo(({ item }) => {
  const context = useContext(ItemContext);
  const {
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
    status,
    year,
    date
  } = item;

  // IMG - shows 'image not found' graphic as fallback
  const myImg = (
    <Img src={[image, ImageNotFound]} alt={name} className="img-loading" />
  );
  // RIBBINS
  let ribbonNewToday =
    status === 1 && date === dateToday ? (
      <Ribbon text="Today" class="green" />
    ) : null;
  let ribbonSold = status === 2 ? <Ribbon text="Sold" class="red" /> : null;
  let imgClass = "card-img";
  if (ribbonNewToday || ribbonSold) imgClass += " corner-ribbon-wrap";
  // PRICE
  let classPrice = ["price"];
  let itemPrice = 0;

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

  return (
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
        <span className={classPrice.join(" ")}>{itemPrice}</span>
      </div>
      <div className="card-ftr">
        <Link
          className="category"
          to={formatBrandLink(categoryName, subcategoryArr.slug)}
        >
          {subcategoryArr.brand}
        </Link>
        <span className="year">{year}</span>
      </div>
    </article>
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
    date: PropTypes.string
  })
};
export default Item;
