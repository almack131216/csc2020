import React, { useEffect } from "react";
import ItemsFeatured from "../../components/ItemsFeatured/ItemsFeatured";
import CarouselDynamic from "../../components/CarouselDynamic/CarouselDynamic";
import NavLeft from "../../components/Sidebar/Navleft/NavLeft";
import TitleSplitter from "../../components/TitleSplitter/TitleSplitter";
import ContactBoxes from "../../components/ContactBoxes/ContactBoxes";
import BigGrid from "../../components/Items/BigGrid/BigGrid";
import { useContext } from "react";
import { ItemContext } from "../../Context";
import { setDocumentTitle } from "../../assets/js/Helpers";
import Images from "../../assets/_data/_data-carousel";

const Home = props => {
  const context = useContext(ItemContext);
  const {
    featuredItemsNews,
    featuredItemsTestimonials,
    getData,
    catData
  } = context;

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
    getData("Home");
    setDocumentTitle(``);
  }, [getData]);

  return (
    <React.Fragment>
      <section className="content-wrap match-heights bg-accent">
        <div className="sidebar">
          <NavLeft />
        </div>
        <div className="content">{imgCarousel}</div>
      </section>
      <TitleSplitter categoryArr={catData["Live"]} />
      <ItemsFeatured categoryName="Live" />
      <TitleSplitter categoryArr={catData["Archive"]} />
      <ItemsFeatured categoryName="Archive" />
      <TitleSplitter title="CLASSIC & SPORTSCAR CENTRE" />
      <ContactBoxes cols={2} />
      {featuredItemsNews ? (
        <>
          <TitleSplitter categoryArr={catData["News"]} />
          <BigGrid items={featuredItemsNews} />
        </>
      ) : null}

      {featuredItemsTestimonials ? (
        <>
          <TitleSplitter categoryArr={catData["Testimonials"]} />
          <BigGrid items={featuredItemsTestimonials} />
        </>
      ) : null}
    </React.Fragment>
  );
};

export default Home;
