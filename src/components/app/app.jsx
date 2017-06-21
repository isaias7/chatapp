// import React from 'react';
// import { render } from 'react-dom';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import reduxThunk from 'redux-thunk';
// import routes from '../../routes';
// import reducers from '../../reducers/index';
// import store from '../../store'
// import { AUTH_USER } from '../../actions/types';

// import '../../../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss';

// import LoginContainer from '../../containers/LoginContainer';
// import HomeContainer from '../../containers/HomeContainer';

// const App = () => {
//   <Provider store={ store }>
//     { routes() }
//   </Provider>
// }

// ReactDOM.render(<App />, document.getElementById('app'));


import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
// import {browserHistory} from 'react-router'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import { Router, browserHistory } from 'react-router';  
import reduxThunk from 'redux-thunk';
import routes from '../../routes.js';
import reducers from '../../reducers/index';
import store from '../../store'
import { AUTH_USER } from '../../actions/types';
// const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);  
// const store = createStoreWithMiddleware(reducers);


const App = () => (
  <Provider store={ store }>
    <Router routes={ routes } />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('app'));