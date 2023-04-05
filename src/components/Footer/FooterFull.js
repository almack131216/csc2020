import React from "react";
import { Link } from "react-router-dom";
import SiteData from "../../assets/_data/_data";
import SocialBtns from "../SocialBtns/SocialBtns";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <h4>{SiteData.brand.name}</h4>
            <ul className="ul-footer">
              {SiteData.navigationFooter.columnA.map((item, index) => (
                <li key={index}>
                  <Link to={item.slug}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <h4>Other Services</h4>
            <ul className="ul-footer">
              {SiteData.navigationFooter.columnB.map((item, index) => (
                <li key={index}>
                  <Link to={item.slug}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div className="title-with-fa-links">
              <h4>Contact Us</h4>
              <SocialBtns social={SiteData.social} classes="on-dark-bg" />
            </div>
            <ul className="ul-footer">
              <li>
                <span>{SiteData.contact.address}</span>
              </li>
              <li>
                <span>Telephone: <a href={`tel:${SiteData.contact.telephoneCode}`}>{SiteData.contact.telephone}</a></span>
              </li>
              <ul className="ul-footer">
                {SiteData.navigationFooter.columnC.map((item, index) => (
                  <li key={index}>
                    {item.slug ? (
                      <Link to={item.slug}>{item.title}</Link>
                    ) : (
                      <a
                        href={item.url}
                        title={item.titleHover}
                        target={item.target}
                      >
                        {item.title}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
