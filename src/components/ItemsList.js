import React from "react";
import Item from "./Item";

export default function ItemsList({ items }) {
  if (items.length === 0) {
    return (
      <div className="empty-search">
        <h3>Unfortunately, no items matched your search parameters</h3>
      </div>
    );
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {items.map(item => {
          return <Item key={item.id} item={item} />;
        })}
      </div>
    </section>
  );
}
