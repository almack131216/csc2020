import React from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import Img from "react-image";
import ImageNotFound from "../../../assets/images/image-not-found.jpg";

const ItemLite = ({item, itemSettingsCust}) => {
  // console.log("[ItemLite.js] ...", itemSettingsCust);
  // INIT item
  const {
    name,
    slug,
    image,
    excerpt
  } = item;
  // INIT image
  // <IMG> - shows 'image not found' graphic as fallback
  const myImg = (
    <Img src={[image, ImageNotFound]} alt={name} className="img-loading" />
  );
  // INIT settings.item
  let itemClass = ["item"];
  let imgClass = "card-img";
  let excerptTag = null;
  let itemSettings = {};
  // INIT item settings from category or custom received prop

  // GET settings
  if (itemSettingsCust) {
    itemSettings = itemSettingsCust;
    itemClass.push(itemSettings.layout);
  }
  
  excerptTag = excerpt ? parse(`<p>${excerpt}</p>`) : null;

  const imgLink = <Link to={slug}>{myImg}</Link>;
  const titleLink = <Link to={slug}>{name}</Link>;

  return (
    <div className={itemClass.join(" ")}>
      <article>
        <div className={imgClass}>
          {imgLink}
        </div>
        <div className="card-txt">
          <h5 className="title">{titleLink}</h5>
          {excerptTag}
          <span className="spacer"></span>
        </div>
      </article>
    </div>
  );
};


export default ItemLite;
