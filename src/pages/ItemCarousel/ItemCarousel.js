import React, { Component } from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import NavLeft from "../../components/Sidebar/Navleft/NavLeft";
import WidgetData from "../../assets/_data/_data-widgets";
import Widget from "../../components/Sidebar/InfoBox/InfoBox";
import CarouselDynamic from "../../components/CarouselDynamic/CarouselDynamic";
import { ItemContext } from "../../Context";
import { setDocumentTitle, apiGetItemDetails } from "../../assets/js/Helpers";
import Loading from "../../components/Loading/Loading";
import ItemNotFound from "../../components/ItemDetails/ItemNotFound/ItemNotFound";
import ItemExtras from "../../components/ItemDetails/ItemExtras/ItemExtras";

export default class ItemCarousel extends Component {
  constructor(props) {
    super(props);
    console.log("[Item.js] this.props...", this.props);

    this.strItemNotFound = "Cannot find item";
    // API - generate end point based on categoryName + itemId
    const apiArr = {
      categoryName: this.props.categoryName,
      itemId: this.props.itemId
    };
    this.apiUrl = apiGetItemDetails(apiArr);

    this.state = {
      itemPrimary: {},
      itemImages: [],
      itemCategoryName: apiArr.categoryName,
      slug: apiArr.itemId, //this.props.match.params.slug
      path: process.env.REACT_APP_ROOT + window.location.pathname,
      fetchError: ""
    };
  }

  // API - componentDidMount
  async componentDidMount() {
    // console.log("[ItemCarousel.js] componentDidMount()...");
    this.setState({ loading: true });
    await fetch(this.apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log("[ItemCarousel.js] componentDidMount() data: ", data);
        let [itemPrimary, ...itemImageAttachments] = data;
        itemPrimary.title = itemPrimary.year
          ? `${itemPrimary.year} ${itemPrimary.name}`
          : itemPrimary.name;
        itemPrimary.itemPath = this.state.path;
        itemPrimary.imagePath =
          process.env.REACT_APP_IMG_DIR_LARGE + itemPrimary.image;

        const itemImages = [itemPrimary, ...itemImageAttachments];
        this.setState({ itemPrimary, itemImages, loading: false });
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

  render() {
    // (END) LIGHTBOX props
    const { formatDescription, getCategoryArr } = this.context;
    const { loading, fetchError, itemPrimary, itemImages } = this.state;
    // INIT settings.item
    let widgetOpeningHours = null;
    let widgetContact = null;
    // ITEM NOT FOUND
    if (fetchError) {
      return (
        <ItemNotFound text={this.strItemNotFound} itemId={this.state.slug} />
      );
    }
    // LOADING
    if (loading) {
      return <Loading />;
    }
    // console.log("FIRST:", itemPrimary); // 'PARENT item'
    // console.log("images:", itemImages); // 'PARENT item attachments'

    // LIGHTBOX images
    // ARR - put objects into array (need for .map())
    const images = [];
    for (let i = 0; i < itemImages.length; i++) {
      images.push({
        // src: "https://via.placeholder.com/640x480",
        src: `${process.env.REACT_APP_IMG_DIR_LARGE}${itemImages[i].image}`,
        name: itemImages[i].name
      });
    }
    // (END) LIGHTBOX images

    // ITEM fields
    let { title, category, status, description } = itemPrimary;
    // ITEM category
    console.log("??? category & status = ", category, status);
    const categoryArr = getCategoryArr(category, status);
    console.log("??? categoryArr = ", categoryArr);
    setDocumentTitle(`${title}`);
    // ITEM description + parsed
    const descriptionParsed = formatDescription(description);
    // SET breadcrumbs array
    let crumbsArr = [];
    crumbsArr.push(itemPrimary);

    // SET images
    // IMAGE Grid (attachments)
    const imgCarousel = <CarouselDynamic imgsArr={images} />;
    // (END) SET images

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
          <div className="content item-details-img carousel">
            <Breadcrumbs crumbsArr={crumbsArr} pageType="item-carousel" />
            <div className="row row-post-img">
              <div className="col-xs-12 col-sm-8 margin-x-0 featured col-post-img">
                {imgCarousel}
              </div>
              <div className="col-xs-12 col-sm-4 col-post-item-extras">
                <ItemExtras itemArr={itemPrimary} />
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
            <div className="content col-sm-12 col-md-9 padding-x-0">
              <div className="col-post-text">
                <h1>{title}</h1>
                <div className="post-text-body">{descriptionParsed}</div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}
