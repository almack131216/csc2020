import img1 from "../images/carousel/homepage/aston-martin-front.jpg";
import img2 from "../images/carousel/homepage/aston-martin-rear.jpg";
import img3 from "../images/carousel/homepage/jaguar-etype.jpg";
import img4 from "../images/carousel/homepage/showroom.jpg";
import img5 from "../images/carousel/homepage/triumph-tr6-headlamp.jpg";

const imgArr = [
  {
    src: img1,
    alt: "Silver Aston Martin DB5 front"
  },
  {
    src: img2,
    alt: "Blue Aston Martin DB6 rear quarter"
  },
  {
    src: img3,
    alt: "Jaguar E-Type"
  },
  {
    src: img4,
    alt: "Classic & Sportscar Centre Showroom"
  },
  {
    src: img5,
    alt: "Yellow Triumph TR6 headlamp"
  }
];

// Carousel images
// ARR - put objects into array (need for .map())
let Images = [];
for (let i = 0; i < imgArr.length; i++) {
  Images.push({
    src: `${imgArr[i].src}`,
    alt: imgArr[i].alt
  });
}
// (END) Carousel images

export { imgArr, Images };
