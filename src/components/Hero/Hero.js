import React from "react";
import { Link } from "react-router-dom";
import HeroVideo from "../../assets/mov/230314_web-bg_jaguar_e-type-720-lite.mov";
import Poster from "../../assets/mov/230314_poster.png"

const Hero = () => (
    <section className="heropanel">
      <div className="heropanel--wrap">
        <video
          autoPlay
          muted
          loop
          id="myVideo"
          className="heropanel--video"
          preload="auto"
          poster={Poster}
        >
          <source src={HeroVideo} type="video/mp4" />
        </video>
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="heropanel--content"
        >
          <h1>
            Welcome to <span>Classic & Sportscar&nbsp;Centre</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <a href="#" className="btn btn--block white">
            Showroom
          </a>
          <a href="#" className="btn btn--block black">
            Brokerage
          </a>
        </div>
        </div>
      </section>
);

export default Hero;
