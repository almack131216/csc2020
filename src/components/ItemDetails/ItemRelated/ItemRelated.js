import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { apiGetItemDetails } from "../../../assets/js/Helpers";
import Parser from "html-react-parser";
// import Item from "../../Items/Item/Item";
import { ItemContext } from "../../../Context";
import Img from "react-image";
import ImageNotFound from "../../../assets/images/image-not-found.jpg";

const ItemRelated = props => {
  const itemId = props.itemId[0];
  console.log("[ItemRelated] related itemId = ", props.itemId, itemId);

  // INIT context
  const context = useContext(ItemContext);
  const { formatItemLink } = context;

  // API - generate end point based on categoryName + itemId
  const apiArr = {
    categoryName: "Listing",
    itemId: itemId
  };
  console.log("[ItemRelated] apiArr = ", apiArr);

  let apiUrlListing = null;
  const [itemRelated, setItemRelated] = useState({});
  const [loading, setLoading] = useState(true);
  const [irTitle, setIrTitle] = useState("");

  let classesWrap = ["item-extras item-related"];
  if (props.class) classesWrap.push(props.class);

  const apiUrlRelated = apiGetItemDetails(apiArr);
  console.log("[ItemRelated] apiUrlRelated: ", apiUrlRelated);

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

        switch (getItemRelated.category) {
          case 1:
            setIrTitle("This car is for sale");
            break;
          case 2:
            setIrTitle("View Listing");
            break;
          case 3:
            setIrTitle("Testimonial from owner...");
            break;
        }
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
      <h5>{irTitle}</h5>
      {itemRelated.title ? (
        <div className="ir-wrap">
          <div className="ir-img">
            <Link to={itemRelated.slug}>
              <Img
                src={[itemRelated.imagePath, ImageNotFound]}
                alt={itemRelated.title}
                className="img-loading"
              />
            </Link>
          </div>
          <div className="ir-txt">
            <p>
              <Link to={itemRelated.slug}>{itemRelated.title}</Link>
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ItemRelated;
