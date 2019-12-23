import React from "react";
import Item from "./Item";

export default function ItemsList({ items }) {
  if (items.length === 0) {
    return (
      <section className="items">
        <h3>Unfortunately, no items matched your search parameters</h3>
      </section>
    );
  }
  return (
    <section className="items">
      {items.map(item => {
        return <Item key={item.id} item={item} />;
      })}
    </section>
  );
}
