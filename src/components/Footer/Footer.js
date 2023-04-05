import React from "react";
import { Link } from "react-router-dom";
import SiteData from "../../assets/_data/_data";
import SocialBtns from "../SocialBtns/SocialBtns";
import parse from "html-react-parser";
import CookieConsent from "react-cookie-consent";

const Footer = () => {
  return (
    <>
    <footer>
      <div className="container full-width">
        <div className="row">
          <div className="col-tablet-12 col-xs-6">
            <h4>{SiteData.brand.name}</h4>
            <ul className="ul-footer">
              <li>
                <span>{parse(SiteData.contact.addressPrint)}</span>
              </li>
            </ul>
          </div>

          <div className="col-tablet-12 col-xs-6 col-ftr-contact">
            <div className="title-with-fa-links">
              <SocialBtns social={SiteData.social} classes="on-dark-bg" />
            </div>
            <ul className="ul-footer">
              <li>
                <span>Telephone: <a href={`tel:${SiteData.contact.telephoneCode}`}>{SiteData.contact.telephone}</a></span>
              </li>
              <li className="li-inline">
                <Link to={SiteData.navigationFooter.columnC[0].slug}>
                  {SiteData.navigationFooter.columnC[0].title}
                </Link>
                <a
                  href={SiteData.navigationFooter.columnC[1].url}
                  title={SiteData.navigationFooter.columnC[1].titleHover}
                  target={SiteData.navigationFooter.columnC[1].target}
                >
                  {SiteData.navigationFooter.columnC[1].title}
                </a>
              </li>
              <li>
              <Link to={SiteData.navigationFooter.columnC[2].slug}>
                  {SiteData.navigationFooter.columnC[2].title}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    <CookieConsent
      sameSite="lax"
    >
      This website uses <Link to="/privacy">cookies</Link> to enhance the user experience.
    </CookieConsent>
    </>
  );
};

export default Footer;
