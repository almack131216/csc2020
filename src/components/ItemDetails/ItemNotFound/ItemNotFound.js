import React from "react";
import { MdErrorOutline } from "react-icons/md";
import BtnBack from "../../BtnBack/BtnBack";

const ItemNotFound = props => {
  return (
    <div class="item-not-found-wrap">
      <h2>{props.text ? props.text : "Cannot find item"}</h2>
      <p>Sorry, the page you were looking for could not be found.</p>
      {/* <p>{props.itemId ? props.itemId : null}</p> */}
      <div class="icon-wrap">
        <MdErrorOutline />
      </div>
      <BtnBack />
    </div>
  );
};
export default ItemNotFound;
