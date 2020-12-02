import React from "react";
import Img from "react-image";
import ImageNotFound from "../../../assets/images/image-not-found.jpg";
import { MdZoomOutMap } from "react-icons/md";

const ImgFeatured = props => {
  // console.log("[ImgFeatured] ...");
  const handleForLightbox = props.handleForLightbox;
  // const imgUrl = "https://via.placeholder.com/640x480";
  const imgUrl = `${process.env.REACT_APP_IMG_DIR_LARGE}${props.imgArr.image}`;
  // console.log('[ImgFeatured] ' + imgUrl);

  const imgPrimary = (
    <Img
      src={[imgUrl, ImageNotFound]}
      className="img-loading"
      alt={props.imgArr.name}
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
