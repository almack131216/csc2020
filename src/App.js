import React from "react";
import "./assets/css/bootstrap.min.css";
import "./App.scss";
import Home from "./pages/Homepage/Home";
import Items from "./pages/Items/Items";
import Item from "./pages/Item";
import Error from "./pages/Error";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
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
          <Route exact path="/*/*/:slug" component={Item} />
          <Route component={Error} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
