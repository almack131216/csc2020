import React, { useEffect } from "react";
import ItemsFeatured from "../../components/ItemsFeatured/ItemsFeatured";
import DemoCarousel from "../../components/Carousel/Carousel";
import NavLeft from "../../components/Sidebar/Navleft/NavLeft";
import { useContext } from "react";
import { ItemContext } from "../../Context";

const Home = props => {
  const context = useContext(ItemContext);
  const { getData } = context;

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
      <ItemsFeatured items="Live" />
      <ItemsFeatured items="Archive" />
    </React.Fragment>
  );
};

export default Home;
