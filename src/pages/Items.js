import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import ItemsContainer from "../containers/ItemsContainer";
import NavLeft from "../components/Navigation/NavLeft";

export default function Items() {
  return (
    <>
      <section className="content-wrap splitter">
        <div className="content-left">
          <NavLeft />
        </div>
        <div className="content">
          <ItemsContainer />
        </div>
      </section>
    </>
  );
}
