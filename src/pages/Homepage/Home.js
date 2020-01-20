import React, { useEffect } from "react";
import ItemsFeatured from "../../components/ItemsFeatured/ItemsFeatured";
import DemoCarousel from "../../components/Carousel/Carousel";
import NavLeft from "../../components/Sidebar/Navleft/NavLeft";
import TitleSplitter from "../../components/TitleSplitter/TitleSplitter";
import { useContext } from "react";
import { ItemContext } from "../../Context";

const Home = props => {
  const context = useContext(ItemContext);
  const { getData, catData } = context;

  useEffect(() => {
    getData("Home");
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
    </React.Fragment>
  );
};

export default Home;
