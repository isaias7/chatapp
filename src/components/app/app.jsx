import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../../../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';

import LoginContainer from '../../containers/LoginContainer';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container-fluid'>
          <Route exact path='/' component={ LoginContainer } />
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById('app'));
