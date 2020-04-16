import React, { useEffect } from "react";
import ItemsFeatured from "../../components/ItemsFeatured/ItemsFeatured";
import CarouselDynamic from "../../components/CarouselDynamic/CarouselDynamic";
import NavLeft from "../../components/Sidebar/Navleft/NavLeft";
import TitleSplitter from "../../components/TitleSplitter/TitleSplitter";
import BigGrid from "../../components/Items/BigGrid/BigGrid";
import { useContext } from "react";
import { ItemContext } from "../../Context";
import { setDocumentTitle } from "../../assets/js/Helpers";
import {
  CB_Contact,
  CB_OpeningHours
} from "../../components/ContactBoxes/ContactBoxes";
import InfoBoxes from "../../components/InfoBoxes/InfoBoxes";
import Images from "../../assets/_data/_data-carousel";

const Home = props => {
  const context = useContext(ItemContext);
  const {
    featuredItemsNews,
    featuredItemsTestimonials,
    getData,
    catData
  } = context;
  const columnsContact = [CB_OpeningHours, CB_Contact];

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
      <TitleSplitter
        titleArr={{
          title: catData["Live"].title,
          slug: catData["Live"].slug,
          seeAll: true
        }}
      />
      <ItemsFeatured categoryName="Live" />
      <TitleSplitter
        titleArr={{
          title: catData["Archive"].title,
          slug: catData["Archive"].slug,
          seeAll: true
        }}
      />
      <ItemsFeatured categoryName="Archive" />
      <TitleSplitter
        titleArr={{ title: "CLASSIC & SPORTSCAR CENTRE", slug: "/about" }}
        seeAllArr={{ title: "About Us", slug: "/about" }}
      />
      {/* <ContactBoxes cols={2} /> */}
      <InfoBoxes columnsArr={columnsContact} rowClass="generic-row" />

      {featuredItemsTestimonials ? (
        <>
          <TitleSplitter
            titleArr={{
              title: catData["Testimonials"].title,
              slug: catData["Testimonials"].slug,
              seeAll: true
            }}
          />
          <BigGrid items={featuredItemsTestimonials} />
        </>
      ) : null}

      {featuredItemsNews ? (
        <>
          <TitleSplitter
            titleArr={{
              title: catData["News"].title,
              slug: catData["News"].slug,
              seeAll: true
            }}
          />
          <BigGrid items={featuredItemsNews} />
        </>
      ) : null}
    </React.Fragment>
  );
};

export default Home;
