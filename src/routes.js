import React from "react";
import { Switch, Route } from "react-router-dom";
import Echo from "./components/Echo";
import Dell from "./components/Dell";
import Michael from "./components/Michael";
import Harp from "./components/Harp";
import Obama from "./components/Obama";
import Screwdriver from "./components/Screwdriver";
import Printer from "./components/Printer";
import Watch from "./components/Watch";

export default (
  <Switch>
    <Route exact path="/" component={Echo} />
    <Route path="/dell" component={Dell} />
    <Route path="/michael" component={Michael} />
    <Route path="/harp" component={Harp} />
    <Route path="/obama" component={Obama} />
    <Route path="/screwdriver" component={Screwdriver} />
    <Route path="/printer" component={Printer} />
    <Route path="/watch" component={Watch} />
  </Switch>
);
