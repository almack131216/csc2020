import React, { Component } from "react";
import { ItemContext } from "../../Context";
import Loading from "../Loading";
import Item from "../Items/Item";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default class ItemsFeatured extends Component {
  constructor(props) {
    super(props);
    console.log(
      "[ItemsFeatured.js] constructor() > props.categoryName...",
      props.category
    );
    this.switch = props.category;
  }

  static contextType = ItemContext;

  render() {
    let {
      catData,
      loading,
      featuredItems: items,
      featuredItemsArchive: items2
    } = this.context;
    console.log("[ItemsFeatured.js] items...", items);

    let SwitchItems = this.switch === "Live" ? items : items2;
    let itemSettingsCust = catData[this.switch]
      ? { ...catData[this.switch].settings.item }
      : null;
    itemSettingsCust.layout = "grid";

    items = SwitchItems.map(item => {
      return (
        <Item key={item.id} item={item} itemSettingsCust={itemSettingsCust} />
      );
    });

    const settings = {
      className: "slider carousel-featured",
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      centerPadding: 30,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <section className="featured-items-wrap">
        {loading ? <Loading /> : <Slider {...settings}>{items}</Slider>}
      </section>
    );
  }
}
