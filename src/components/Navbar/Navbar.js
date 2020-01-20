import React, { Component } from "react";
import logo from "../../assets/images/logo-classic-and-sportscar-centre.gif";
import { Link } from "react-router-dom";
import SocialBtns from "../SocialBtns/SocialBtns";
import DrawerToggleButton from "../Navigation/SideDrawer/DrawerToggleButton";
import SiteData from "../../assets/_data/_data";
import Backdrop from "../Navigation/Backdrop/Backdrop";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: SiteData,
      sideDrawerOpen: false
    };
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  closeSideDrawerHandler = () => {
    // console.log("[App.tsx] closeSideDrawerHandler");
    this.backdropClickHandler();
  };

  render() {
    let classes = ["navbar"];

    if (this.state.sideDrawerOpen) {
      classes.push("side-drawer-open");
    }

    return (
      <nav className={classes.join(" ")} role="navigation">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 navbar-brand-wrap">
              <DrawerToggleButton
                click={this.drawerToggleClickHandler}
              ></DrawerToggleButton>
              <Link className="navbar-brand" to={SiteData.root}>
                <img src={logo} alt={SiteData.brand.name} />
              </Link>
            </div>
            <div className="hidden-md-down navbar-contact-wrap col-md-6">
              <h1>{SiteData.brand.strapline}</h1>
              <ul className="ul-header">
                <li className="li-telephone">
                  Telephone: {SiteData.contact.telephone}
                </li>
                <li className="li-contact">
                  <Link to={SiteData.contact.slug}>Contact</Link>
                </li>
              </ul>
              <SocialBtns social={SiteData.social} />
            </div>
          </div>
        </div>
        <SideDrawer
          show={this.state.sideDrawerOpen}
          navigation={this.state.data.navigation}
          clicked={this.closeSideDrawerHandler}
        />
        {this.state.sideDrawerOpen ? (
          <Backdrop click={this.backdropClickHandler} />
        ) : null}
      </nav>
    );
  }
}

export default Navbar;
