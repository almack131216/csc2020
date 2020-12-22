import React from "react";
import Img from "react-image";
import ImageNotFound from "../../../assets/images/image-not-found.jpg";
import { MdZoomOutMap } from "react-icons/md";

const ImgFeatured = props => {
  // console.log("[ImgFeatured] ...");
  const handleForLightbox = props.handleForLightbox;
  const imgSrcLarge = `${process.env.REACT_APP_IMG_DDIR}${props.imgArr.imageDir}/lg/${props.imgArr.image}`;
  const imgSrcPrimary = `${process.env.REACT_APP_IMG_DDIR}${props.imgArr.imageDir}/pr/${props.imgArr.image}`;
  // const imgUrl = "https://via.placeholder.com/640x480";
  const imgUrl = props.imgArr.imageDir ? imgSrcLarge : `${process.env.REACT_APP_IMG_DIR_LARGE}${props.imgArr.image}`;//2do - remove condition when all images are transferred
  // console.log('[ImgFeatured] ' + imgUrl);

  const imgPrimary = (
    <Img
      src={[imgUrl, ImageNotFound]}
      className="img-loading"
      alt={props.imgArr.name}
      srcSet={props.imgArr.imageDir ? `${imgSrcLarge} 640w,
        ${imgSrcPrimary} 400w` : null}      
    />
  );

  return (
    <div className="img-featured can-zoom">
      {imgPrimary}
      <button className="btn-zoom" onClick={() => handleForLightbox(0)}>
        <MdZoomOutMap />
      </button>
    </div>
  );
};

export default ImgFeatured;
