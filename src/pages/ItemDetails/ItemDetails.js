import React, { Component } from "react";
import SEO from '../../components/SEO/SEO';
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import InfoBox from "../../components/InfoBoxes/InfoBox/InfoBox";
import {
  CB_YouTubeBtn,
  CB_Contact,
  CB_OpeningHours,
} from "../../components/ContactBoxes/ContactBoxes";
import ImgList from "../../components/ItemDetails/ImgList/ImgList";
import { ItemContext } from "../../Context";
import {
  setMetaDesc,
  apiGetItemDetails,
  ConsoleLog
} from "../../assets/js/Helpers";
import Parser from "html-react-parser";
import Lightbox from "react-image-lightbox";
import Loading from "../../components/Loading/Loading";
import ItemNotFound from "../../components/ItemDetails/ItemNotFound/ItemNotFound";
import ItemExtras from "../../components/ItemDetails/ItemExtras/ItemExtras";
import ItemRelated from "../../components/ItemDetails/ItemRelated/ItemRelated";
import ImgArea from "../../components/ItemDetails/SectionRows/ImgRow";
import "react-image-lightbox/style.css";
//

export default class ItemDetails extends Component {
  constructor(props) {
    super(props);
    ConsoleLog("[Item] this.props: " + this.props);
    // REF: https://gist.github.com/nathanlogan/941f296aee7f3fa59689666382101d9f
    // get URL hash (minus the hash mark)
    const hash = window.location.hash.substring(1);

    this.strItemNotFound = "Cannot find item";
    // API - generate end point based on categoryName + itemId
    const apiArr = {
      categoryName: this.props.categoryName,
      itemId: this.props.itemId,
      preview: this.props.preview,
    };
    this.apiUrl = apiGetItemDetails(apiArr);

    this.state = {
      itemPrimary: {},
      itemImages: [],
      itemCategoryName: apiArr.categoryName,
      slug: apiArr.itemId, //this.props.match.params.slug
      preview: apiArr.preview,
      path: process.env.REACT_APP_ROOT + window.location.pathname,
      fetchError: "",
      photoIndex: 0,
      isOpen: false,
      isVideo: false,
      pageStyle: this.props.pageStyle, // "TextOnly","ImgCarousel","ImgDetails","IsVideo"
      showImgLargeList: hash === "photos" ? true : false,
      videosArr: [],
    };
  }

  handleForYouTube = (getArr) => {
    ConsoleLog(
      "[ItemDetails] handleForYouTube() > handleForYouTube: videosArr = " +
        JSON.stringify(getArr)
    );
    this.setState({ videosArr: getArr ? getArr : [] });
  };

  // VIDEOBOX - open videobox on selected photoIndex
  handleForVideobox = (getIndex) => {
    ConsoleLog("[ItemDetails] handleForVideobox() > getIndex: " + getIndex);
    const videoIndex = getIndex ? getIndex : 0;
    this.setState({ isVideo: true, videoIndex });
  };

  // LIGHTBOX - open lightbox on selected photoIndex
  handleForLightbox = (getIndex) => {
    ConsoleLog("[ItemDetails] handleForLightbox() > getIndex: " + getIndex);
    const photoIndex = getIndex ? getIndex : 0;
    this.setState({ isOpen: true, photoIndex });
  };

  // Large Image List
  handleForLargeImageList = () => {
    ConsoleLog(
      "[ItemDetails] handleForLargeImageList() > showImgLargeList: " +
        this.state.showImgLargeList
    );
    this.setState({ showImgLargeList: true });
  };

  // Check isFileImage
  isFileImage = (file) => {
    if (file.match(/jpg.*/) || file.match(/jpeg.*/) || file.match(/png.*/)) {
      return true;
    }
  };

  // API - componentDidMount
  async componentDidMount() {
    // ConsoleLog("[ItemDetails] componentDidMount()...");
    this.setState({ loading: true });
    await fetch(this.apiUrl)
      .then((response) => response.json())
      .then((data) => {
        ConsoleLog("[ItemDetails] componentDidMount() > data: " + data);
        let [itemPrimary, ...itemImageAttachments] = data;
        itemPrimary.title = itemPrimary.year
          ? `${itemPrimary.year} ${Parser(itemPrimary.name)}`
          : Parser(itemPrimary.name);
        itemPrimary.itemPath = this.state.path;
        itemPrimary.imagePath = itemPrimary.imageDir
          ? process.env.REACT_APP_IMG_DDIR +
            itemPrimary.imageDir +
            "/lg/" +
            itemPrimary.image
          : process.env.REACT_APP_IMG_DIR_LARGE + itemPrimary.image;
        itemPrimary.imageHi =
          parseInt(itemPrimary.imageHi) === 1 ? true : false;
        itemPrimary.isVideo = itemPrimary.youtube ? true : false;
        this.setState({videoIndex:
            itemPrimary.isVideo && itemPrimary.youtube
              ? itemPrimary.youtube
              : null});
        ConsoleLog("[ItemDetails] " + JSON.stringify(itemPrimary));

        const itemImages = [itemPrimary, ...itemImageAttachments];
        this.setState({ itemPrimary, itemImages, loading: false });
      })
      .catch(() => {
        this.setState({ fetchError: this.strItemNotFound, loading: false });
        // setDocumentTitle(this.strItemNotFound);//2do - set title in <SEO /> if item not found
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
    const handleForVideobox = this.handleForVideobox;
    // const handleForYouTube = this.handleForYouTube;

    const {
      loading,
      fetchError,
      itemPrimary,
      itemImages,
      showImgLargeList,
      photoIndex,
      isOpen,
      pageStyle,
    } = this.state;
    // INIT settings.item
    let widgetYouTubeBtn = null;
    let widgetOpeningHours = null;
    let widgetContact = null;
    let custPageStyle = pageStyle;
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
    // ConsoleLog("[ItemDetails] FIRST:", itemPrimary); // 'PARENT item'
    // ConsoleLog("[ItemDetails] images:", itemImages); // 'PARENT item attachments'

    // LIGHTBOX images
    // ARR - put objects into array (need for .map())
    const images = [];
    const pdfs = [];
    const videos = this.state.videosArr; //['GMu0Tx67IfY','6TAJvC-e2b8'];
    // 2do - for testing purposes only - show high-res images for just this item
    // 2do - update with high-res image for all when we have that working in the CMS
    let imageDirThumbs = itemPrimary.imageDir
      ? `${process.env.REACT_APP_IMG_DDIR}${itemPrimary.imageDir}/th/`
      : `${process.env.REACT_APP_IMG_DIR_THUMBS}`;
    let imageDirLarge = itemPrimary.imageDir
      ? `${process.env.REACT_APP_IMG_DDIR}${itemPrimary.imageDir}/lg/`
      : `${process.env.REACT_APP_IMG_DIR_LARGE}`;
    let imageDirHighRes = process.env.REACT_APP_IMG_DIR_LARGE;
    if (itemPrimary.imageDir)
      imageDirHighRes = `${process.env.REACT_APP_IMG_DDIR}${itemPrimary.imageDir}/lg/`;
    if (itemPrimary.imageDir && itemPrimary.imageHi)
      imageDirHighRes = `${process.env.REACT_APP_IMG_DDIR}${itemPrimary.imageDir}/hi/`; //2do - remove
    const imageDirToDownload = imageDirHighRes
      ? imageDirHighRes
      : imageDirLarge;
    // console.log(itemPrimary.imageDir, itemPrimary.imageHi)

    for (let i = 0; i < itemImages.length; i++) {
      this.isFileImage(itemImages[i].image)
        ? images.push({
            // 2do: Switch to high res when we have
            // src: "https://via.placeholder.com/640x480",
            thumb: `${imageDirThumbs}${itemImages[i].image}`,
            src: `${imageDirLarge}${itemImages[i].image}`,
            srcHi: `${imageDirHighRes}${itemImages[i].image}`,
            dir: imageDirLarge,
            filename: itemImages[i].image,
            name: itemImages[i].name,
          })
        : pdfs.push({
            // src: "https://via.placeholder.com/640x480",
            thumb: `${imageDirLarge}${itemImages[i].image}`,
            src: `${imageDirLarge}${itemImages[i].image}`,
            dir: imageDirLarge,
            filename: itemImages[i].image,
            name: itemImages[i].name,
          });
    }
    // (END) LIGHTBOX images

    // ITEM fields
    let {
      title,
      subtitle,
      price,
      category,
      status,
      source,
      excerpt,
      description,
      catalogue_subcat,
    } = itemPrimary;
    // ITEM Price
    const priceFormatted = this.context.formatPrice(price, status);
    itemPrimary.priceFormatted = priceFormatted;
    // ITEM category
    const categoryArr = this.context.getCategoryArr(category, status);
    const categoryLinkTag = this.context.getCategoryLinkTag(categoryArr);
    const metaTitle = `${title} ${categoryArr.title ? " | " + categoryArr.title : ""}`;
    const metaDesc = excerpt ? setMetaDesc(excerpt) : setMetaDesc(description);
    // ITEM source
    let sourceLabel = "";
    if (categoryArr.name === "Press") sourceLabel = "Source: ";
    if (categoryArr.name === "Staff") sourceLabel = "Role: ";
    const sourceLabelTag = sourceLabel
      ? `<span class="cat-${categoryArr.id}">${sourceLabel}</span>`
      : null;
    const sourceTag =
      source && sourceLabel
        ? this.context.formatDescription(
            `<span class="source">
            ${sourceLabelTag}
            ${source}
          </span>`
          )
        : null;

    // ITEM excerpt + parsed
    const excerptParsed = excerpt
      ? this.context.formatDescription(
          `<span class="excerpt">${excerpt}</span>`
        )
      : null;
    // ITEM description + parsed
    const descriptionParsed = this.context.formatDescription(description);
    // SET breadcrumbs array
    let crumbsArr = [];
    categoryArr.class = categoryArr.name;
    crumbsArr.push(categoryArr);
    // Brand crumb
    if (
      catalogue_subcat &&
      catalogue_subcat.brand &&
      (categoryArr.name === "Live" ||
        categoryArr.name === "Archive" ||
        categoryArr.name === "Staff")
    ) {
      const tmp = {
        title: catalogue_subcat.brand,
        slug: `/${catalogue_subcat.slug}${categoryArr.slugAppendBrand}`,
        class: "crumb-subcategory",
      };
      crumbsArr.push(tmp);
    }
    // CRUMB - item
    const itemCrumb = {
      title: itemPrimary.title,
      slug: itemPrimary.slug,
      class: "crumb-item",
    };
    crumbsArr.push(itemCrumb);

    const breadcrumbsTag = (
      <Breadcrumbs crumbsArr={crumbsArr} pageType="item-details" />
    );

    // SET images (IMG || Carousel)
    // change background style if
    let txtRowClasses = ["container"];
    // Featured / Primary
    // Right panel (IMAGE Grid (attachments) || share)
    // let imgColFull = <Loading />;
    // Default or Carousel?...
    if (custPageStyle === "ImgDetails") {
      txtRowClasses.push("item");
    } else if (custPageStyle === "ImgCarousel") {
    } else if (custPageStyle === "IsVideo") {
    } else if (custPageStyle === "isPage") {
      custPageStyle = "ImgCarousel";
      if (itemPrimary.category === 2) custPageStyle = "ImgDetails";
      // if(itemPrimary.category === 3 || itemPrimary.category === 4 || itemPrimary.category === 5) custPageStyle = "ImgCarousel";
    }
    const imgLargeList = (
      <>
        <a name="photos" href={`${this.state.path}#photos`}>
          More photos...
        </a>
        <ImgList
          imgsArr={images}
          handleForLightbox={handleForLightbox.bind(this)}
          dirDownloadFrom={imageDirToDownload}
        />
      </>
    );
    // (END) SET images

    // GET appearance
    if (categoryArr && categoryArr.settings) {
      const mySettings = { ...categoryArr.settings.item };

      widgetYouTubeBtn = mySettings.details.showWidgetYouTubeBtn ? (
        <InfoBox arr={CB_YouTubeBtn} />
      ) : null;
      widgetOpeningHours = mySettings.details.showWidgetOpeningHours ? (
        <InfoBox arr={CB_OpeningHours} />
      ) : null;
      widgetContact = mySettings.details.showWidgetContactDetails ? (
        <InfoBox arr={CB_Contact} />
      ) : null;
    }
    // (END) GET appearance

    // RELATED | convert string array to number array: "123,456" -> [123,456]
    ConsoleLog("[ItemDetails] itemPrimary: " + itemPrimary);
    let relatedItems = [];
    if (itemPrimary.related) {
      let tmpArr = itemPrimary.related.trim().split(",").map(Number);
      relatedItems = relatedItems.concat(tmpArr);
    }
    // relatedItems = relatedItems.filter(function (value) {
    //     return !Number.isNaN(value);
    // });
    // if (itemPrimary.related2) {
    //   let tmpArr2 = itemPrimary.related2
    //     .trim()
    //     .split(",")
    //     .map(Number);
    //   relatedItems = relatedItems.concat(tmpArr2);
    // }
    relatedItems = relatedItems.filter((e) => e !== 0 && !Number.isNaN(e)); // will remove '0' values
    ConsoleLog(
      "[ItemDetails] relatedItems: " +
        relatedItems +
        " (" +
        relatedItems.length +
        ")"
    );

    const relatedItemsTag =
      relatedItems.length > 0 && !isNaN(relatedItems[0]) ? (
        <ItemRelated
          itemIds={relatedItems}
          videosArr={this.state.videosArr}
          handleForYouTube={this.handleForYouTube}
        />
      ) : null;
    // (END) RELATED

    const hasVideo = this.state.videosArr && this.state.isVideo ? true : false;
    ConsoleLog(relatedItems[0]);

    let moreInfoBoxes = null;
    if (custPageStyle === "ImgDetails") {
      moreInfoBoxes = (
        <>
          <ItemExtras
            showPrice={true}
            showContact={true}
            itemArr={itemPrimary}
            handleForLargeImageList={handleForLargeImageList.bind(this)}
            handleForVideobox={handleForVideobox}
            itemVideos={this.state.videosArr}
          />
          {relatedItemsTag}
        </>
      );
    } else if (custPageStyle === "IsVideo") {
      moreInfoBoxes = (
        <>
          {relatedItemsTag}
          <ItemExtras showContact={false} showPrice={false} itemArr={false} />
        </>
      );
    } else {
      moreInfoBoxes = relatedItemsTag ? relatedItemsTag : null;
    }

    const pageContent =
      custPageStyle !== "TextOnly" ? (
        <>
          <ImgArea
            categoryName={categoryArr.name}
            breadcrumbsTag={breadcrumbsTag}
            itemPrimary={itemPrimary}
            pageStyle={custPageStyle}
            hasVideo={hasVideo}
            videoIndex={this.state.videoIndex}
            imgsArr={images}
            attachmentsArr={pdfs}
            handleForLightbox={handleForLightbox.bind(this)}
            handleForVideobox={handleForVideobox.bind(this)}
            videosArr={videos}
          />

          <div className={txtRowClasses.join(" ")}>
            <section className="row">
              <div className="col-sm-12 col-md-9">
                <div className="col-post-text">
                  <h1>{title}</h1>
                  <div className="post-text-body">
                    {sourceTag}
                    {excerptParsed}
                    {descriptionParsed}
                    {categoryLinkTag}
                  </div>
                </div>
              </div>
              {/* /content */}
              <div className="sidebar hidden-md-down col-md-3">
                {moreInfoBoxes || relatedItemsTag ? (
                  <>
                    {moreInfoBoxes ? moreInfoBoxes : null}
                  </>
                ) : null}
                {widgetYouTubeBtn}
                {widgetOpeningHours}
                {widgetContact}
              </div>
            </section>

            {showImgLargeList ? imgLargeList : null}
          </div>

          {/* Lightbox */}
          {isOpen && (
            <Lightbox
              mainSrc={images[photoIndex].srcHi}
              nextSrc={images[(photoIndex + 1) % images.length].srcHi}
              prevSrc={
                images[(photoIndex + images.length - 1) % images.length].srcHi
              }
              onCloseRequest={() => this.setState({ isOpen: false })}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + images.length - 1) % images.length,
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % images.length,
                })
              }
            />
          )}
          {/* (END) Lightbox */}
        </>
      ) : (
        // TextOnly
        <div className="container">
          <div className="row">
        
            <section>
              
              <div className="col-sm-12 col-md-9">
                {breadcrumbsTag}
                <div className="col-post-text">
                  <h1>{title}</h1>
                  {subtitle ? <h2>{subtitle}</h2> : null}
                  {excerpt ? <p>{excerpt}</p> : null}
                  <div className="post-text-body">{descriptionParsed}</div>
                </div>
              </div>
              <div className="sidebar col-sm-12 col-md-3">
                {widgetYouTubeBtn}
                {widgetOpeningHours}
                {widgetContact}
              </div>

            </section>

          </div>
        </div>
      );

    return <>
      <SEO
        title={metaTitle}
        description={metaDesc}
        type="product.item"
        imageCard={itemPrimary.imagePath}
      />
      {pageContent}
    </>;
  }
}
