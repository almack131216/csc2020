import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Items from "./pages/Items";
import Item from "./pages/Item";
import Error from "./pages/Error";

import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/items" component={Items} />
        <Route exact path="/items/:slug" component={Item} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
