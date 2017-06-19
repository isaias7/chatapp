import React from 'react';
import './_home.scss';
import NavBar from '../navBar/NavBarChat';
import ChatAside from '../chatAside/Aside';
import MainChat from '../mainChat/mainChat';
import RighAside from '../rightAside/RightAside';

// import arrow from '../../images/star.sv';
// import { render } from'react-dom';

class Home extends React.Component {
  render() {
    return (
      <div className='row'>
        <ChatAside />
        <NavBar />
        <MainChat />
        <RighAside />
      </div>
    );
  }
}

export default Home;
