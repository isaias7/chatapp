import React from 'react';
import { BrowserRouter as Router, Route, IndexRoute, Switch } from 'react-router-dom';

import AppContainer from './containers/AppContainer';
import NotFoundPage from './components/pageNotFound/pageNotFound';
import LoginContainer from './containers/LoginContainer'
import HomeContainer from './containers/HomeContainer'

// import Register from './components/register/register';   
// import RequireAuth from './components/auth/require-auth';

const routes = () => (
  <Router>
      <Switch>
        <Route exact path="/" component={ LoginContainer } />
        <Route path="/home" component={ HomeContainer } />
        <Route component={ NotFoundPage } />
      </Switch>
  </Router>
);
export default routes;
