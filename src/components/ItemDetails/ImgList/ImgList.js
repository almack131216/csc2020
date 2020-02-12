import React from "react";
import Img from "react-image";
import ImageNotFound from "../../../assets/images/image-not-found.jpg";
import { MdZoomOutMap } from "react-icons/md";
import { Link } from "react-router-dom";

const ImgList = props => {
  console.log("[ImgList] ...");
  const handleForLightbox = props.handleForLightbox;
  const itemImages = props.imgsArr;

  // MAP - return images
  const imgAttachments = itemImages.map((img, index) => {
    return (
      <li key={index}>
        <div class="img-hover-overlay open-lightbox">
          <Img
            src={[img.src, ImageNotFound]}
            className="img-loading"
            alt={img.name}
          />
          <div class="overlay">
            <MdZoomOutMap onClick={() => handleForLightbox(index)} />
            <a
              href={`https://www.classicandsportscar.ltd.uk/force-download.php?file=images_catalogue/large/${img.filename}`}
              class="disk"
              title="Download - Save this photo"
            >
              Save Photo
            </a>
          </div>
        </div>
      </li>
    );
  });
  return <ul className="ul-img-list">{imgAttachments}</ul>;
};

export default ImgList;
