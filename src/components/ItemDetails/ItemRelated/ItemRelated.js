import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { apiGetItemDetails } from "../../../assets/js/Helpers";
import Parser from "html-react-parser";
// import Item from "../../Items/Item/Item";
import { ItemContext } from "../../../Context";
import Img from "react-image";
import ImageNotFound from "../../../assets/images/image-not-found.jpg";

const ItemRelated = props => {
  console.log("[ItemRelated] related itemId = ", props.itemId);
  // INIT context
  const context = useContext(ItemContext);
  const { formatItemLink } = context;

  // API - generate end point based on categoryName + itemId
  const apiArr = {
    categoryName: "Listing",
    itemId: props.itemId
  };

  let apiUrlListing = null;
  const [itemRelated, setItemRelated] = useState({});
  const [loading, setLoading] = useState(true);

  let classesWrap = ["item-extras position-right"];
  if (props.class) classesWrap.push(props.class);

  const apiUrlRelated = apiGetItemDetails(apiArr);

  useEffect(() => {
    setLoading(true);

    fetch(apiUrlRelated)
      .then(response => response.json())
      .then(data => {
        console.log("[ItemRelated] useEffect() data: ", data);
        let [getItemRelated, ...img] = data;
        console.log(
          "[ItemRelated] useEffect() getItemRelated: ",
          getItemRelated
        );
        getItemRelated.title = getItemRelated.year
          ? `${getItemRelated.year} ${Parser(getItemRelated.name)}`
          : Parser(getItemRelated.name);
        getItemRelated.imagePath =
          process.env.REACT_APP_IMG_DIR_LARGE + getItemRelated.image;

        apiUrlListing = formatItemLink(getItemRelated);
        getItemRelated.slug = apiUrlListing;
        // getItemRelated.name = "xxx";
        // getItemRelated.slug = "xxx";
        // getItemRelated.category = 2;
        setItemRelated(getItemRelated);
        // console.log("[ItemRelated] useEffect() ItemRelated: ", ItemRelated);
        setLoading(false);
      });
  }, []);

  return (
    <div className={classesWrap.join(" ")}>
      <h5>View Listing</h5>
      {itemRelated.title ? (
        <div className="item-related">
          <Link to={itemRelated.slug}>
            <Img
              src={[itemRelated.imagePath, ImageNotFound]}
              alt={itemRelated.title}
              className="img-loading"
            />
          </Link>
          <p>
            <Link to={itemRelated.slug}>{itemRelated.title}</Link>
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default ItemRelated;
