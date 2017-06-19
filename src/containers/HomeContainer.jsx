import React from 'react';
import Home from '../components/home/Home';

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    // this state things
  }
  componentWillMount() {
    //all methods in this page
  }
  render() {
    return (
      <Home />
    );
  }
}

export default HomeContainer;
