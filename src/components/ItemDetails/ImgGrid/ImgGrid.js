import React from "react";
import Img from "react-image";
import ImageNotFound from "../../../assets/images/image-not-found.jpg";

const ImgGrid = props => {
  // console.log("[ImgGrid] ...");
  const handleForLightbox = props.handleForLightbox;
  const itemImages = props.imgsArr;

  // MAP - return images
  const imgAttachments = itemImages.map((img, index) => {
    return (
      <li key={index}>
        <Img
          src={[img.thumb, ImageNotFound]}
          className="img-loading"
          alt={img.name}
          onClick={() => handleForLightbox(index)}
        />
      </li>
    );
  });
  return <ul className="ul-img-grid">{imgAttachments}</ul>;
};

export default ImgGrid;
