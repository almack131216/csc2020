import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { memo } from "react";
import Img from "react-image";
import loadingGif from "../../images/gif/loading-arrow.gif";
import "./Item.css";
import { useContext } from "react";
import { ItemContext } from "../../Context";

const Item = memo(({ item }) => {
  const context = useContext(ItemContext);
  const {
    id,
    name,
    nameSanitized,
    category,
    subcategoryArr,
    image,
    brand,
    price,
    status,
    date,
    year
  } = item;

  // let images = require.context("../images/catalogue", true);

  const image2 = image; //require(`${image}`);
  // const imgUrl = `http://www.classicandsportscar.ltd.uk/images_catalogue/${image}`;

  const myImg = <Img src={[image2, loadingGif]} alt={name} />;

  // console.log(image);
  return (
    <article className="featured-item">
      <div className="img-container">
        {/* {myImg}
        <div className="price-topXXX">
          <h3>{context.formatPrice(price)}</h3>
          <h4>{year}</h4>
          <ul>
            <li>id: {id}</li>
            <li>status: {status}</li>
            <li>nameSanitized: {nameSanitized}</li>
            <li>category: {category}</li>
            <li>
              brand: {brand} - {subcategoryArr.brand}
            </li>
            <li>date: {date}</li>
            <li>: {date}</li>
          </ul>
        </div> */}
        <Link
          to={context.formatItemLink(item)}
          className="btn-primary room-link"
        >
          features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
});

Item.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    brand: PropTypes.number.isRequired,
    image: PropTypes.string,
    price: PropTypes.number
  })
};
export default Item;
