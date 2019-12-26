import React, { Component } from "react";
import { ItemContext } from "../../Context";
import Loading from "../Loading";
import Item from "../Items/Item";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./ItemsFeatured.css";

export default class ItemsFeatured extends Component {
  static contextType = ItemContext;

  render() {
    let { loading, featuredItems: items } = this.context;
    console.log("[ItemsFeatured.js] items...", items);
    items = items.map(item => {
      return (
        <div key={item.id}>
          <Item item={item} />
        </div>
      );
    });

    const settings = {
      className: "slider carousel-featured",
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4
    };
    return (
      <section>
        {loading ? <Loading /> : <Slider {...settings}>{items}</Slider>}
      </section>
    );
  }
}
