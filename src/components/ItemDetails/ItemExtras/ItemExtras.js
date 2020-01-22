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
    imagePath
  } = props.itemArr;

  // PRICE
  let classesPrice = ["price"];
  let priceString = priceFormatted;
  if (status === 1 && !price && price_details) {
    classesPrice.push("detail");
    priceString = price_details;
  }
  if (status === 2) {
    classesPrice.push("sold");
  }
  // (END) PRICE

  return (
    <div className="item-extras ">
      <div className="feature-list">
        <div>
          <h3>
            <span className={classesPrice.join(" ")}>{priceString}</span>
          </h3>
        </div>
        <div>
          <ul className="ul-inline">
            {/* <li>
              <Link
                to="/"
                title={`Link to ${name} Photos`}
                className="icon-text"
              >
                <FaCamera />
                <span>Large Photos</span>
              </Link>
            </li> */}
            <li>
              <a
                href={`mailto:sales@classicandsportscar.ltd.uk?subject=Enquiry: ${name} (${id})`}
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
                <PinterestShareButton
                  url={itemPath}
                  media="https://www.classicandsportscar.ltd.uk/images_catalogue/large/triumph-gt6-mkiii_45282.jpg"
                >
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
