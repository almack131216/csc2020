import React from "react";
import { Link } from "react-router-dom";
import { FaCamera, FaInfoCircle } from "react-icons/fa";
import { useContext } from "react";
import { ItemContext } from "../../../Context";

const ItemExtras = props => {
  const {
    id,
    name,
    price,
    price_details,
    priceFormatted,
    status
  } = props.itemArr;

  const context = useContext(ItemContext);
  const { categoryArr, formatPrice, formatItemLink, formatBrandLink } = context;

  let classesPrice = ["price"];

  let priceString = priceFormatted;
  if (status === 1 && !price && price_details) {
    classesPrice.push("detail");
    priceString = price_details;
  }

  if (status === 2) {
    classesPrice.push("sold");
  }

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
      </div>
    </div>
  );
};

export default ItemExtras;
