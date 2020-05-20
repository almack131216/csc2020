import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { MdErrorOutline } from "react-icons/md";
import BtnBack from "../components/BtnBack/BtnBack";

export default function Error() {
  return (
    // <Hero>
    //   <Banner title="404" subtitle="Page not found">
    //     <Link to="/" className="btn-primary">
    //       Return home
    //     </Link>
    //   </Banner>
    // </Hero>
    <div className="item-not-found-wrap">
    <h2>Page not found</h2>
    <p>Sorry, the page you were looking for could not be found.</p>
    {/* <p>{props.itemId ? props.itemId : null}</p> */}
    <div className="icon-wrap">
      <MdErrorOutline />
    </div>
    <BtnBack />
  </div>
  );
}
