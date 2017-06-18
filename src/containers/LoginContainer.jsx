import React from 'react';
import Login from '../components/login/Login';

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    // this state things
  }
  componentWillMount() {
    //all methods in this page
  }
  render() {
    return (
      <Login />
    );
  }
}

export default LoginContainer;
