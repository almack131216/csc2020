import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedItems from "../components/FeaturedItems";
import DemoCarousel from "../components/Carousel/Carousel";

export default function Home() {
  return (
    <React.Fragment>
      <DemoCarousel />
      <Services />
      <FeaturedItems />
    </React.Fragment>
  );
}
