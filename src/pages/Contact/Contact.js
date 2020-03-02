import React, { useEffect } from "react";
import CarouselDynamic from "../../components/CarouselDynamic/CarouselDynamic";
import NavLeft from "../../components/Sidebar/Navleft/NavLeft";
import TitleSplitter from "../../components/TitleSplitter/TitleSplitter";
import { useContext } from "react";
import { ItemContext } from "../../Context";
import { setDocumentTitle } from "../../assets/js/Helpers";
import Images from "../../assets/_data/_data-contact";

const Contact = props => {
  const context = useContext(ItemContext);
  const { getData, catData } = context;

  // const carouselId = 39082; // image sequence id

  // Carousel images
  // ARR - put objects into array (need for .map())
  const images = [];
  for (let i = 0; i < Images.length; i++) {
    images.push({
      src: `${Images[i].src}`,
      name: Images[i].alt
    });
  }
  // (END) Carousel images

  const imgCarousel = <CarouselDynamic imgsArr={images} />;

  useEffect(() => {
    getData("Contact");
    setDocumentTitle(``);
  }, [getData]);

  return (
    <React.Fragment>
      <section className="content-wrap match-heights bg-accent">
        <div className="sidebar">
          <NavLeft />
        </div>
        <div className="content">
          {/* <DemoCarousel /> */}
          {imgCarousel}
        </div>
      </section>
      <TitleSplitter categoryArr={catData["Live"]} />
    </React.Fragment>
  );
};

export default Contact;
