import React from "react";
import Img from "react-image";
import ImageNotFound from "../../assets/images/image-not-found.jpg";
import { MdZoomOutMap } from "react-icons/md";

const ImgFeatured = props => {
  console.log("[ImgFeatured] ...");
  const name = props.imgArr.name;
  const src = props.imgArr.image;
  const imgUrl = `${process.env.REACT_APP_IMG_DIR_LARGE}${src}`;

  const imgPrimary = (
    <Img src={[imgUrl, ImageNotFound]} className="img-loading" alt={name} />
  );

  return (
    <div className="img-featured can-zoom">
      {imgPrimary}
      <button className="btn-zoom">
        <MdZoomOutMap />
      </button>
    </div>
  );
};

export default ImgFeatured;
