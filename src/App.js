import React, { Component } from "react";
import "./assets/css/bootstrap.min.css";
import "./App.scss";
import Home from "./pages/Homepage/Home";
import About from "./pages/About/About";
import Archive from "./pages/Archive/Archive";
import Items from "./pages/Items/Items";
import ItemDetails from "./pages/ItemDetails/ItemDetails";
import Contact from "./pages/Contact/Contact";
import Request from "./pages/Request/Request";
import Error from "./pages/Error";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { setDocumentTitle } from "./assets/js/Helpers";

class App extends Component {
  constructor(props) {
    super(props);
    // const context = useContext(ItemContext);
    // const { setDocumentTitle } = this.state;
    setDocumentTitle(process.env.REACT_APP_DOC_TITLE);
    console.log("[App.js] constructor");
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  render() {
    // console.log("[App.js] render... ");
    console.log("[App.js] render... ");

    return (
      <div className="App">
        <Navbar />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/classic-car-archive/all" component={Archive} />
            <Route
              exact
              path="/selling-a-classic-car"
              component={routerProps => (
                <ItemDetails
                  categoryName="PageText"
                  itemId={8695}
                  pageStyle="TextOnly"
                />
              )}
            />
            <Route
              exact
              path="/classic-car-transportation"
              component={routerProps => (
                <ItemDetails
                  categoryName="PageText"
                  itemId={6513}
                  pageStyle="ImgCarousel"
                />
              )}
            />
            <Route
              exact
              path="/registration-numbers"
              component={routerProps => (
                <ItemDetails
                  categoryName="PageText"
                  itemId={47034}
                  pageStyle="TextOnly"
                />
              )}
            />
            <Route exact path="/request-a-classic-car" component={Request} />
            <Route
              exact
              path="/film-tv-hire"
              component={routerProps => (
                <ItemDetails
                  categoryName="FilmTvHire"
                  itemId={13675}
                  pageStyle="ImgCarousel"
                />
              )}
            />
            <Route
              exact
              path="/restoration"
              component={routerProps => (
                <ItemDetails
                  categoryName="Restoration"
                  itemId={46989}
                  pageStyle="ImgCarousel"
                />
              )}
            />            
            <Route exact path="/contact" component={Contact} />

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
              path="/history"
              component={() => <Items category="History" />}
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
              component={routerProps => (
                <ItemDetails
                  categoryName="Live"
                  itemId={routerProps.match.params.slug}
                  pageStyle="ImgDetails"
                />
              )}
            />
            <Route
              exact
              path="/*/classic-car-archive/:slug"
              component={routerProps => (
                <ItemDetails
                  categoryName="Archive"
                  itemId={routerProps.match.params.slug}
                  pageStyle="ImgDetails"
                />
              )}
            />
            <Route
              exact
              path="/*/press/:slug"
              component={routerProps => (
                <ItemDetails
                  categoryName="Press"
                  itemId={routerProps.match.params.slug}
                  pageStyle="ImgCarousel"
                />
              )}
            />
            <Route
              exact
              path="/*/testimonials/:slug"
              component={routerProps => (
                <ItemDetails
                  categoryName="Testimonials"
                  itemId={routerProps.match.params.slug}
                  pageStyle="ImgCarousel"
                />
              )}
            />
            <Route
              exact
              path="/*/news/:slug"
              component={routerProps => (
                <ItemDetails
                  categoryName="News"
                  itemId={routerProps.match.params.slug}
                  pageStyle="ImgCarousel"
                />
              )}
            />
            <Route
              exact
              path="/*/history/:slug"
              component={routerProps => (
                <ItemDetails
                  categoryName="History"
                  itemId={routerProps.match.params.slug}
                  pageStyle="ImgCarousel"
                />
              )}
            />

            <Route component={Error} />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
