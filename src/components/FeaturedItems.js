import React, { Component } from "react";
import { ItemContext } from "../Context";
import Loading from "./Loading";
import Item from "./Item";
import Title from "./Title";

export default class FeaturedItems extends Component {
  static contextType = ItemContext;

  render() {
    let { loading, featuredItems: items } = this.context;
    console.log("[FeaturedItems.js] items...", items);
    items = items.map(item => {
      return <Item key={item.id} item={item} />;
    });

    return (
      <section className="featured-rooms">
        <Title title="Featured Items" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : items}
        </div>
      </section>
    );
  }
}
