import React, { useEffect } from "react";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import CarouselDynamic from "../../components/CarouselDynamic/CarouselDynamic";
import NavLeft from "../../components/Sidebar/Navleft/NavLeft";
import TitleSplitter from "../../components/TitleSplitter/TitleSplitter";
import {
  CB_Contact,
  CB_OpeningHours
} from "../../components/ContactBoxes/ContactBoxes";
import InfoBoxes from "../../components/InfoBoxes/InfoBoxes";
import { setDocumentTitle } from "../../assets/js/Helpers";
import { textArray } from "../../assets/_data/_data-about";
import {Images} from "../../assets/_data/_data-carousel";
import SiteData from "../../assets/_data/_data";

const About = props => {
  // Carousel images
  const imgCarousel = <CarouselDynamic imgsArr={Images} />;

  useEffect(() => {
    setDocumentTitle(`About ${SiteData.brand.name}`);
  }, []);

  const columnsArr = [
    {
      title: textArray.box1.title,
      text: parse(textArray.box1.text),
      class: "title-green"
    },
    {
      title: textArray.box2.title,
      text: parse(textArray.box2.text),
      class: "title-red"
    }
  ];

  const columnsContact = [CB_OpeningHours, CB_Contact];

  return (
    <React.Fragment>
      <section className="content-wrap match-heights bg-accent">
        <div className="sidebar">
          <NavLeft />
        </div>
        <div className="content">{imgCarousel}</div>
      </section>
      <section>
        <div className="content-inner">
          <h1>{parse(textArray.title)}</h1>
          <h2>{parse(textArray.titleSub)}</h2>
          {parse(textArray.text)}
        </div>
      </section>
      <InfoBoxes columnsArr={columnsArr} rowClass="generic-row padding-y" />

      <section>
        <div className="content-inner">
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
      <TitleSplitter
        titleArr={{ title: "Visit or Contact", slug: "/contact" }}
      />
      <InfoBoxes
        columnsArr={columnsContact}
        rowClass="generic-row padding-bottom"
      />
    </React.Fragment>
  );
};

export default About;
