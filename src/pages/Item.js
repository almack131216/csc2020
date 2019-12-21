import React, { Component } from "react";
import Hero from "../components/Hero";
import defaultBcg from "../images/room-1.jpeg";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { ItemContext } from "../Context";
import StyledHero from "../components/HeroStyled";

export default class Item extends Component {
  constructor(props) {
    super(props);
    // console.log("[Item.js] this.props...", this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg
    };
  }

  static contextType = ItemContext;
  // componentDidMount() {}

  render() {
    const { getItem } = this.context;
    const item = getItem(this.state.slug);
    // console.log(item);
    if (!item) {
      return (
        <div className="error">
          <h3>Item not found</h3>
          <Link to="/items" className="btn-primary">
            Back to items
          </Link>
        </div>
      );
    }

    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = item;

    const [mainImg, ...defaultImg] = images;
    console.log("[Item.js] defaultImg...", defaultImg);

    return (
      <>
        <StyledHero img={images[0] || defaultBcg} hero="roomsHero">
          <Banner title={`${name} item`}>
            <Link to="/items" className="btn-primary">
              Back to items
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price: ${price}</h6>
              <h6>size: {size} SQFT</h6>
              <h6>
                max capacity:{" "}
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>Extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}
