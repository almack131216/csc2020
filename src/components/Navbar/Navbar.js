import React, { Component } from "react";
import logo from "../../assets/images/logo-classic-and-sportscar-centre.gif";
import { Link } from "react-router-dom";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import SiteData from "../../assets/_data/_data";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar" role="navigation">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 navbar-brand-wrap">
              <Link className="navbar-brand" to={SiteData.root}>
                <img src={logo} alt={SiteData.brand.name} />
              </Link>
              <button
                type="button"
                className="navbar-toggler collapsed"
                onClick={this.handleToggle}
              >
                <span className="fa fa-chevron-down"></span>
                <span className="fa fa-chevron-up"></span>
              </button>
            </div>
            <div className="hidden-md-down col-md-6">
              <h1>{SiteData.brand.strapline}</h1>
              <ul className="ul-header">
                <li className="li-telephone">
                  Telephone: {SiteData.contact.telephone}
                </li>
                <li className="li-contact">
                  <Link to={SiteData.contact.slug}>Contact</Link>
                </li>
              </ul>
              <ul id="menu-social_menu" className="social_menu">
                <li className="facebook">
                  <a href={SiteData.social.facebook}>
                    <FaFacebook />
                  </a>
                </li>
                <li className="instagram">
                  <a href={SiteData.social.instagram}>
                    <FaInstagram />
                  </a>
                </li>
                <li className="youtube">
                  <a href={SiteData.social.youtube}>
                    <FaYoutube />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
