import React, { useState, useEffect } from "react";
import TitleSplitter from "../../components/TitleSplitter/TitleSplitter";
import { setDocumentTitle, ConsoleLog } from "../../assets/js/Helpers";
import { imgArray, textArray } from "../../assets/_data/_data-contact";
import SiteData from "../../assets/_data/_data";
import BigGrid from "../../components/Items/BigGrid/BigGrid";
import {
  CB_Contact,
  CB_OpeningHours,
  CB_Address
} from "../../components/ContactBoxes/ContactBoxes";
import InfoBoxes from "../../components/InfoBoxes/InfoBoxes";

const Contact = props => {
  const [images, setImages] = useState([]);
  const [imageSettings, setImageSettings] = useState({});
  const columnsContact = [CB_OpeningHours, CB_Contact, CB_Address];
  // let images = [];
  // const context = useContext(ItemContext);
  // const { getData, catData } = context;

  // const imgCarousel = <CarouselDynamic imgsArr={Images} />;

  // useEffect
  useEffect(() => {
    ConsoleLog('[Contact]');
    window.scrollTo(0, 0);
    setDocumentTitle(`Contact ${SiteData.brand.name}`);
    const Images = [...imgArray];
    // ConsoleLog(Images);

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
    ConsoleLog("[Contact] imgArr: " + imgArr);
    setImages(imgArr);

    let gridSettings = {};
    gridSettings.showExcerpt = true;
    gridSettings.showCategoryLink = false;
    gridSettings.layout = "item-card six";
    setImageSettings(gridSettings);
    // (END) Carousel Images
  }, []);
  // (END) useEffect

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <section className="content-wrapXXX bg-accent">
            <div className="contentXXX full-width">
              {/* <DemoCarousel /> */}
              {/* {imgCarousel} */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9342.847452496195!2d-0.6581869!3d54.1674676!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x54cad499cf1d7ba1!2sClassic%20%26%20Sportscar%20Centre!5e0!3m2!1sen!2scz!4v1584009165896!5m2!1sen!2scz"
                width="100%"
                height="100%"
                title="Google Map"
                frameBorder="0"
                style={{ border: "0", minHeight: "400px" }}
                allowFullScreen={false}
                aria-hidden={false}
                tabIndex="0"
              ></iframe>
            </div>
          </section>
          <TitleSplitter titleArr={{ title: SiteData.brand.name }} />
          <InfoBoxes columnsArr={columnsContact} rowClass="generic-row" />
          <TitleSplitter
            titleArr={{ title: "Local Attractions", text: textArray.text }}
          />
          {images ? <BigGrid categoryName={null} items={images} settings={imageSettings} /> : null}
          </div>
          </div>
    </React.Fragment>
  );
};

export default Contact;
