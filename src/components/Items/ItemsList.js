import React from "react";
import Item from "./Item";

const ItemsList = ({ items, layout }) => {
  if (items.length === 0) {
    return (
      <section className="items">
        <h3>Unfortunately, no items matched your search parameters</h3>
      </section>
    );
  }
  let itemsWrapClass = ["items-wrap"];
  if (layout === "row") {
    itemsWrapClass.push("rows");
  } else {
    itemsWrapClass.push("cards");
  }

  return (
    <section className={itemsWrapClass.join(" ")}>
      <div className="cards">
        {items.map((item, index) => {
          return <Item key={index} item={item} layout={layout} />;
        })}
      </div>
    </section>
  );
};
//col-xs-12 col-lg-4 col-md-4 col-sm-4 col-xs-6
export default ItemsList;
