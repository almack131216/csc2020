import React, { useEffect } from "react";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import CarouselDynamic from "../../components/CarouselDynamic/CarouselDynamic";
import NavLeft from "../../components/Sidebar/Navleft/NavLeft";
import TitleSplitter from "../../components/TitleSplitter/TitleSplitter";
import ContactBoxes from "../../components/ContactBoxes/ContactBoxes";
import { setDocumentTitle } from "../../assets/js/Helpers";
import { textArray } from "../../assets/_data/_data-about";
import Images from "../../assets/_data/_data-carousel";

const About = props => {
  let colClass = ["list-item", "flex-xs-12", "flex-tablet-6", "flex-sm-6"];

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
    setDocumentTitle(`About`);
  }, []);

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
          {parse(textArray.body)}
        </div>
      </section>
      <section className="generic-row padding-y">
        <div className="flex-list">
          <div className={colClass.join(" ")}>
            <div className="list-content">
              <div className="widget">{parse(textArray.box1)}</div>
            </div>
          </div>

          <div className="break xs-down"></div>

          <div className={`${colClass.join(" ")}`}>
            <div className="list-content">
              <div className="widget">{parse(textArray.box2)}</div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="content-inner">
          {parse(textArray.bodyAppend)}

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
      <ContactBoxes cols={2} rowClass="padding-bottom" />
    </React.Fragment>
  );
};

export default About;
