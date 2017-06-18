import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../../../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';

// import LoginContainer from '../../containers/LoginContainer';
import HomeContainer from '../../containers/HomeContainer';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container-fluid'>
          {/*<Route exact path='/' component={ LoginContainer } />*/}
          <Route exact path='/' component={ HomeContainer } />
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById('app'));
