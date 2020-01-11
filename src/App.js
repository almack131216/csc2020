import React, { Component } from "react";
import "./assets/css/bootstrap.min.css";
import "./App.scss";
import Home from "./pages/Homepage/Home";
import Items from "./pages/Items/Items";
import Item from "./pages/Item";
import Error from "./pages/Error";
import { Route, Switch } from "react-router-dom";
import Backdrop from "./components/Navigation/Backdrop/Backdrop";
import SideDrawer from "./components/Navigation/SideDrawer/SideDrawer";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { setDocumentTitle } from "./assets/js/Helpers";
import SiteData from "./assets/_data/_data";

class App extends Component {
  constructor(props) {
    super(props);
    // const context = useContext(ItemContext);
    // const { setDocumentTitle } = this.state;
    setDocumentTitle(process.env.REACT_APP_DOC_TITLE);
    console.log("[App.js] constructor");

    this.state = {
      data: SiteData,
      sideDrawerOpen: false
    };
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
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
    // console.log("[App.js] render... ");
    console.log("[App.js] render... ");

    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <div className="App">
        <Navbar
          drawerClickHandler={this.drawerToggleClickHandler}
          sideDrawerOpen={this.state.sideDrawerOpen}
        />
        <SideDrawer
          show={this.state.sideDrawerOpen}
          navigation={this.state.data.navigation}
          clicked={this.closeSideDrawerHandler}
        />
        {backdrop}
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/classic-cars-for-sale"
              component={() => <Items category="Live" />}
            />
            <Route
              exact
              path="/classic-car-archive"
              component={() => <Items category="Archive" />}
            />
            <Route
              exact
              path="/testimonials"
              component={() => <Items category="Testimonials" />}
            />
            <Route
              exact
              path="/press"
              component={() => <Items category="Press" />}
            />
            <Route
              exact
              path="/news"
              component={() => <Items category="News" />}
            />
            <Route
              exact
              path="/:brand_for-sale"
              component={() => <Items category="Live" />}
            />
            <Route
              exact
              path="/:brand_sold"
              component={() => <Items category="Archive" />}
            />
            <Route
              exact
              path="/*/classic-cars-for-sale/:slug"
              component={Item}
            />
            <Route exact path="/*/classic-car-archive/:slug" component={Item} />
            <Route exact path="/*/press/:slug" component={Item} />
            <Route exact path="/*/testimonials/:slug" component={Item} />
            <Route component={Error} />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
