import React from "react";
import Img from "react-image";
import ImageNotFound from "../../assets/images/image-not-found.jpg";

const ImgGrid = props => {
  console.log("[ImgGrid] ...");
  const handleForLightbox = props.handleForLightbox;
  const itemImages = props.imgsArr;

  // MAP - return images
  const imgAttachments = itemImages.map((img, index) => {
    return (
      <li key={index} className="css-grid__item">
        <Img
          src={[img.src, ImageNotFound]}
          className="img-loading css-grid__img top img-responsive"
          alt={img.name}
          onClick={() => handleForLightbox(index)}
        />
      </li>
    );
  });
  return <ul className="ul-img-grid">{imgAttachments}</ul>;
};

export default ImgGrid;
