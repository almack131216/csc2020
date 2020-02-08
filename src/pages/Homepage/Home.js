import React, { useEffect } from "react";
import ItemsFeatured from "../../components/ItemsFeatured/ItemsFeatured";
import DemoCarousel from "../../components/Carousel/Carousel";
import NavLeft from "../../components/Sidebar/Navleft/NavLeft";
import TitleSplitter from "../../components/TitleSplitter/TitleSplitter";
import BigGrid from "../../components/Items/BigGrid/BigGrid";
import { useContext } from "react";
import { ItemContext } from "../../Context";
import { setDocumentTitle } from "../../assets/js/Helpers";

const Home = props => {
  const context = useContext(ItemContext);
  const {
    featuredItemsNews,
    featuredItemsTestimonials,
    getData,
    catData
  } = context;

  useEffect(() => {
    getData("Home");
    setDocumentTitle(``);
  }, [getData]);

  return (
    <React.Fragment>
      <section className="content-wrap match-heights bg-accent">
        <div className="sidebar">
          <NavLeft />
        </div>
        <div className="content">
          <DemoCarousel />
        </div>
      </section>
      <TitleSplitter categoryArr={catData["Live"]} />
      <ItemsFeatured categoryName="Live" />
      <TitleSplitter categoryArr={catData["Archive"]} />
      <ItemsFeatured categoryName="Archive" />

      {featuredItemsNews ? (
        <>
          <TitleSplitter categoryArr={catData["News"]} />
          <BigGrid items={featuredItemsNews} />
        </>
      ) : null}

      {featuredItemsTestimonials ? (
        <>
          <TitleSplitter categoryArr={catData["Testimonials"]} />
          <BigGrid items={featuredItemsTestimonials} />
        </>
      ) : null}
    </React.Fragment>
  );
};

export default Home;
