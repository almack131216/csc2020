import React, { Component } from "react";
import Hero from "../components/Hero";
import defaultBcg from "../images/room-1.jpeg";
import { Link } from "react-router-dom";
import { ItemContext } from "../Context";
import parser from "html-react-parser";

export default class Item extends Component {
  constructor(props) {
    super(props);
    console.log("[Item.js] this.props...", this.props);
    this.state = {
      item: {},
      slug: this.props.match.params.slug,
      defaultBcg,
      fetchError: ""
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch(`http://localhost:3002/api/item/${this.props.match.params.slug}`)
      .then(response => response.json())
      .then(data => {
        console.log("???", data);
        this.setState({ item: data, loading: false });
      })
      .catch(() => {
        this.setState({ fetchError: "Cannot find item", loading: false });
      });
  }

  static contextType = ItemContext;
  // componentDidMount() {}

  render() {
    const { item, loading, fetchError } = this.state;

    if (fetchError || !item) {
      return <p>Cannot find item</p>;
    }
    if (loading) {
      return <p>Loading ...</p>;
    }

    const { name, description, price, image, year } = item;
    const { formatPrice } = this.context;
    const priceString = formatPrice(price);

    return (
      <div>
        <strong>
          {year} {name}
        </strong>
        <p>{priceString}</p>
        <p>{description ? parser(description) : null}</p>
      </div>
    );
    // const item = this.state.itemData;
    // const { getItem } = this.context;
    // const item = this.getItem2(this.state.slug);
    // const item = {
    //   id: 38211,
    //   name: "MG TF 1500 UK Matching Numbers",
    //   category: 2,
    //   description:
    //     "<p>Greeted with a mixed reaction at the 1953 Motor Show, the charming and surprisingly&nbsp;agile MGTF has come to be amongst the most sought-after of all MGs. Initially fitted with the 1250 XPAG engine, just 3,600 of the later 1466cc engined cars were produced, the vast majority of which went to the USA.&nbsp;Late in the summer of 1954, a new 1466 cc engine was introduced to the TF, designated XPEG.&nbsp; Siamesing of the cylinders allowed a larger bore in the same block and with larger pistons, tougher con rods and raising the compression ratio to 8.3:1, the TF 1500&nbsp; produced a creditable 63 bhp - a 10.5% increase in power over the 1250.&nbsp;</p><p>Our car, KMO 65 is the enthusiasts dream. A genuine matching numbers UK TF 1500 with marque history back to 1966, on it&#39;s original valuable UK number plate and with a little mystery thrown in. The production record trace from British Motor Industry Heritage Trust shows our car to be in the Red colour and Biscuit trim combination in which it left the factory. Build date is 23-24 November 1954. Dispatch date however was 20th April 1955 - the last month of TF production before the introduction the MGA.</p><p>The Heritage Certificate in the vehicle file contains the following mysterious&nbsp;note:</p><p><em>The Registration Mark KMO 65 was issued in Berkshire in November or December&nbsp;1954. We believe this car was registered by the MG factory but the records do not indicate why.</em></p><p>Interesting, kept by the MG factory for several months after build and then sold in the final days of TF production. We may never know why and for whom, but we do have evidence of a meticulous history from 1966 and many of the famous MG marque specialist names are there - Toulmin (Motors) 1962 Ltd, NTG Services, and from 1977 onwards Naylor Brothers of Shipley, situated less than 10 miles from the last owner&#39;s house.</p><p>We will now treat the car to some careful recommissioning. The restoration and maintenance history file will make for hours of reading material, but the car has been little used in recent years. With only one lady owner for the past 17 years, just&nbsp; 5000 miles have been driven since the documented Naylor Brothers engine rebuild in September 2001, and only 800 since Naylors valued the car at &pound;24,000 in August 2002.&nbsp;</p><p>The car has a superb interior, mohair weather gear and in general terms presents very well. The paintwork is however quite old and although not at all micro-blistered (a common fault with older restorations), a&nbsp; much-loved car with this sort of provenance...</p>",
    //   brand: 27,
    //   year: 1954,
    //   price: 33995,
    //   createdAt: "2018-09-05",
    //   updatedAt: "2018-09-05",
    //   image: "mg-tf-1500-1_38211.jpg"
    // };

    // console.log("[pages>Item.js] item...", item, loading);
    // if (!item) {
    //   return (
    //     <div className="error">
    //       <h3>Item not found</h3>
    //       <Link to="/items" className="btn-primary">
    //         Back to items
    //       </Link>
    //     </div>
    //   );
    // }

    // const { name, description, price, image } = item;

    // const [mainImg, ...defaultImg] = image;
    // console.log("[Item.js] defaultImg...", defaultImg);

    // return (
    //   <>
    //     <StyledHero img={image || defaultBcg} hero="roomsHero">
    //       <Link to="/items" className="btn-primary">
    //         Back to items
    //       </Link>
    //     </StyledHero>
    //     <section className="single-room">
    //       <div className="single-room-images">
    //         {defaultImg.map((item, index) => {
    //           return <img key={index} src={item} alt={name} />;
    //         })}
    //       </div>
    //       <div className="single-room-info">
    //         <article className="desc">
    //           <h3>details</h3>
    //           <p>{description}</p>
    //         </article>
    //         <article className="info">
    //           <h3>info</h3>
    //           <h6>price: ${price}</h6>
    //         </article>
    //       </div>
    //     </section>
    //     <section className="room-extras">
    //       <h6>Extras</h6>
    //     </section>
    //   </>
    // );
  }
}
