import React from "react";
import Img from "react-image";
import ImageNotFound from "../../../assets/images/image-not-found.jpg";
import { FaYoutube } from "react-icons/fa";

const ImgGrid = props => {
  // console.log("[ImgGrid] ...");
  const handleForLightbox = props.handleForLightbox;
  const handleForVideobox = props.handleForVideobox;
  const itemImages = props.imgsArr;
  const itemVideos = props.videosArr;

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

  // MAP - return images
  const vidz = itemVideos.map((vid, index) => {
    return (
      <li key={index} className="btn-youtube" onClick={() => handleForVideobox(vid)}>
        <Img
          src={[itemImages[0].thumb, ImageNotFound]}
          className="img-loading is-hidden"
          alt="YouTube Video"
        />
        <FaYoutube
          vid={vid}          
        />
      </li>
    );
  });
  
  return <ul className="ul-img-grid">{imgAttachments}{vidz}</ul>;
};

export default ImgGrid;
