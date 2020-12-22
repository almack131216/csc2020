import img1 from "../images/carousel/restoration/e-type-restoration_01.jpg";
import img2 from "../images/carousel/restoration/e-type-restoration_02.jpg";
import img3 from "../images/carousel/restoration/e-type-restoration_03.jpg";
import img4 from "../images/carousel/restoration/e-type-restoration_04.jpg";
import img5 from "../images/carousel/restoration/e-type-restoration_05.jpg";
import img6 from "../images/carousel/restoration/e-type-restoration_06.jpg";
import img7 from "../images/carousel/restoration/e-type-restoration_07.jpg";
import img8 from "../images/carousel/restoration/e-type-restoration_08.jpg";
import img9 from "../images/carousel/restoration/e-type-restoration_09.jpg";
import img10 from "../images/carousel/restoration/e-type-restoration_10.jpg";
import img11 from "../images/carousel/restoration/e-type-restoration_11.jpg";

const imgArr = [
  {
    src: img1,
    alt: "Jaguar E-Type Restoration"
  },
  {
    src: img2,
    alt: "Jaguar E-Type Restoration"
  },
  {
    src: img3,
    alt: "Jaguar E-Type Restoration"
  },
  {
    src: img4,
    alt: "Jaguar E-Type Restoration"
  },
  {
    src: img5,
    alt: "Jaguar E-Type Restoration"
  },
  {
    src: img6,
    alt: "Jaguar E-Type Restoration"
  },
  {
    src: img7,
    alt: "Jaguar E-Type Restoration"
  },
  {
    src: img8,
    alt: "Jaguar E-Type Restoration"
  },
  {
    src: img9,
    alt: "Jaguar E-Type Restoration"
  },
  {
    src: img10,
    alt: "Jaguar E-Type Restoration"
  },
  {
    src: img11,
    alt: "Jaguar E-Type Restoration"
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
