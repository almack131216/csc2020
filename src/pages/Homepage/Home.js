import React, { useEffect } from "react";
import SEO from "../../components/SEO/SEO";
import ItemsFeatured from "../../components/ItemsFeatured/ItemsFeatured";
// import CarouselDynamic from "../../components/CarouselDynamic/CarouselDynamic";
import TitleSplitter from "../../components/TitleSplitter/TitleSplitter";
import Banner from "../../components/Banner/Banner";
// import { Link } from "react-router-dom";
import BigGrid from "../../components/Items/BigGrid/BigGrid";
import { useContext } from "react";
import { ItemContext } from "../../Context";
import { ConsoleLog, getDateToday } from "../../assets/js/Helpers";//, getDateToday
import isNewsImage from "../../assets/images/260625_popup-banner.jpg";
import {
  CB_Contact,
  CB_OpeningHours,
} from "../../components/ContactBoxes/ContactBoxes";
import InfoBoxes from "../../components/InfoBoxes/InfoBoxes";
// import { Images } from "../../assets/_data/_data-carousel";
import Hero from "../../components/Hero/Hero";
import { FaChevronRight } from "react-icons/fa";

const ShowNewsBanner = getDateToday() > '2026-06-24' && getDateToday() < '2026-07-04' ? true : false;

const Home = (props) => {
  const context = useContext(ItemContext);
  const { featuredItemsVideos, featuredItemsTestimonials, getData, catData } =
    context;
  const columnsContact = [CB_OpeningHours, CB_Contact];

  // Carousel images
  // const imgCarousel = <CarouselDynamic imgsArr={Images} />;

  // useEffect
  useEffect(() => {
    ConsoleLog("[Home]");
    window.scrollTo(0, 0);
    getData("Home");
    // setDocumentTitle(``);
  }, [getData]);
  // (END) useEffect

  return (
    <React.Fragment>
      <SEO />
      <Hero />
      {
        ShowNewsBanner ? 
        <Banner title="Mon. 29th - Fri. 3rd July 2026" subtitle="Pop up Showroom coming to Brighton" type="news-alert img-right">
        <div Style="display:block;margin:0 0 15px 0;">
        <a href="https://www.classicandsportscar.ltd.uk/pop-up-showroom-coming-to-brighton/news/77143" title="Link to this story" className="btn-primary">
          <img src={isNewsImage} alt="Pop up showroom coming to Brighton" style={{ width:'100%',maxWidth:'600px' }}/>
          </a>
        </div>
        <a href="https://www.classicandsportscar.ltd.uk/pop-up-showroom-coming-to-brighton/news/77143" title="Link to this story" className="btn-primary">
          <FaChevronRight />More information
        </a>
        {/* <span className="caps-black">Please note: the showroom will be closed this Sunday</span> */}
      </Banner>
      : null
      }
      
      {/* <Banner title="We would like to wish all of our friends & customers a very Happy Christmas and Prosperous New Year" subtitle="" type="christmas"> */}
      {/* <a href="https://classicandsportscar.ltd.uk/covid-19-december-update-and-christmas-message/news/50425" className="btn-primary">
        <FaChevronRight />More information
        </a> */}
        {/* <Link to="/contact" className="btn-primary">
        <FaChevronRight />Christmas Office Hours
        </Link> */}
      {/* </Banner> */}
      <div className="container">
        <div className="row">
          <TitleSplitter
            titleArr={{
              title: catData["Live"].title,
              slug: catData["Live"].slug,
              seeAll: true,
            }}
          />
          <ItemsFeatured categoryName="Live" />
        </div>
        <div className="row">
          <TitleSplitter
            titleArr={{
              title: catData["Archive"].title,
              slug: "/sold",
              seeAll: true,
            }}
          />
          <ItemsFeatured categoryName="Archive" />
        </div>
        <div className="row">
          <TitleSplitter
            titleArr={{ title: "CLASSIC & SPORTSCAR CENTRE", slug: "/about" }}
            seeAllArr={{ title: "About Us", slug: "/about" }}
          />
          {/* <ContactBoxes cols={2} /> */}
          <InfoBoxes columnsArr={columnsContact} rowclassName="generic-row" />
        </div>

        {featuredItemsTestimonials ? (
          <div className="row">
            <TitleSplitter
              titleArr={{
                title: catData["Testimonials"].title,
                slug: catData["Testimonials"].slug,
                seeAll: true,
              }}
            />
            <BigGrid
              categoryName={"Testimonials"}
              items={featuredItemsTestimonials}
            />
          </div>
        ) : null}

        {featuredItemsVideos ? (
          <div className="row">
            <TitleSplitter
              titleArr={{
                icon: 'news',
                title: catData["News"].title,
                slug: catData["News"].slug,
                seeAll: true,
              }}
            />
            <BigGrid categoryName={"News"} items={featuredItemsVideos} />
          </div>
        ) : null}

        {/* {featuredItemsVideos ? (
          <div className="row">
            <TitleSplitter
              titleArr={{
                icon: 'videos',
                title: catData["Videos"].title,
                slug: catData["Videos"].slug,
                seeAll: true,
              }}
            />
            <BigGrid categoryName={"Videos"} items={featuredItemsVideos} />
          </div>
        ) : null} */}
      </div>
    </React.Fragment>
  );
};

export default Home;
