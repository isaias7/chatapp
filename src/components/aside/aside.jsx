import React from 'react'
import asideStyle from './_aside.scss';
import UserDirectoryList from '../userList/userList';
import { string } from 'prop-types';
import store from '../../store';


class Aside extends React.Component {

  constructor(props) {
    super(props);
    this.state = { ready: false }
  }
  render() {
    if (store.getState().allUsers.allUsers.length > 1) {
      this.state.ready = true;
    } else {
      this.state.ready = false;
    }
    return (
      <div className='aside col-md-2'>
        <div className='row'>
          <header className='col-md-12 header'>
            <div className='header-content aside-margin-left'>
              <span className='white-text'>Konrad Group</span>
              <span className='user-status online'> {store.getState().user.user.firstName}</span>
            </div>
          </header>
          <div className='col-md-12 body'>
            <div className='body-wrapper aside-margin-left'>
              <div className='channels-info'>
                <a><span className='channels-options'>ALL UNREADS</span></a>
                <a><span className='channels-options'>ALL THREADS</span></a>
                <a><span className='channels-options'>CHANNELS</span></a>
                <div className='channels'>
                  <a><span className='channel'>Channel 1</span> </a>
                  <a><span className='channel selected'>Channel 2</span> </a>
                  <a><span className='channel'>Channel 3</span> </a>
                  <a><span className='channel'>Channel 4</span> </a>
                </div>
              </div>
              <div className='direct-messages'>
                <span className='channels-options'>DIRECT MESSAGES</span>
                <a><span className='user-status online'>Jhon Doe</span></a>
                <a><span className='user-status online'>Jhon Doe</span></a>
                <a><span className='user-status online'>Jhon Doe</span></a>
                <a><span className='user-status online'>Jhon Doe</span></a>
                <a><span className='user-status offline'>Jhon Doe</span></a>
                <a><span className='user-status offline'>Jhon Doe</span></a>
                
                {/*{(this.state.ready ?
                  store.getState().allUsers.allUsers
                    .map((user) => (
                      <a key={user._id} onClick={this.onHandleClick}>
                        <span className='user-status online' id={user._id} >
                          {user.profile.firstName}
                        </span>
                      </a>))
                  : <div />)}*/}

              </div>
            </div>
          </div>
          <footer className='col-md-12 footer '>
            <div className='aside-margin-left'>
              <span className='white-text'><img src={require(`../../images/searchAside.svg`)} className='search-icon' alt='Search' /> Search </span>
            </div>
          </footer>
        </div>
      </div>
    );

  };
}

export default Aside;
