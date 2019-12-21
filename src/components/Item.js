import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
import PropTypes from "prop-types";
import { memo } from "react";
const baseUrl = "../images/catalogue/";

const Item = memo(({ item }) => {
  const { id, name, image, brand, year, price } = item;

  // let imgSrc = require(`../images/catalogue/${image}`);

  // console.log(name);
  return (
    <article className="room">
      <div className="img-container">
        <img src={require(baseUrl + image) || defaultImg} alt={name} />
        <div className="price-top">
          <h6>${price}</h6>
          <p>{brand}</p>
        </div>
        <Link to={`/items/${id}`} className="btn-primary room-link">
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
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  })
};
export default Item;
