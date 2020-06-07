import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { apiGetItemDetails } from "../../assets/js/Helpers";
import Loading from "../Loading/Loading";

const CarouselDynamic = props => {
  const [loading, setLoading] = useState(true);
  const [Images, setImages] = useState([]);

  var settings = {
    className: "slider carousel",
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  useEffect(() => {
    // if we receive itemId...
    if(props.itemId){
      setLoading(true);
      // API - generate end point based on categoryName + itemId
      const apiArr = {
        categoryName: "Restoration",
        itemId: props.itemId
      };
      const apiUrl = apiGetItemDetails(apiArr);
      console.log('[CarouselDynamic] apiUrl: ', apiUrl);
      // (END) API - generate

      fetch(apiUrl)
      .then(response => response.json())
        .then(data => {
          console.log("[CarouselDynamic] fetch() data: ", data);
          let [itemPrimary, ...itemImageAttachments] = data;

          const itemImages = [itemPrimary, ...itemImageAttachments];
          console.log("[CarouselDynamic] fetch() itemImages: ", itemImages);

          // put itemImages into array for carousel
          const images = [];
          for (let i = 0; i < itemImages.length; i++) {
            images.push({
              src: `${process.env.REACT_APP_IMG_DIR_LARGE}${itemImages[i].image}`,
              name: itemImages[i].alt
            });
          }
          setImages(images);
          setLoading(false);
        })
        .catch(() => {
          
        });
    } else {
      // use imgsArr sent by parent
      setImages(props.imgsArr);
      setLoading(false);
      console.log('[CarouselDynamic] Images: ', props.imgsArr);
    }    
  }, [props.itemId,props.imgsArr]);
  
  
  const slides = Images ? Images.map((img, index) => {
    return (
      <div key={index}>
        <img src={img.src} alt={img.alt} />
      </div>
    );
  }) : null;

  return !loading ? <Slider {...settings}>{slides}</Slider> : <Loading />;
};

export default CarouselDynamic;
