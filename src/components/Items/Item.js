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
    status
  } = item;

  // let images = require.context("../images/catalogue", true);

  const image2 = image; //require(`${image}`);
  // const imgUrl = `http://www.classicandsportscar.ltd.uk/images_catalogue/${image}`;

  const myImg = <Img src={[image2, loadingGif]} alt={name} />;

  // console.log(image);
  return (
    <article className="featured-item">
      <div className="img-containerXXX">
        {myImg}
        <div className="price-topXXX">
          <h6>{context.formatPrice(price)}</h6>
          <p>
            {status}: {brand} - {subcategoryArr.brand}
          </p>
        </div>
        <Link
          to={context.formatItemLink(item)}
          className="btn-primaryXXX room-linkXXX"
        >
          features
        </Link>
      </div>
      <p className="room-infoXXX">{name}</p>
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
