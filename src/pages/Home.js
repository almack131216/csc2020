import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import ItemsFeatured from "../components/ItemsFeatured/ItemsFeatured";
import DemoCarousel from "../components/Carousel/Carousel";
import NavLeft from "../components/Navigation/NavLeft";

export default function Home() {
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
      <ItemsFeatured />
    </React.Fragment>
  );
}
