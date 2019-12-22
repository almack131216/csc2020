import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { memo } from "react";
import Img from "react-image";
import loadingGif from "../images/gif/loading-arrow.gif";

const Item = memo(({ item }) => {
  const { id, name, image, brand, price } = item;

  // let images = require.context("../images/catalogue", true);

  const image2 = image; //require(`${image}`);
  // const imgUrl = `http://www.classicandsportscar.ltd.uk/images_catalogue/${image}`;

  const myImg = <Img src={[image2, loadingGif]} alt={name} />;

  // console.log(image);
  return (
    <article className="room">
      <div className="img-container">
        {myImg}
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
    image: PropTypes.string,
    price: PropTypes.number
  })
};
export default Item;
