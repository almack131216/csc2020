import React from "react";
import { FaCamera, FaInfoCircle } from "react-icons/fa";

const ItemExtras = props => {
  const { price, price_details, priceFormatted, status } = props.itemArr;

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
            <li>
              <a
                href="https://classicandsportscar.ltd.uk/_wp190503/test-large-190501/?photos"
                title="Link to Test Large Photos"
                className="icon-text"
              >
                <FaCamera />
                <span>Large Photos</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:sales@classicandsportscar.ltd.uk?subject=Enquiry for Test Large Photos (14727)"
                title="Make enquiry about Test Large Photos"
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
