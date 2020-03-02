import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselDynamic = props => {
  var settings = {
    className: "slider carousel",
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const Images = props.imgsArr;
  console.log(Images);
  const slides = Images.map((img, index) => {
    //   let imgUrl = `http://localhost:8080/csc2020-img/images/carousel/${img.url}`;
    let imgUrl = img.src;

    return (
      <div key={index}>
        <img src={imgUrl} alt={img.alt} />
      </div>
    );
  });

  return <Slider {...settings}>{slides}</Slider>;
};

export default CarouselDynamic;
