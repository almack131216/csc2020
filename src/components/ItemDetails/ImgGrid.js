import React from "react";
import Img from "react-image";
import ImageNotFound from "../../assets/images/image-not-found.jpg";

const ImgGrid = props => {
  console.log("[ImgGrid] ...");
  const itemImages = props.imgsArr;

  // ARR - put objects into array (need for .map())
  const imgAttachmentsArr = [];
  for (let i = 0; i < itemImages.length; i++) {
    imgAttachmentsArr.push(itemImages[i]);
    console.log(
      "IMG: ",
      `${process.env.REACT_APP_IMG_DIR_THUMBS}${itemImages[i].image}`
    );
  }

  // MAP - return images
  const imgAttachments = imgAttachmentsArr.map((img, index) => {
    return (
      <Img
        key={index}
        src={[
          `${process.env.REACT_APP_IMG_DIR_THUMBS}${img.image}`,
          ImageNotFound
        ]}
        className="img-loading"
        alt={img.name}
      />
    );
  });

  return <div className="img-grid">{imgAttachments}</div>;
};

export default ImgGrid;
