import React from "react";
import { Link } from "react-router-dom";
import { FaCamera, FaInfoCircle } from "react-icons/fa";
// react-share | buttons
import {
  EmailShareButton,
  FacebookShareButton,
  PinterestShareButton,
  TwitterShareButton,
  WhatsappShareButton
} from "react-share";
// react-share | icons
import {
  EmailIcon,
  FacebookIcon,
  PinterestIcon,
  TwitterIcon,
  WhatsappIcon
} from "react-share";
// (END) react-share

const ItemExtras = props => {
  const {
    id,
    name,
    price,
    price_details,
    priceFormatted,
    status,
    itemPath,
    imagePath,
    category
  } = props.itemArr;

  let priceRow = null;
  let classesWrap = ["item-extras"];
  if (props.class) classesWrap.push(props.class);
  const handleForLargeImageList = props.handleForLargeImageList;

  // PRICE
  if (props.showPrice) {
    let classesPrice = ["price"];
    let priceString = priceFormatted;
    if (status === 1 && !price && price_details) {
      classesPrice.push("detail");
      priceString = price_details;
    }
    if (status === 2) {
      classesPrice.push("sold");
    }
    priceRow = (
      <div className="post-price">
        <h3>
          <span className={classesPrice.join(" ")}>{priceString}</span>
        </h3>
      </div>
    );
  }
  // (END) PRICE

  return (
    <div className={classesWrap.join(" ")}>
      <div className="feature-list">
        {priceRow}
        <div className="post-btns">
          <ul className="ul-inline">
            <li>
              <a
                onClick={() => handleForLargeImageList()}
                href="#photos"
                title={`Link to ${name} Photos`}
                className="icon-text"
              >
                <FaCamera />
                <span>Large Photos</span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:sales@classicandsportscar.ltd.uk?subject=Enquiry: ${name} ${
                  category === 2 ? `(${id})` : ""
                }`}
                title={`Make enquiry about ${name}`}
                className="icon-text"
              >
                <FaInfoCircle />
                <span>Enquire</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="post-share">
          <h4>Share:</h4>
          <ul className="ul-post-share">
            <li>
              <FacebookShareButton url={itemPath}>
                <FacebookIcon size={30} />
              </FacebookShareButton>
            </li>
            <li>
              <TwitterShareButton url={itemPath}>
                <TwitterIcon size={30} />
              </TwitterShareButton>
            </li>
            {imagePath ? (
              <li>
                <PinterestShareButton url={itemPath} media={imagePath}>
                  <PinterestIcon size={30} />
                </PinterestShareButton>
              </li>
            ) : null}
            <li>
              <WhatsappShareButton url={itemPath}>
                <WhatsappIcon size={30} />
              </WhatsappShareButton>
            </li>
            <li>
              <EmailShareButton url={itemPath}>
                <EmailIcon size={30} />
              </EmailShareButton>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ItemExtras;
