import React, { Component } from "react";
import { ItemContext } from "../../Context";
import Loading from "../Loading/Loading";
import Item from "../Items/Item/Item";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import MoreGrid from "../../assets/images/more-grid.png";

export default class ItemsFeatured extends Component {
  constructor(props) {
    super(props);
    // console.log("[ItemsFeatured] constructor() > props.categoryName...", props.categoryName);
    this.switch = props.categoryName;
  }

  static contextType = ItemContext;

  render() {
    let {
      catData,
      loading,
      featuredItems,
      featuredItemsArchive
    } = this.context;
    // console.log("[ItemsFeatured] items...", items);

    this.switch === "Live" && featuredItems && featuredItems.push({isCustomLink: true, id:1, name:'..See ALL models for sale', slug: 'classic-cars-for-sale', image: MoreGrid});
    this.switch === "Archive" && featuredItemsArchive && featuredItemsArchive.push({isCustomLink: true, id:2, name:'..See ALL models sold', slug: 'sold', image: MoreGrid});

    let SwitchItems = this.switch === "Live" ? featuredItems : featuredItemsArchive;
    
    //console.log(SwitchItems);

    let itemSettingsCust = catData[this.switch]
      ? { ...catData[this.switch].settings.item }
      : {};
    itemSettingsCust.layout = "item-card featured";

    let items = SwitchItems.map(item => {
      return (
        <Item categoryName={this.switch} key={item.id} item={item} itemSettingsCust={itemSettingsCust} />
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
            dots: false
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
        {
          loading ? <Loading /> : 
          <Slider {...settings}>
            {items}            
          </Slider>
          }
      </section>
    );
  }
}
