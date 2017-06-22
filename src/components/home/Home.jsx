import React from 'react';
import './_home.scss';
import Aside from '../aside/aside';
//import AsideContainer from '../../containers/AsideContainer';
import NavBar from '../navBar/navBarChat';
import MainChat from '../mainChat/mainChat';
import RightAside from '../rightAside/rightAside';
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
          directoryReady={ this.props.directoryReady }
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
