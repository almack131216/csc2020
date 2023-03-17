import React, { useEffect } from "react";
import CarouselDynamic from "../../components/CarouselDynamic/CarouselDynamic";
import TitleSplitter from "../../components/TitleSplitter/TitleSplitter";
// import BigGrid from "../../components/Items/BigGrid/BigGrid";
import ItemLite from "../../components/Items/Item/ItemLite";
import { useContext } from "react";
import { ItemContext } from "../../Context";
import { setDocumentTitle, ConsoleLog } from "../../assets/js/Helpers";
import {
  CB_Contact,
  CB_OpeningHours,
} from "../../components/ContactBoxes/ContactBoxes";
import InfoBoxes from "../../components/InfoBoxes/InfoBoxes";
import { Images } from "../../assets/_data/_data-carousel-restoration";

const Restoration = (props) => {
  const context = useContext(ItemContext);
  const { catData } = context;
  const columnsContact = [CB_OpeningHours, CB_Contact];

  const featuredItemsRestoration = [
    {
      name: "Classic car maintenance",
      slug: "restoration/classic-car-maintenance",
      image: `${process.env.REACT_APP_IMG_DIR_LARGE}workshop_47562.jpg`,
      excerpt: "",
    },
    {
      name: "Classic car body & paintwork",
      slug: "restoration/classic-car-body-and-paintwork",
      image: `${process.env.REACT_APP_IMG_DIR_LARGE}bodyshop_47563.jpg`,
      excerpt: "",
    },
    {
      name: "Vehicle upholstery and trimming",
      slug: "restoration/vehicle-upholstery-and-trimming",
      image: `${process.env.REACT_APP_IMG_DIR_LARGE}trim_47564.jpg`,
      excerpt: "",
    },
  ];

  const settings = {
    layout: "item-card three",
  };

  // Carousel images
  const imgCarousel = <CarouselDynamic imgsArr={Images} />;

  // useEffect
  useEffect(() => {
    ConsoleLog("[Restoration]");
    window.scrollTo(0, 0);
    setDocumentTitle(`Restoration Services`);
  }, []);
  // (END) useEffect

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <section className="bg-accent">
            <div>{imgCarousel}</div>
          </section>

          <section>
            <div className="content-inner border-0">
              <h1>{catData["Restoration"].title}</h1>
              <div className="post-text-body">
                {catData["Restoration"].text}
              </div>
            </div>
          </section>

          <div className="items-wrap big-items-wrap">
            <div className="cards">
              {featuredItemsRestoration
                ? featuredItemsRestoration.map((item, index) => {
                    // return <p key={index}>{item.name}</p>;
                    return (
                      <ItemLite
                        key={index}
                        item={item}
                        itemSettingsCust={settings}
                      />
                    );
                  })
                : null}
            </div>
          </div>

          <TitleSplitter
            titleArr={{ title: "CLASSIC & SPORTSCAR CENTRE", slug: "/about" }}
            seeAllArr={{ title: "About Us", slug: "/about" }}
          />
          <InfoBoxes
            columnsArr={columnsContact}
            rowClass="generic-row pad-bottom-2"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Restoration;
