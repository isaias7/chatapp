import React from 'react';
import './_login.scss';
// import { render } from 'react-dom';
// const preload = '../../images/';
import logo from '../../images/slacklogo.svg';
import arrow from '../../images/loginarrow.svg';
import menuLogo from '../../images/miniLogo.png';

class Login extends React.Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='navBar row'>
            <div className='col-md-12'>
              <div className='logo'>
                <img src={ menuLogo } alt='Slack' />
              </div>
              <div className='navBarLinks'>
                <ul className='none'>
                  <li>
                    <li className='navBar--list'>
                      <a className='links' href=''>Product</a>
                    </li>
                    <li className='navBar--list'>
                      <a className='links' href=''>Pricing</a>
                    </li>
                    <li className='navBar--list'>
                      <a className='links' href=''>Support</a>
                    </li>
                    <li className='navBar--list'>
                      <a className='links rectangle' href=''>Your Team</a>
                    </li>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='image-background row'>
            <div className='col-md-12' />
          </div>
          <div className=''>
            <div className='col-md-12' />
          </div>
        </div>
        <div>
          <div className='modalLogin' >
            <div className='row' >
              <div className='col-md-4 col-md-offset-4' >
                <img className='imageLogo' src={ logo } alt='Slack' />
              </div>
              <div className='col-md-8 col-md-offset-2 center' >
                <h3 className='title'>Sign in</h3>
              </div>
              <div className='col-md-8 col-md-offset-2 center'>
                <input className='inputEmail' type='text' placeholder='User name' />
              </div>
              <div className='col-md-8 col-md-offset-2 center'>
                <input className='inputText' type='text' placeholder='Password' />
                <button className='buttonArrow' href='#' id='' >
                  <img className='imgArrow' src={ arrow } alt='Login' />
                </button>
              </div>
              <div className='col-md-8 col-md-offset-2 center'>
                {/*<p className='p__login--center'>You do not have an account?</p>
                <p className='p__login--left'>Sign up </p>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
// module.exports = Login;
