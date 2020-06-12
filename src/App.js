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
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
            <Route exact path={`${process.env.PUBLIC_URL}/about`} component={About} />
            <Route exact path={`${process.env.PUBLIC_URL}/sold`} component={Archive} />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/selling-a-classic-car`}
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
              path={`${process.env.PUBLIC_URL}/classic-car-transportation`}
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
              path={`${process.env.PUBLIC_URL}/registration-numbers`}
              component={routerProps => (
                <ItemDetails
                  categoryName="PageText"
                  itemId={47034}
                  pageStyle="TextOnly"
                />
              )}
            />
            <Route exact path={`${process.env.PUBLIC_URL}/request-a-classic-car`} component={Request} />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/film-tv-hire`}
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
              path={`${process.env.PUBLIC_URL}/restoration`}
              component={() => <Items category="Restoration" />}
            />
            <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={Contact} />

            <Route
              exact
              path={`${process.env.PUBLIC_URL}/classic-cars-for-sale`}
              component={() => <Items category="Live" />}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/classic-car-archive`}
              component={() => <Items category="Archive" />}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/testimonials`}
              component={() => <Items category="Testimonials" />}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/press`}
              component={() => <Items category="Press" />}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/news`}
              component={() => <Items category="News" />}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/history`}
              component={() => <Items category="History" />}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/:brand/for-sale`}
              component={(routerProps) => <Items category="Live" brand={routerProps.match.params.brand} />}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/:brand/sold`}
              component={(routerProps) => <Items category="Archive" brand={routerProps.match.params.brand} />}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/*/classic-cars-for-sale/:slug`}
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
              path={`${process.env.PUBLIC_URL}/*/classic-car-archive/:slug`}
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
              path={`${process.env.PUBLIC_URL}/*/press/:slug`}
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
              path={`${process.env.PUBLIC_URL}/*/testimonials/:slug`}
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
              path={`${process.env.PUBLIC_URL}/*/news/:slug`}
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
              path={`${process.env.PUBLIC_URL}/*/history/:slug`}
              component={routerProps => (
                <ItemDetails
                  categoryName="History"
                  itemId={routerProps.match.params.slug}
                  pageStyle="ImgCarousel"
                />
              )}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/*/restoration/:slug`}
              component={routerProps => (
                <ItemDetails
                  categoryName="Restoration"
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
