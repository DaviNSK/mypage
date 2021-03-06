import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/portfolio" component={Portfolio} />

        <Route exact path="/contact" component={Contact} />
        
      </Switch>
    );
  }
}


export default Routes;