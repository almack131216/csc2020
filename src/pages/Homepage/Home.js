import React, { useEffect } from "react";
import ItemsFeatured from "../../components/ItemsFeatured/ItemsFeatured";
import CarouselDynamic from "../../components/CarouselDynamic/CarouselDynamic";
import TitleSplitter from "../../components/TitleSplitter/TitleSplitter";
// import Banner from "../../components/Banner/Banner";
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
// import { FaChevronRight } from "react-icons/fa";

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
      <section className="content-wrap bg-accent">
        <div className="content heropanel">          

    <section className="heropanel--wrap">
        <video autoPlay muted loop id="myVideo" className="heropanel--video">
            <source src="https://www.w3schools.com/howto/rain.mp4" type="video/mp4" />
        </video>
        <div data-aos="fade-up" data-aos-delay="500" className="heropanel--content">
            <h1>Welcome to <span>Classic & Sportscar Centre</span></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <a href="#" className="herobtn white">Showroom</a>
            <a href="#" className="herobtn black">Brokerage</a>
        </div>
    </section>
    
          
        </div>
      </section>
      {/* <Banner title="September 17th-19th" subtitle="Come and see us this weekend at Goodwood Revival" type="high-alert">
        <a href="https://classicandsportscar.ltd.uk/goodwood-revival-17th-19th-september-2021/news/54437" title="Link to this story" className="btn-primary">
          <FaChevronRight />More information
        </a>
        <span className="caps-black">Please note: the showroom will be closed this Sunday</span>
      </Banner> */}
      {/* <Banner title="We would like to wish all of our friends & customers a very Happy Christmas and Prosperous New Year" subtitle="" type="christmas">
      <a href="https://classicandsportscar.ltd.uk/covid-19-december-update-and-christmas-message/news/50425" className="btn-primary">
        <FaChevronRight />More information
        </a>
        <Link to="/contact" className="btn-primary">
        <FaChevronRight />Christmas Office Hours
        </Link>
      </Banner> */}
      <div class="container">
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
      <InfoBoxes columnsArr={columnsContact} rowclassName="generic-row" />

      {featuredItemsTestimonials ? (
        <>
          <TitleSplitter
            titleArr={{
              title: catData["Testimonials"].title,
              slug: catData["Testimonials"].slug,
              seeAll: true
            }}
          />
          <BigGrid categoryName={"Testimonials"} items={featuredItemsTestimonials} />
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
          <BigGrid categoryName={"News"} items={featuredItemsNews} />
        </>
      ) : null}
      </div>
    </React.Fragment>
  );
};

export default Home;
