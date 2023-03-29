import React, { useState, useEffect } from "react";
import HeroVideo from "../../assets/mov/230314_web-bg_jaguar_e-type-720-lite.mov";
import Poster from "../../assets/mov/230314_poster.png";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const heroContent = (
    <>
      <h1>
        Welcome to <span>Classic & Sportscar&nbsp;Centre</span>
      </h1>
      <p>
        Selling classic cars worldwide for over 30 years. All our cars come
        fully prepared from our in-house workshop and are fully inspected prior
        to collection or delivery.
      </p>
      <a href="#" className="btn btn--block white">
        Showroom
      </a>
      <a href="#" className="btn btn--block black">
        Brokerage
      </a>
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
      backgroundImage: `url("${Poster}")`,
      backgroundColor:"white",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
      {isMobile ? (
        <div className="heropanel--wrap">
          {heroContent}
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
