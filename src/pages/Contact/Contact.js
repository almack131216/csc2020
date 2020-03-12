import React, { useState, useEffect } from "react";
// import CarouselDynamic from "../../components/CarouselDynamic/CarouselDynamic";
import NavLeft from "../../components/Sidebar/Navleft/NavLeft";
import TitleSplitter from "../../components/TitleSplitter/TitleSplitter";
// import { useContext } from "react";
// import { ItemContext } from "../../Context";
import { setDocumentTitle } from "../../assets/js/Helpers";
import { imgArray } from "../../assets/_data/_data-contact";
import { Link } from "react-router-dom";
import SiteData from "../../assets/_data/_data";
import SocialBtns from "../../components/SocialBtns/SocialBtns";
import BigGrid from "../../components/Items/BigGrid/BigGrid";
import parse from "html-react-parser";

const Contact = props => {
  const [images, setImages] = useState([]);
  const [imageSettings, setImageSettings] = useState({});
  // let images = [];
  // const context = useContext(ItemContext);
  // const { getData, catData } = context;

  // const imgCarousel = <CarouselDynamic imgsArr={Images} />;

  useEffect(() => {
    // getData("Contact");
    setDocumentTitle(`Contact ${SiteData.brand.name}`);

    console.log(imgArray);
    const Images = [...imgArray];
    console.log(Images);

    // Carousel imgArray
    // ARR - put objects into array (need for .map())
    let imgArr = [];
    for (let i = 0; i < Images.length; i++) {
      imgArr.push({
        id: i,
        src: `${Images[i].src}`,
        name: Images[i].name,
        url: Images[i].url,
        excerpt: Images[i].excerpt
      });
    }
    console.log(">>>", imgArr);
    setImages(imgArr);

    let gridSettings = {};
    gridSettings.showExcerpt = true;
    gridSettings.showCategoryLink = false;
    gridSettings.layout = "item-card six";
    setImageSettings(gridSettings);
    // (END) Carousel Images
  }, []);

  return (
    <React.Fragment>
      <section className="content-wrap match-heights bg-accent">
        <div className="sidebar">
          <NavLeft />
        </div>
        <div className="content">
          {/* <DemoCarousel /> */}
          {/* {imgCarousel} */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9342.847452496195!2d-0.6581869!3d54.1674676!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x54cad499cf1d7ba1!2sClassic%20%26%20Sportscar%20Centre!5e0!3m2!1sen!2scz!4v1584009165896!5m2!1sen!2scz"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: "0" }}
            allowFullScreen={false}
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </section>
      <TitleSplitter title={SiteData.brand.name} />
      {/* Classic & Sportscar Centre is based in one of the most beautiful areas of England. If you're coming to view one of our cars why not take the chance to enjoy some of our local sights. */}
      <div className="container">
        <div className="row">
          <div className="col-tablet-12 col-xs-6">
            <h4>{SiteData.brand.name}</h4>
            <ul className="ul-footer">
              <li>
                <span>{parse(SiteData.contact.address)}</span>
              </li>
            </ul>
          </div>

          <div className="col-tablet-12 col-xs-6 col-ftr-contact">
            <div className="title-with-fa-links">
              <SocialBtns social={SiteData.social} classes="on-dark-bg" />
            </div>
            <ul className="ul-footer">
              <li>
                <span>Telephone: {SiteData.contact.telephone}</span>
              </li>
              <li className="li-inline">
                <Link to={SiteData.navigationFooter.columnC[0].slug}>
                  {SiteData.navigationFooter.columnC[0].title}
                </Link>
                <a
                  href={SiteData.navigationFooter.columnC[1].url}
                  title={SiteData.navigationFooter.columnC[1].titleHover}
                  target={SiteData.navigationFooter.columnC[1].target}
                >
                  {SiteData.navigationFooter.columnC[1].title}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <TitleSplitter title="Local Attractions" />
      {/* {images} */}
      {images ? <BigGrid items={images} settings={imageSettings} /> : null}
    </React.Fragment>
  );
};

export default Contact;
