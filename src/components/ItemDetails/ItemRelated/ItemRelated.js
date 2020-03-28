import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { apiGetItemDetails } from "../../../assets/js/Helpers";
import Parser from "html-react-parser";
// import Item from "../../Items/Item/Item";
import { ItemContext } from "../../../Context";
import Img from "react-image";
import ImageNotFound from "../../../assets/images/image-not-found.jpg";
import Loading from "../../../components/Loading/Loading";

const PrintItem = props => {
  const item = props.item;
  const title = item.year
    ? `${item.year} ${Parser(item.name)}`
    : Parser(item.name);
  const imagePath = process.env.REACT_APP_IMG_DIR_LARGE + item.image;

  return (
    <div className="ir-wrap">
      <div className="ir-img">
        <Link to={props.url}>
          <Img
            src={[imagePath, ImageNotFound]}
            alt={title}
            className="img-loading"
          />
        </Link>
      </div>
      <div className="ir-txt">
        <p>
          <Link to={props.url}>{title}</Link>
        </p>
      </div>
    </div>
  );
};

const ItemRelated = props => {
  const itemIds = props.itemIds;
  console.log("[ItemRelated] related itemId = ", props.itemIds, itemIds);

  // INIT context
  const context = useContext(ItemContext);
  const { formatItemLink } = context;

  // API - generate end point based on categoryName + itemId
  const apiArr = {
    categoryName: "ItemRelated",
    itemId: itemIds.length === 1 ? itemIds : null,
    itemIds: itemIds.length > 1 ? itemIds : null
  };
  console.log("[ItemRelated] apiArr = ", apiArr);

  const [itemsRelated, setItemsRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [irTitle, setIrTitle] = useState("");

  let classesWrap = ["item-extras item-related"];
  if (props.class) classesWrap.push(props.class);

  const apiUrlRelated = apiGetItemDetails(apiArr);
  console.log("[ItemRelated] apiUrlRelated: ", apiUrlRelated);

  // FETCH data
  useEffect(() => {
    setLoading(true);

    fetch(apiUrlRelated)
      .then(response => response.json())
      .then(data => {
        console.log("[ItemRelated] useEffect() data: ", data);
        let [...getItemsRelated] = [...data];
        console.log(
          "[ItemRelated] useEffect() getItemsRelated: ",
          getItemsRelated
        );

        switch (getItemsRelated[0].category) {
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

        setItemsRelated(getItemsRelated);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className={classesWrap.join(" ")}>
      <h5>{irTitle}</h5>
      {/* <p>!!!{itemsRelated ? itemsRelated : "xxxxxxx"}</p> */}
      {itemsRelated.map((item, index) => {
        return <PrintItem key={index} item={item} url={formatItemLink(item)} />;
      })}
    </div>
  );
};

export default ItemRelated;
