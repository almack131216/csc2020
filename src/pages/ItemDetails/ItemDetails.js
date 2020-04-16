import React, { Component } from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import NavLeft from "../../components/Sidebar/Navleft/NavLeft";
import InfoBox from "../../components/InfoBoxes/InfoBox/InfoBox";
import {
  CB_Contact,
  CB_OpeningHours
} from "../../components/ContactBoxes/ContactBoxes";
import ImgFeatured from "../../components/ItemDetails/ImgFeatured/ImgFeatured";
import ImgGrid from "../../components/ItemDetails/ImgGrid/ImgGrid";
import ImgList from "../../components/ItemDetails/ImgList/ImgList";
import CarouselDynamic from "../../components/CarouselDynamic/CarouselDynamic";
import { ItemContext } from "../../Context";
import { setDocumentTitle, apiGetItemDetails } from "../../assets/js/Helpers";
import Parser from "html-react-parser";
import Lightbox from "react-image-lightbox";
import Loading from "../../components/Loading/Loading";
import ItemNotFound from "../../components/ItemDetails/ItemNotFound/ItemNotFound";
import ItemExtras from "../../components/ItemDetails/ItemExtras/ItemExtras";
import ItemRelated from "../../components/ItemDetails/ItemRelated/ItemRelated";
import "react-image-lightbox/style.css";

export default class ItemDetails extends Component {
  constructor(props) {
    super(props);
    console.log("[Item.js] this.props...", this.props);
    // REF: https://gist.github.com/nathanlogan/941f296aee7f3fa59689666382101d9f
    // get URL hash (minus the hash mark)
    const hash = window.location.hash.substring(1);

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
      fetchError: "",
      photoIndex: 0,
      isOpen: false,
      pageStyle: this.props.pageStyle, // "TextOnly","ImgCarousel","ImgDetails"
      showImgLargeList: hash === "photos" ? true : false
    };
  }

  // LIGHTBOX - open lightbox on selected photoIndex
  handleForLightbox = getIndex => {
    console.log("openLightbox()...", getIndex);
    const photoIndex = getIndex ? getIndex : 0;
    this.setState({ isOpen: true, photoIndex });
  };

  // Large Image List
  handleForLargeImageList = () => {
    console.log("handleForLargeImageList()...", this.state.showImgLargeList);
    this.setState({ showImgLargeList: true });
  };

  // API - componentDidMount
  async componentDidMount() {
    // console.log("[ItemDetails.js] componentDidMount()...");
    this.setState({ loading: true });
    await fetch(this.apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log("[ItemDetails.js] componentDidMount() data: ", data);
        let [itemPrimary, ...itemImageAttachments] = data;
        itemPrimary.title = itemPrimary.year
          ? `${itemPrimary.year} ${Parser(itemPrimary.name)}`
          : Parser(itemPrimary.name);
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
    // LIGHTBOX props
    const handleForLightbox = this.handleForLightbox;
    const handleForLargeImageList = this.handleForLargeImageList;
    // (END) LIGHTBOX props
    const {
      formatPrice,
      formatDescription,
      getCategoryArr,
      getCategoryLinkTag
    } = this.context;
    const {
      loading,
      fetchError,
      itemPrimary,
      itemImages,
      showImgLargeList,
      photoIndex,
      isOpen,
      pageStyle
    } = this.state;
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
    // XXX - for testing purposes only (2do)
    const imgDirHighRes =
      itemPrimary.id === 38097
        ? "https://www.classicandsportscar.ltd.uk/uploads/high-res/"
        : process.env.REACT_APP_IMG_DIR_LARGE;

    for (let i = 0; i < itemImages.length; i++) {
      images.push({
        // src: "https://via.placeholder.com/640x480",
        thumb: `${process.env.REACT_APP_IMG_DIR_THUMBS}${itemImages[i].image}`,
        src: `${imgDirHighRes}${itemImages[i].image}`,
        filename: itemImages[i].image,
        name: itemImages[i].name
      });
    }
    // (END) LIGHTBOX images

    // ITEM fields
    let { title, price, category, status, excerpt, description } = itemPrimary;
    // ITEM Price
    const priceFormatted = formatPrice(price, status);
    itemPrimary.priceFormatted = priceFormatted;
    // ITEM category
    const categoryArr = getCategoryArr(category, status);
    const categoryLinkTag = getCategoryLinkTag(categoryArr);
    setDocumentTitle(`${title} | ${categoryArr.title}`);
    const navLeft = <NavLeft categoryName={categoryArr.name} />;
    // ITEM excerpt + parsed
    const excerptParsed = excerpt
      ? formatDescription(`<span class="excerpt">${excerpt}</span>`)
      : null;
    // ITEM description + parsed
    const descriptionParsed = formatDescription(description);
    // SET breadcrumbs array
    let crumbsArr = [];
    categoryArr.class = categoryArr.name;
    crumbsArr.push(categoryArr);
    crumbsArr.push(itemPrimary);
    const breadcrumbsTag = (
      <Breadcrumbs crumbsArr={crumbsArr} pageType="item-details" />
    );

    // SET images (IMG || Carousel)
    // change background style if
    let imgRowClasses = ["content", "item-details-img"];
    let txtRowClasses = ["container"];
    // Featured / Primary
    let imgColLeft = <Loading />;
    // Right panel (IMAGE Grid (attachments) || share)
    let imgColRight = <Loading />;
    // Default or Carousel?...
    if (pageStyle === "ImgDetails") {
      imgRowClasses.push("bg-secondary");
      txtRowClasses.push("item");
      imgColLeft = (
        <ImgFeatured
          imgArr={itemPrimary}
          handleForLightbox={handleForLightbox.bind(this)}
        />
      );
      imgColRight = (
        <ImgGrid
          imgsArr={images}
          handleForLightbox={handleForLightbox.bind(this)}
        />
      );
    } else if (pageStyle === "ImgCarousel") {
      imgRowClasses.push("carousel");
      imgColLeft = <CarouselDynamic imgsArr={images} />;
      imgColRight = <ItemExtras itemArr={itemPrimary} />;
    }
    const imgLargeList = (
      <>
        <a name="photos" />
        <ImgList
          imgsArr={images}
          handleForLightbox={handleForLightbox.bind(this)}
        />
      </>
    );
    // (END) SET images

    // GET appearance
    if (categoryArr && categoryArr.settings) {
      const mySettings = { ...categoryArr.settings.item };

      widgetOpeningHours = mySettings.details.showWidgetOpeningHours ? (
        <InfoBox arr={CB_OpeningHours} />
      ) : null;
      widgetContact = mySettings.details.showWidgetContactDetails ? (
        <InfoBox arr={CB_Contact} />
      ) : null;
    }
    // (END) GET appearance

    // RELATED | convert string array to number array: "123,456" -> [123,456]
    let relatedItems = [];
    if (itemPrimary.related) {
      let tmpArr = itemPrimary.related
        .trim()
        .split(",")
        .map(Number);
      relatedItems = relatedItems.concat(tmpArr);
    }
    if (itemPrimary.related2) {
      let tmpArr2 = itemPrimary.related2
        .trim()
        .split(",")
        .map(Number);
      relatedItems = relatedItems.concat(tmpArr2);
    }
    relatedItems = relatedItems.filter(e => e !== 0); // will remove '0' values
    console.log(
      "[ItemDetails] relatedItems = ",
      relatedItems,
      relatedItems.length
    );
    const relatedItemsTag =
      relatedItems.length > 0 && !isNaN(relatedItems[0]) ? (
        <ItemRelated itemIds={relatedItems} />
      ) : null;
    // (END) RELATED

    const pageContent =
      pageStyle !== "TextOnly" ? (
        <>
          <section className="content-wrap match-heights bg-accent">
            <div className="sidebar">{navLeft}</div>
            <div className={imgRowClasses.join(" ")}>
              {breadcrumbsTag}
              <div className="row row-post-img">
                <div className="col-xs-12 col-sm-8 margin-x-0 featured col-post-img">
                  {imgColLeft}
                </div>
                <div className="col-xs-12 col-sm-4 col-post-img-grid">
                  {imgColRight}
                </div>
              </div>
            </div>
          </section>
          <div className={txtRowClasses.join(" ")}>
            <section className="row">
              <div className="sidebar hidden-md-down col-md-3 padding-x-0">
                {widgetOpeningHours}
                {widgetContact}
              </div>
              <div className="content col-sm-12 col-md-9 padding-x-0">
                <div className="col-post-text">
                  <h1>{title}</h1>
                  <div className="post-text-body">
                    {pageStyle === "ImgDetails" ? (
                      <div className="item-extras-wrap position-right">
                        <ItemExtras
                          showPrice={true}
                          itemArr={itemPrimary}
                          handleForLargeImageList={handleForLargeImageList.bind(
                            this
                          )}
                        />
                        {relatedItemsTag}
                      </div>
                    ) : relatedItemsTag ? (
                      <div className="item-extras-wrap position-right">
                        {relatedItemsTag}
                      </div>
                    ) : null}
                    {excerptParsed}
                    {descriptionParsed}
                    {categoryLinkTag}
                  </div>
                </div>
              </div>
            </section>

            {showImgLargeList ? imgLargeList : null}
          </div>

          {/* Lightbox */}
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
          {/* (END) Lightbox */}
        </>
      ) : (
        // TextOnly
        <section className="content-wrap match-heights">
          <div className="sidebar">
            {navLeft}
            {widgetOpeningHours}
            {widgetContact}
          </div>
          <div className="content col-sm-12 col-md-9 padding-x-0">
            {breadcrumbsTag}
            <div className="col-post-text">
              <h1>{title}</h1>
              <div className="post-text-body">{descriptionParsed}</div>
            </div>
          </div>
        </section>
      );

    return <>{pageContent}</>;
  }
}
