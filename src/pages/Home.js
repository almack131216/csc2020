import React, { useState, useEffect } from "react";
import ItemsFeatured from "../components/ItemsFeatured/ItemsFeatured";
import DemoCarousel from "../components/Carousel/Carousel";
import NavLeft from "../components/Navigation/NavLeft";
import { useContext } from "react";
import { ItemContext } from "../Context";

const Home = props => {
  const context = useContext(ItemContext);

  useEffect(() => {
    console.log("location changed");
    context.getData("Home");
  }, []);

  return (
    <React.Fragment>
      <section className="content-wrap splitter">
        <div className="content-left">
          <NavLeft />
        </div>
        <div className="content">
          <DemoCarousel />
        </div>
      </section>
      <ItemsFeatured items="Live" />
      <ItemsFeatured items="Archive" />
    </React.Fragment>
  );
};

export default Home;
