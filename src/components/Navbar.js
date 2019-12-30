import React, { Component } from "react";
import logo from "../assets/images/logo-classic-and-sportscar-centre.gif";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    isOpen: false
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 navbar-brand-wrap">
              <Link className="navbar-brand" to="/">
                <img src={logo} alt="alt" />
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
              <h1>Selling classic cars worldwide for over 25 years</h1>
              <ul className="ul-header">
                <li className="li-telephone">Telephone: 01944 758000</li>
                <li className="li-contact">
                  <a href="http://www.classicandsportscar.ltd.uk/_wp190503/contact">
                    Contact
                  </a>
                </li>
              </ul>
              <ul id="menu-social_menu" className="social_menu">
                <li
                  id="menu-item-4035"
                  className="facebook menu-item menu-item-type-custom menu-item-object-custom menu-item-4035"
                >
                  <a href="https://www.facebook.com/classicandsportscarcentre/">
                    facebook
                  </a>
                </li>
                <li
                  id="menu-item-4036"
                  className="instagram menu-item menu-item-type-custom menu-item-object-custom menu-item-4036"
                >
                  <a href="https://www.instagram.com/classicandsportscar_centre/">
                    instagram
                  </a>
                </li>
                <li
                  id="menu-item-4034"
                  className="youtube menu-item menu-item-type-custom menu-item-object-custom menu-item-4034"
                >
                  <a href="https://www.youtube.com/channel/UCe47Y8zbsm1wJrb6H2LmKeA">
                    youtube
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
