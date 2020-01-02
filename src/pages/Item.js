import React, { Component } from "react";
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
    fetch(
      `${process.env.REACT_APP_API_ENDPOINT}item/${this.props.match.params.slug}`
    )
      .then(response => response.json())
      .then(data => {
        // console.log("[Context.js] componentDidMount() data...", data);
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
    const descriptionParsed = description ? parser(description) : null;

    return (
      <div>
        <p>
          <Link to="/" className="btn-primary">
            Home
          </Link>
        </p>
        <p>{image}</p>

        <strong>
          {year} {name}
        </strong>
        <p>{priceString}</p>
        {descriptionParsed}
      </div>
    );
  }
}
