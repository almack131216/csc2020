import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedItems from "../components/FeaturedItems";

export default function Home() {
  return (
    <React.Fragment>
      <Hero>
        <Banner title="Home" subtitle="Blah blah">
          <Link to="/items" className="btn-primary">
            Items
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedItems />
    </React.Fragment>
  );
}
