import React from "react";
import "./assets/css/bootstrap.min.css";
import "./App.scss";
import Home from "./pages/Homepage/Home";
import About from "./pages/About/About";
import Restoration from "./pages/Restoration/Restoration";
import Archive from "./pages/Archive/Archive";
import Items from "./pages/Items/Items";
import ItemDetails from "./pages/ItemDetails/ItemDetails";
import Contact from "./pages/Contact/Contact";
import Request from "./pages/Request/Request";
import Error from "./pages/Error";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { ConsoleLog } from "./assets/js/Helpers";

const App = props => {
  // ConsoleLog("[App] render... ");
  ConsoleLog("[App] render... ");

  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
          <Route exact path={`${process.env.PUBLIC_URL}/homepage`} component={Home} />

          <Route exact path={`${process.env.PUBLIC_URL}/about`} component={About} />
          <Route exact path={`${process.env.PUBLIC_URL}/about-classic-and-sportscar-centre`} component={About} />

          <Route exact path={`${process.env.PUBLIC_URL}/sold`} component={Archive} />
          <Route exact path={`${process.env.PUBLIC_URL}/restoration`} component={Restoration} />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/privacy`}
            component={routerProps => (
              <ItemDetails
                categoryName="PageText"
                itemId={37006}
                pageStyle="TextOnly"
              />
            )}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/restoration/classic-car-maintenance`}
            component={routerProps => (
              <ItemDetails
                categoryName="PageText"
                itemId={47562}
                pageStyle="ImgCarousel"
              />
            )}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/restoration/classic-car-body-and-paintwork`}
            component={routerProps => (
              <ItemDetails
                categoryName="PageText"
                itemId={47563}
                pageStyle="ImgCarousel"
              />
            )}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/restoration/vehicle-upholstery-and-trimming`}
            component={routerProps => (
              <ItemDetails
                categoryName="PageText"
                itemId={47564}
                pageStyle="ImgCarousel"
              />
            )}
          />            
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
            path={`${process.env.PUBLIC_URL}/classic-car-storage`}
            component={routerProps => (
              <ItemDetails
                categoryName="PageText"
                itemId={51671}
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
          {/* <Route
            exact
            path={`${process.env.PUBLIC_URL}/restoration`}
            component={() => <Items category="Restoration" />}
          /> */}
          <Route exact path={ `${process.env.PUBLIC_URL}/contact`} component={Contact} />
          <Route exact path={ `${process.env.PUBLIC_URL}/contact-details`} component={Contact} />
          <Route exact path={ `${process.env.PUBLIC_URL}/malton/google-map`} component={Contact} />
          
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/classic-cars-for-sale`}
            component={() => <Items category="Live" />}
          />            
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/classic-cars-sold`}
            component={() => <Items category="Archive" />}
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
            path={`${process.env.PUBLIC_URL}/staff`}
            component={() => <Items category="Staff" />}
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
            path={`${process.env.PUBLIC_URL}/videos`}
            component={() => <Items category="Videos" />}
          />
          {/* PAGINATION */}
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/classic-cars-for-sale/page-:page`}
            component={(routerProps) => <Items category="Live" page={routerProps.match.params.page} />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/:brand/for-sale/page-:page`}
            component={(routerProps) => <Items category="Live" brand={routerProps.match.params.brand} page={routerProps.match.params.page} />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/classic-cars-sold/page-:page`}
            component={(routerProps) => <Items category="Archive" page={routerProps.match.params.page} />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/:brand/sold/page-:page`}
            component={(routerProps) => <Items category="Archive" brand={routerProps.match.params.brand} page={routerProps.match.params.page} />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/testimonials/page-:page`}
            component={(routerProps) => <Items category="Testimonials" page={routerProps.match.params.page} />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/staff/page-:page`}
            component={(routerProps) => <Items category="Staff" page={routerProps.match.params.page} />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/press/page-:page`}
            component={(routerProps) => <Items category="Press" page={routerProps.match.params.page} />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/news/page-:page`}
            component={(routerProps) => <Items category="News" page={routerProps.match.params.page} />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/history/page-:page`}
            component={(routerProps) => <Items category="History" page={routerProps.match.params.page} />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/videos/page-:page`}
            component={(routerProps) => <Items category="Videos" page={routerProps.match.params.page} />}
          />
          {/* (END) PAGINATION */}
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
            path={`${process.env.PUBLIC_URL}/*/classic-cars-sold/:slug`}
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
            path={`${process.env.PUBLIC_URL}/*/classic-cars-sold/:slug`}
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
            path={`${process.env.PUBLIC_URL}/*/staff/:slug`}
            component={routerProps => (
              <ItemDetails
                categoryName="Staff"
                itemId={routerProps.match.params.slug}
                pageStyle="ImgCarousel"
              />
            )}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/:brand/staff`}
            component={(routerProps) => <Items category="Staff" brand={routerProps.match.params.brand} />}
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
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/*/page/:itemId`}
            component={routerProps => (
              <ItemDetails
                categoryName="PageText"
                itemId={routerProps.match.params.itemId}
                pageStyle="isPage"
              />
            )}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/*/preview/:itemId`}
            component={routerProps => (
              <ItemDetails
                categoryName="PageText"
                itemId={routerProps.match.params.itemId}
                pageStyle="isPage"
              />
            )}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/*/videos/:itemId`}
            component={routerProps => (
              <ItemDetails
                categoryName="Videos"
                itemId={routerProps.match.params.itemId}
                pageStyle="IsVideo"
              />
            )}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/*/classic-cars-for-sale/:slug/preview`}
            component={routerProps => (
              <ItemDetails
                categoryName="Live"
                itemId={routerProps.match.params.slug}
                preview={true}
                pageStyle="ImgDetails"
              />
            )}
          />

          <Route component={Error} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
