import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import ItemsContainer from "../containers/ItemsContainer";

export default function Items() {
  return (
    <>
      <Hero herp="roomsHero">
        <Banner title="Our Items">
          <Link to="/" className="btn-primary">
            Return home
          </Link>
        </Banner>
      </Hero>
      <ItemsContainer />
    </>
  );
}
