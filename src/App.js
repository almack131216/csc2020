import React, { Component } from "react";
import "./assets/css/bootstrap.min.css";
import "./App.scss";
import Home from "./pages/Homepage/Home";
import Items from "./pages/Items/Items";
import Item from "./pages/Item";
import Error from "./pages/Error";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
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

    return (
      <div className="App">
        <Navbar />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/classic-car-archive"
              component={() => <Items category="Archive" />}
            />
            <Route exact path="/classic-cars-for-sale" component={Items} />
            {/* <Route exact path="/ford-in-our-showroom" component={Items} /> */}
            <Route exact path="/*/*/:slug" component={Item} />
            <Route component={Error} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
