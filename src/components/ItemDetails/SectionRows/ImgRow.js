import React from "react";
// import parse from "html-react-parser";
import NavLeft from "../../Sidebar/Navleft/NavLeft";
import VideoEmbed from "../Video/VideoEmbed";
// import Loading from "../../Loading/Loading";
import ImgFeatured from "../ImgFeatured/ImgFeatured";
import ItemExtras from "../ItemExtras/ItemExtras";
import ImgGrid from "../ImgGrid/ImgGrid";
import CarouselDynamic from "../../CarouselDynamic/CarouselDynamic";

const ImgRow = (props) => {
  const categoryName = props.categoryName;
  // const imgArea = props.imgArea;
  const breadcrumbsTag = props.breadcrumbsTag;
  const pageStyle = props.pageStyle ? props.pageStyle : "TextOnly";
  const hasVideo = props.hasVideo;
  const itemPrimary = props.itemPrimary;
  const imagesArr = props.imgsArr;
  const videosArr = props.videosArr;
  const attachmentsArr = props.attachmentsArr;
  // const imgColFull = props.imgColFull;
  let imgColLeft = props.imgColLeft;
  let imgColRight = props.imgColRight;
  // const imgRowClasses = props.imgRowClasses;
  const videoIndex = props.videoIndex;
  const handleForLightbox = props.handleForLightbox;
  const handleForVideobox = props.handleForVideobox;

  let contentWrapClasses = ["bg-secondary"];
  if (props.contentWrapClasses)
    contentWrapClasses.push(props.contentWrapClasses);

  // if (loading) {
  //   return <Loading />;
  // }

  // SET images (IMG || Carousel)
  // change background style if
  let imgRowClasses = ["container", "item-details-img"];
  // Featured / Primary
  // Right panel (IMAGE Grid (attachments) || share)
  // Default or Carousel?...
  if (pageStyle === "ImgDetails") {
    imgRowClasses.push("bg-secondary");
    // txtRowClasses.push("item");
    imgColLeft = (
      <ImgFeatured imgArr={itemPrimary} handleForLightbox={handleForLightbox} />
    );
    imgColRight = (
      <ImgGrid
        imgsArr={imagesArr}
        handleForLightbox={handleForLightbox.bind(this)}
        handleForVideobox={handleForVideobox.bind(this)}
        videosArr={videosArr}
      />
    );
  } else if (pageStyle === "ImgCarousel") {
    imgRowClasses.push("carousel");
    imgColLeft = <CarouselDynamic imgsArr={imagesArr} />;
    imgColRight = (
      <ItemExtras
        itemArr={itemPrimary}
        showContact={true}
        itemAttachments={attachmentsArr}
      />
    );
  } else if (pageStyle === "IsVideo") {
    imgRowClasses.push("youtube-wrap");
    imgColLeft = null;
    imgColRight = null;
  }

  return (
    <section className={contentWrapClasses.join(" ")}>
      <div className={imgRowClasses.join(" ")}>
        {breadcrumbsTag}
        {/* {imgArea ? imgArea : null} */}
        {pageStyle === "IsVideo" ? (
          <div className="row row-post-video full">
            <div className="col-xs-12 col-sm-12 margin-x-0 col-post-video">
              {itemPrimary.isVideo && itemPrimary.youtube ? (
                <VideoEmbed
                  videoId={itemPrimary.youtube}
                  imgArr={itemPrimary}
                  autoplay={0}
                />
              ) : null}
            </div>
          </div>
        ) : (
          <div className="row row-post-img">
            <div className="col-xs-12 col-sm-8 margin-x-0 featured col-post-img">
              {hasVideo ? (
                <VideoEmbed
                  videoId={videoIndex}
                  imgArr={itemPrimary}
                  autoplay={1}
                />
              ) : (
                imgColLeft
              )}
            </div>
            <div className="col-xs-12 col-sm-4 col-post-img-grid">
              {imgColRight}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ImgRow;
