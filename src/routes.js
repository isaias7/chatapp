import React from 'react';
import { BrowserRouter as Router, Route, IndexRoute, Switch } from 'react-router-dom';

import AppContainer from './containers/AppContainer';
import NotFoundPage from './components/notFound/NotFound';
import HomeContainer from './containers/HomeContainer';
import LoginContainer from './containers/LoginContainer';

export default (
  <Router>
    <Switch>
      <Route path="/" component={ LoginContainer } />
      <Route path="home" component={ HomeContainer } />
      <Route component={ NotFoundPage } />
    </Switch>
  </Router>
);