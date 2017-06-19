import React from 'react';
// import { render } from 'react-dom';
import './_navBar.scss';
import Star from '../../images/star.svg';
import User from '../../images/user.svg';
import Pin from '../../images/pin.svg';
import Add from '../../images/plus.svg';
import Search from '../../images/settings.svg';
import Call from '../../images/phone.svg';
import Settings from '../../images/settings.svg';
import Files from '../../images/pageSettings.svg';

class NavBarChat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className='navBarContainer'>
        <div className='col-md-10'>
          <div className='navBarChat'>
            <div className='navBarLeft'>
              <div className='title'>
                <h3 className='titleNavBarLeft'>Channel#2</h3>
              </div>
              <div className='images'>
                <img alt='Star' src={ Star } className='imageNavBarLeft starImage' />
                <img alt='User' src={ User } className='imageNavBarLeft userImage' />
                <img alt='Pin' src={ Pin } className='imageNavBarLeft pinImage' />
                <img alt='Add' src={ Add } className='imageNavBarLeft addImage' />
                <p className='textNavBarLeft'>Add a topic</p>
              </div>
            </div>
            <div className='navBarRight'>
              <div className='searchInputContainer'>
                <input type='text' className='searchInputNavBar' name='srch-term' placeholder='Search' />
                <img alt='Search' src={ Search } className='searchInputImage' />
              </div>
              <img alt='Call' src={ Call } className='imageNavBarRight callImage' />
              <img alt='Settings' src={ Settings } className='imageNavBarRight settingsImage' />
              <img alt='Files' src={ Files } className='imageNavBarRight filesImage' />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBarChat;
