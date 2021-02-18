import React from "react";
import Img from "react-image";
// import ImageNotFound from "../../../assets/images/image-not-found.jpg";

const VideoEmbed = props => {
  // console.log("[ImgFeatured] ...");
  const imgSrcLarge = `${process.env.REACT_APP_IMG_DDIR}${props.imgArr.imageDir}/lg/${props.imgArr.image}`;
  const imgSrcPrimary = `${process.env.REACT_APP_IMG_DDIR}${props.imgArr.imageDir}/pr/${props.imgArr.image}`;
  // const imgUrl = "https://via.placeholder.com/640x480";
  const imgUrl = props.imgArr.imageDir ? imgSrcLarge : `${process.env.REACT_APP_IMG_DIR_LARGE}${props.imgArr.image}`;//2do - remove condition when all images are transferred
  // console.log('[ImgFeatured] ' + imgUrl);

  // const imgPlaceholderXXX = (
  //   <Img
  //     src={[imgUrl, ImageNotFound]}
  //     className="img-loading is-hidden"
  //     alt={props.imgArr.name}
  //     srcSet={props.imgArr.imageDir ? `${imgSrcLarge} 640w,
  //       ${imgSrcPrimary} 400w` : null}      
  //   />
  // );
  const imgPlaceholder = (
    <Img
      src={imgUrl}
      className="img-loading is-hidden"
      alt={props.imgArr.name}
      srcSet={props.imgArr.imageDir ? `${imgSrcLarge} 640w,
        ${imgSrcPrimary} 400w` : null}      
    />
  );

  return (
    <div className="wrap-iframe">
      {imgPlaceholder}
      <iframe
        title="YouTube Embedded Video"
        id="youtube"
        width="100%"
        height="auto"
        src={"https://www.youtube.com/embed/" + props.videoId + "?rel=0&autoplay=" + props.autoplay}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      >
      </iframe>
    </div>
  );
};

export default VideoEmbed;
