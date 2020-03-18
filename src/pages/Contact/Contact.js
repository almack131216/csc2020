import React, { useState, useEffect } from "react";
// import CarouselDynamic from "../../components/CarouselDynamic/CarouselDynamic";
import NavLeft from "../../components/Sidebar/Navleft/NavLeft";
import TitleSplitter from "../../components/TitleSplitter/TitleSplitter";
// import { useContext } from "react";
// import { ItemContext } from "../../Context";
import { setDocumentTitle } from "../../assets/js/Helpers";
import { imgArray, textArray } from "../../assets/_data/_data-contact";
// import { Link } from "react-router-dom";
import SiteData from "../../assets/_data/_data";
// import SocialBtns from "../../components/SocialBtns/SocialBtns";
import BigGrid from "../../components/Items/BigGrid/BigGrid";
// import Widget from "../../components/Sidebar/InfoBox/InfoBox";
// import WidgetData from "../../assets/_data/_data-widgets";
import ContactBoxes from "../../components/ContactBoxes/ContactBoxes";
// import parse from "html-react-parser";

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
            style={{ border: "0", minHeight: "240px" }}
            allowFullScreen={false}
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </section>
      <TitleSplitter title={SiteData.brand.name} />
      <ContactBoxes cols={3} />
      <TitleSplitter title="Local Attractions" body={textArray.body} />
      {images ? <BigGrid items={images} settings={imageSettings} /> : null}
    </React.Fragment>
  );
};

export default Contact;
