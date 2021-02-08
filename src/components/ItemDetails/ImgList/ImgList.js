import React from "react";
import Img from "react-image";
import ImageNotFound from "../../../assets/images/image-not-found.jpg";
import { MdZoomOutMap, MdFileDownload } from "react-icons/md";

const ImgList = props => {
  // console.log("[ImgList] ...");
  const handleForLightbox = props.handleForLightbox;
  const itemImages = props.imgsArr;
  // console.log("[ImgList] ...", itemImages);
  const dirDownloadFrom = props.dirDownloadFrom;

  // MAP - return images
  const imgAttachments = itemImages.map((img, index) => {
    return (
      <li key={index}>
        <div className="img-hover-overlay open-lightbox">
          <Img
            src={[img.src, ImageNotFound]}
            className="img-loading"
            alt={img.name}
          />
          <div className="overlay">
            <div className="btns">
              <a
                href={`https://classicandsportscar.ltd.uk/force-download.php?file=${dirDownloadFrom.replace('https://classicandsportscar.ltd.uk/','')}${img.filename}`}
                className="btn-download"
                title="Download this photo"
              >
                <MdFileDownload />
              </a>
              <MdZoomOutMap
                className="btn-zoom"
                onClick={() => handleForLightbox(index)}
              />
            </div>
          </div>
        </div>
      </li>
    );
  });
  return <ul className="ul-img-list">{imgAttachments}</ul>;
};

export default ImgList;
