import React from "react";
import Item from "./Item";

const ItemsList = ({ items }) => {
  if (items.length === 0) {
    return (
      <section className="items">
        <h3>Unfortunately, no items matched your search parameters</h3>
      </section>
    );
  }
  return (
    <section className="items-wrap">
      <div className="row">
        {items.map(item => {
          return (
            <div
              key={item.id}
              className="col-xs-12 col-lg-4 col-md-4 col-sm-6 card-blue"
            >
              <Item item={item} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ItemsList;
