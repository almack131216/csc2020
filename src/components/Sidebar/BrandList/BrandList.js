import React from "react";
import { useContext } from "react";
import { ItemContext } from "../../../Context";
import { Link } from "react-router-dom";

export default function BrandList() {
  const context = useContext(ItemContext);
  const { brand, brandArr, categoryArr } = context;
  // SET title
  let brandCount = brandArr[0] ? brandArr[0].itemCount : 0;
  const title = `${brandCount} ${categoryArr.title}`;

  // GET all brands
  let brands = brandArr.slice(1); //remove first object ("all")
  // MAP to jsx
  brands = brands.map((item, index) => {
    return (
      <li value={item.id} key={index}>
        {item.brand} ({item.itemCount})
      </li>
    );
  });

  return (
    <div className="widget clean">
      <h5 className="title">{title}</h5>
      <ul>{brands}</ul>
    </div>
  );
}
