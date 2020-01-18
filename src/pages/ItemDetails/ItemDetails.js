import React, { Component } from "react";
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
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

export default class ItemDetails extends Component {
  constructor(props) {
    super(props);
    console.log("[Item.js] this.props...", this.props);
    // LIGHTBOX - triggered from img grid + img featured
    // state props: photoIndex, isOpen
    const handleForLightbox = this.handleForLightbox.bind(this);

    this.strItemNotFound = "Cannot find item";
    this.strLoading = "Loading...";
    this.apiUrl = apiGetItemDetails(this.props.match.params.slug);

    this.state = {
      itemPrimary: {},
      itemImages: [],
      slug: this.props.match.params.slug,
      fetchError: "",
      photoIndex: 0,
      isOpen: false
    };
  }

  // LIGHTBOX - open lightbox on selected photoIndex
  handleForLightbox = getIndex => {
    console.log("openLightbox()...", getIndex);
    const photoIndex = getIndex ? getIndex : 0;
    this.setState({ isOpen: true, photoIndex });
  };

  // API - componentDidMount
  async componentDidMount() {
    // console.log("[ItemDetails.js] componentDidMount()...");
    this.setState({ loading: true });
    await fetch(this.apiUrl)
      .then(response => response.json())
      .then(data => {
        // console.log("[ItemDetails.js] componentDidMount() data: ", data);
        const [itemPrimary, ...itemImageAttachments] = data;
        const itemImages = [itemPrimary, ...itemImageAttachments];
        // console.log(
        //   "[ItemDetails.js] componentDidMount() itemPrimary: ",
        //   itemPrimary
        // );
        // console.log(
        //   "[ItemDetails.js] componentDidMount() itemImages: ",
        //   itemImages
        // );
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
    // LIGHTBOX props
    const handleForLightbox = this.handleForLightbox;
    const { photoIndex, isOpen } = this.state;
    // (END) LIGHTBOX props
    const { formatPrice, getCategoryArr, getCategoryLinkTag } = this.context;
    const { loading, fetchError, itemPrimary, itemImages } = this.state;
    // INIT settings.item
    let widgetOpeningHours = null;
    let widgetContact = null;
    // ITEM NOT FOUND
    if (fetchError) {
      return `<p>${this.strItemNotFound}</p>`;
    }
    // LOADING
    if (loading) {
      return `<p>${this.strLoading}</p>`;
    }

    // console.log("FIRST:", itemPrimary); // 'PARENT item'
    // console.log("images:", itemImages); // 'PARENT item attachments'

    // LIGHTBOX images
    // ARR - put objects into array (need for .map())
    const images = [];
    for (let i = 0; i < itemImages.length; i++) {
      images.push({
        src: `${process.env.REACT_APP_IMG_DIR_LARGE}${itemImages[i].image}`,
        name: itemImages[i].name
      });
    }
    // (END) LIGHTBOX images

    // ITEM fields
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
    const imgFeaturedComp = (
      <ImgFeatured
        imgArr={itemArr}
        handleForLightbox={handleForLightbox.bind(this)}
      />
    );
    const imgGridComp = (
      <ImgGrid
        imgsArr={images}
        handleForLightbox={handleForLightbox.bind(this)}
      />
    );

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
              <div className="col-xs-12 col-sm-8 margin-x-0 featured col-post-img">
                {imgFeaturedComp}
              </div>
              <div className="col-xs-12 col-sm-4 col-post-img-grid">
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
            <div className="content col-sm-12 col-md-9 padding-x-0">
              <div className="col-post-text">
                <h1>{year ? `${year} ${name}` : name}</h1>
                <p>{categoryLinkTag}</p>
                <p>{priceString}</p>
                {descriptionParsed}
              </div>
            </div>
          </section>
        </div>

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex].src}
            nextSrc={images[(photoIndex + 1) % images.length].src}
            prevSrc={
              images[(photoIndex + images.length - 1) % images.length].src
            }
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
            }
          />
        )}
      </>
    );
  }
}
