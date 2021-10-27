
import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from '../pages/Home';
import Finance from '../pages/Finance';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route component={Finance} path="/consultar" />
    </Switch>
  )
}

export default Routes;