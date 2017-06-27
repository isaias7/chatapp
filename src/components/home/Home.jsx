import React from 'react';
import './_home.scss';
import Aside from '../aside/aside';
//import AsideContainer from '../../containers/AsideContainer';
import NavBar from '../navBar/NavBarChat';
import MainChat from '../mainChat/mainChat';
import RightAside from '../rightAside/RightAside';
import store from '../../store';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='row home'>
        <Aside
          allUsers={ this.props.allUsers }
          user={ this.props.user }
        />
        <NavBar />
        <MainChat />
        <RightAside />
      </div>
    );
  }
}

export default Home;
