import React, { useState, useEffect } from "react";
import HeroVideo from "../../assets/mov/230314_web-bg_jaguar_e-type-720-lite.mov";
import Poster from "../../assets/mov/230314_poster.jpg";
import isMobilePoster from "../../assets/mov/230314_poster-mob-5.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const heroContent = (
    <>
      <h1>
        Welcome to <span>Classic & Sportscar&nbsp;Centre</span>
      </h1>
      <p>
        Supplying classic cars worldwide for over 30 years. All our cars come
        fully prepared from our in-house workshop and are fully inspected prior
        to collection or delivery.
      </p>
      <div className="heropanel--btns">
        <Link to="/classic-cars-for-sale" className="btn btn--block white">
          Showroom
        </Link>
        <Link to="/classic-car-storage"className="btn btn--block black">
          Storage
        </Link>
      </div>
    </>
  );

  const checkIfMobile = () => {
    console.log('??? ', window.innerWidth)
    if (window.innerWidth < 640) {
      console.log('!!! YES !!! ', window.innerWidth);
      setIsMobile(true);
    }else{
      console.log('!!! NO !!! ', window.innerWidth);
      setIsMobile(false);
    }
  }
  // checkIfMobile();

  // ** CHECK ifMobile when the window is resized
  useEffect(() => {
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return function cleanUp() {
        window.removeEventListener('resize', checkIfMobile);
    };
}, []);

  return (
    <section className={`heropanel ${isMobile ? "isMobile" : "isDesktop"}`} style={{
      backgroundImage: `url("${isMobile ? isMobilePoster : Poster}")`,
      backgroundColor:"#263762",
      backgroundPosition: `${isMobile ? "50% 0%" : "center"}`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
      {isMobile ? (
        <div className="heropanel--wrap">
          <div className="heropanel--content">
            {heroContent}
          </div>
        </div>
      ) : (
        <div className="heropanel--wrap">
          <video
            autoPlay
            id="hero-video"
            preload="auto"
            playsInline
            muted
            loop
            className="heropanel--video"
            poster={Poster}
          >
            <source src={HeroVideo} type="video/mp4" />
          </video>
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="heropanel--content"
          >
            {heroContent}
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
