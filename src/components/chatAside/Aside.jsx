import React from 'react';
import './_aside.scss';
import searchIcon from '../../images/searchAside.svg';

const ChatAside = () => {
  return (
    <div className='aside col-md-2'>
      <div className='row'>
        <header className='col-md-12 header'>
          <div className='header-content aside-margin-left'>
             <span className='white-text'>Konrad Group</span>
             <span className='user-status online'>Jhon Doe</span>
          </div>
        </header>
        <div className='col-md-12 body'>
          <div className='body-wrapper aside-margin-left'>
            <div className='channels-info'>
              <a><span className='channels-options'>ALL UNREADS</span></a>
              <a><span className='channels-options'>ALL THREADS</span></a>
              <a><span className='channels-options'>CHANNELS</span></a>
              <div className='channels'>
                <a><span className='channel'>Channel 1</span></a>
                <a><span className='channel'>Channel 1</span></a>
                <a><span className='channel'>Channel 1</span></a>
                <a><span className='channel'>Channel 1</span></a>
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
            </div>
          </div>
        </div>
        <footer className='col-md-12 footer '>
          <div className='aside-margin-left'>
            <span className='white-text'>
              <img src={ searchIcon } className='search-icon' alt='Search' />
              Search
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ChatAside;