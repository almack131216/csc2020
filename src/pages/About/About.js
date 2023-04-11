import React, { useEffect } from "react";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import CarouselDynamic from "../../components/CarouselDynamic/CarouselDynamic";
import SEO from "../../components/SEO/SEO";
import TitleSplitter from "../../components/TitleSplitter/TitleSplitter";
import {
  CB_Contact,
  CB_OpeningHours,
} from "../../components/ContactBoxes/ContactBoxes";
import InfoBoxes from "../../components/InfoBoxes/InfoBoxes";
import { ConsoleLog } from "../../assets/js/Helpers";
import { textArray } from "../../assets/_data/_data-about";
import { Images } from "../../assets/_data/_data-carousel";
import SiteData from "../../assets/_data/_data";

const About = (props) => {
  // Carousel images
  const imgCarousel = <CarouselDynamic imgsArr={Images} />;

  useEffect(() => {
    ConsoleLog("[About]");
    window.scrollTo(0, 0);
    // setDocumentTitle(`About ${SiteData.brand.name}`);
  }, []);
  // (END) useEffect

  const columnsArr = [
    {
      title: textArray.box1.title,
      text: parse(textArray.box1.text),
      class: "title-green",
    },
    {
      title: textArray.box2.title,
      text: parse(textArray.box2.text),
      class: "title-red",
    },
  ];

  const columnsContact = [CB_OpeningHours, CB_Contact];

  return (
    <React.Fragment>
      <SEO
        title={`About ${SiteData.brand.name}`}
        description="Classic & Sportscar Centre is now in its 30th year of business and what a year it has been."
      />
      <div className="container">
        <section className="row">
          <div className="col-xs-12 padding-x-0 bg-accent">{imgCarousel}</div>
        </section>
        <section className="row">
          <div className="content-inner">
            <h1>{parse(textArray.title)}</h1>
            <h2>{parse(textArray.titleSub)}</h2>
            {parse(textArray.text)}
            <InfoBoxes
              columnsArr={columnsArr}
              rowClass="padding-y"
            />

            {parse(textArray.textAppend)}

            <p>
              <strong>More information</strong> on our
              <Link
                className="margin-left-1"
                to="/history"
                title="Link to Classic & Sportscar Centre history page"
              >
                History Page{" "}
              </Link>
            </p>
          </div>
        </section>
        <section className="row">
          <div className="content-innerXXX">
            <TitleSplitter
              titleArr={{ title: "Visit or Contact", slug: "/contact" }}
            />
            <InfoBoxes
              columnsArr={columnsContact}
              rowClass="generic-rowXXX padding-bottom"
            />
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default About;
