import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import { Link } from "react-router-dom";
import { ItemContext } from "../Context";
import parser from "html-react-parser";
import { setDocumentTitle, apiGetItemDetails } from "../assets/js/Helpers";

export default class Item extends Component {
  constructor(props) {
    super(props);
    console.log("[Item.js] this.props...", this.props);
    this.strItemNotFound = "Cannot find item";
    this.strLoading = "Loading...";
    this.apiUrl = apiGetItemDetails(this.props.match.params.slug);

    this.state = {
      item: {},
      slug: this.props.match.params.slug,
      defaultBcg,
      fetchError: ""
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch(this.apiUrl)
      .then(response => response.json())
      .then(data => {
        // console.log("[Context.js] componentDidMount() data...", data);
        this.setState({ item: data, loading: false });
      })
      .catch(() => {
        this.setState({ fetchError: this.strItemNotFound, loading: false });
        setDocumentTitle(this.strItemNotFound);
      });
  }

  /////////////
  // CONTEXT // need this for the functions
  /////////////
  static contextType = ItemContext;
  // componentDidMount() {}

  render() {
    const { item, loading, fetchError } = this.state;

    if (fetchError || !item) {
      return `<p>${this.strItemNotFound}</p>`;
    }
    if (loading) {
      return `<p>${this.strLoading}</p>`;
    }

    const { name, description, price, image, year, category, status } = item;
    const { formatPrice, getCategoryArr } = this.context;
    const priceString = formatPrice(price);
    const descriptionParsed = description ? parser(description) : null;
    const categoryArr = getCategoryArr(category, status);
    setDocumentTitle(`${categoryArr.title} | ${name}`);

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
