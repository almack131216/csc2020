import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { memo } from "react";
import Img from "react-image";
import loadingGif from "../../images/gif/loading-arrow.gif";
import { useContext } from "react";
import { ItemContext } from "../../Context";

const Item = memo(({ item }) => {
  const context = useContext(ItemContext);
  const {
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
    year
  } = item;

  // let images = require.context("../images/catalogue", true);

  const image2 = image; //require(`${image}`);
  // const imgUrl = `http://www.classicandsportscar.ltd.uk/images_catalogue/${image}`;

  const myImg = (
    <Img
      src={[image2, loadingGif]}
      alt={name}
      className="css-grid__img top img-responsive"
    />
  );

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

  // console.log(image);
  return (
    <article className="card">
      <div className="card-img">
        <Link to={formatItemLink(item)}>{myImg}</Link>
      </div>
      <div className="card-txt">
        <h5 className="title">
          <Link to={formatItemLink(item)}>{name}</Link>
        </h5>
        <span className={classPrice.join(" ")}>{itemPrice}</span>
        <h4 className="category">
          <Link to={formatBrandLink(categoryName, subcategoryArr.slug)}>
            {subcategoryArr.brand}
          </Link>
        </h4>
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
    price_details: PropTypes.string
  })
};
export default Item;
