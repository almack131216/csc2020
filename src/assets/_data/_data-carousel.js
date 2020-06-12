import img1 from "../images/carousel/homepage/aston-martin-front.jpg";
import img2 from "../images/carousel/homepage/aston-martin-rear.jpg";
import img3 from "../images/carousel/homepage/jaguar-etype.jpg";
import img4 from "../images/carousel/homepage/showroom.jpg";
import img5 from "../images/carousel/homepage/triumph-tr6-headlamp.jpg";

const imgArr = [
  {
    src: img1,
    alt: "alt 1"
  },
  {
    src: img2,
    alt: "alt 2"
  },
  {
    src: img3,
    alt: "alt 3"
  },
  {
    src: img4,
    alt: "alt 4"
  },
  {
    src: img5,
    alt: "alt 5"
  }
];

// Carousel images
// ARR - put objects into array (need for .map())
let Images = [];
for (let i = 0; i < imgArr.length; i++) {
  Images.push({
    src: `${imgArr[i].src}`,
    name: imgArr[i].alt
  });
}
// (END) Carousel images

export { imgArr, Images };
