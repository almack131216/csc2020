import React, { useEffect } from "react";
import ItemsFeatured from "../../components/ItemsFeatured/ItemsFeatured";
import CarouselDynamic from "../../components/CarouselDynamic/CarouselDynamic";
import NavLeft from "../../components/Sidebar/Navleft/NavLeft";
import TitleSplitter from "../../components/TitleSplitter/TitleSplitter";
import Banner from "../../components/Banner/Banner";
// import { Link } from "react-router-dom";
import BigGrid from "../../components/Items/BigGrid/BigGrid";
import { useContext } from "react";
import { ItemContext } from "../../Context";
import { setDocumentTitle, ConsoleLog } from "../../assets/js/Helpers";
import {
  CB_Contact,
  CB_OpeningHours
} from "../../components/ContactBoxes/ContactBoxes";
import InfoBoxes from "../../components/InfoBoxes/InfoBoxes";
import {Images} from "../../assets/_data/_data-carousel";
import { FaChevronRight } from "react-icons/fa";

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
  const imgCarousel = <CarouselDynamic imgsArr={Images} />;

  // useEffect
  useEffect(() => {
    ConsoleLog('[Restoration]');
    window.scrollTo(0, 0);
    getData("Home");
    setDocumentTitle(``);
  }, [getData]);
  // (END) useEffect

  return (
    <React.Fragment>
      <section className="content-wrap match-heights bg-accent">
        <div className="sidebar">
          <NavLeft />
        </div>
        <div className="content">{imgCarousel}</div>
      </section>
      {/* <Banner title="Covid 19 update and opening information" subtitle="" type="high-alert">
      <a href="https://www.classicandsportscar.ltd.uk/covid-19-november-update/news/50047" className="btn-primary">
        <FaChevronRight />More information
        </a>
      </Banner> */}
      <Banner title="COVID 19 update, opening information & Christmas Message" subtitle="" type="christmas">
      <a href="https://www.classicandsportscar.ltd.uk/covid-19-december-update-and-christmas-message/news/50425" className="btn-primary">
        <FaChevronRight />More information
        </a>
        {/* <Link to="/contact" className="btn-primary">
        <FaChevronRight />Office Hours
        </Link> */}
      </Banner>
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
          slug: '/sold',
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
