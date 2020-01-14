import React, { Component } from "react";
import Img from "react-image";
import ImageNotFound from "../../assets/images/image-not-found.jpg";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import NavLeft from "../../components/Sidebar/Navleft/NavLeft";
import WidgetData from "../../assets/_data/_data-widgets";
import Widget from "../../components/Sidebar/InfoBox/InfoBox";
import ImgFeatured from "../../components/ItemDetails/ImgFeatured";
import ImgGrid from "../../components/ItemDetails/ImgGrid";
import { ItemContext } from "../../Context";
import parser from "html-react-parser";
import { setDocumentTitle, apiGetItemDetails } from "../../assets/js/Helpers";
import { MdZoomOutMap } from "react-icons/md";
// import DummyData from "./dummy-item-details.json";

export default class ItemDetails extends Component {
  constructor(props) {
    super(props);
    console.log("[Item.js] this.props...", this.props);
    this.strItemNotFound = "Cannot find item";
    this.strLoading = "Loading...";
    this.apiUrl = apiGetItemDetails(this.props.match.params.slug);
    // this.apiUrl = "../../api-dummy/dummy-item-details.json";

    this.state = {
      itemPrimary: {},
      itemImages: {},
      slug: this.props.match.params.slug,
      fetchError: ""
    };
  }

  async componentDidMount() {
    // console.log("[ItemDetails.js] componentDidMount()...");
    this.setState({ loading: true });
    await fetch(this.apiUrl)
      .then(response => response.json())
      .then(data => {
        // console.log("[ItemDetails.js] componentDidMount() data: ", data);
        const [itemPrimary, ...itemImages] = data;
        console.log(
          "[ItemDetails.js] componentDidMount() itemPrimary: ",
          itemPrimary
        );
        console.log(
          "[ItemDetails.js] componentDidMount() itemImages: ",
          itemImages
        );
        this.setState({ itemPrimary, itemImages, loading: false });
      })
      .catch(() => {
        // console.log(
        //   "[ItemDetails.js] componentDidMount() error...",
        //   this.strItemNotFound
        // );
        this.setState({ fetchError: this.strItemNotFound, loading: false });
        setDocumentTitle(this.strItemNotFound);
      });
  }

  /////////////
  // CONTEXT // need this for the functions
  /////////////
  static contextType = ItemContext;

  render() {
    const { formatPrice, getCategoryArr, getCategoryLinkTag } = this.context;
    const { loading, fetchError, itemPrimary, itemImages } = this.state;
    // INIT settings.item
    let widgetOpeningHours = null;
    let widgetContact = null;

    if (fetchError) {
      return `<p>${this.strItemNotFound}</p>`;
    }
    if (loading) {
      return `<p>${this.strLoading}</p>`;
    }

    console.log("FIRST:", itemPrimary); // 'PARENT item'
    console.log("images:", itemImages); // 'PARENT item attachments'

    const {
      name,
      year,
      price,
      image,
      category,
      status,
      description,
      slug
    } = itemPrimary;

    const itemArr = { name, title: name, image, slug };
    const categoryArr = getCategoryArr(category, status);
    const categoryLinkTag = getCategoryLinkTag(categoryArr);
    const priceString = formatPrice(price);
    const descriptionParsed = description ? parser(description) : null;
    setDocumentTitle(`${categoryArr.title} | ${year} ${name}`);
    // SET breadcrumbs array
    let crumbsArr = [];
    crumbsArr.push(categoryArr);
    crumbsArr.push(itemArr);

    // SET images
    const imgFeaturedComp = <ImgFeatured imgArr={itemArr} />;
    const imgGridComp = <ImgGrid imgsArr={itemImages} />;

    // GET appearance
    if (categoryArr && categoryArr.settings) {
      const mySettings = { ...categoryArr.settings.item };

      widgetOpeningHours = mySettings.details.showWidgetOpeningHours ? (
        <Widget body={WidgetData.openingHours} />
      ) : null;
      widgetContact = mySettings.details.showWidgetContactDetails ? (
        <Widget body={WidgetData.contact} />
      ) : null;
    }
    // (END) GET appearance

    return (
      <>
        <section className="content-wrap match-heights bg-accent">
          <div className="sidebar">
            <NavLeft categoryName={categoryArr.name} />
          </div>
          <div className="content bg-secondary item-details-img">
            <Breadcrumbs crumbsArr={crumbsArr} pageType="item-details" />
            <div className="row row-post-img">
              <div className="col-xs-12 col-md-8 margin-x-0 featured col-post-img">
                {imgFeaturedComp}
              </div>
              <div className="col-xs-12 col-md-4 col-post-img-grid">
                {imgGridComp}
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <section className="row">
            <div className="sidebar hidden-md-down col-md-3 padding-x-0">
              {widgetOpeningHours}
              {widgetContact}
            </div>
            <div className="content col-sm-12 col-md-9 col-post-parent">
              <div className="col-post-text">
                <h1>
                  {year} {name}
                </h1>
                <p>{categoryLinkTag}</p>
                <p>{priceString}</p>
                {descriptionParsed}
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}
