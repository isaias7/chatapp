
import React from 'react';
import { render } from 'react-dom';
import loginStyle from './_login.scss';
import { Field, reduxForm } from 'redux-form';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='header row'>
            <div className='col-md-12'>

              <div className="containerElementsNavBar">
                <div className="logo">
                  <img src={require(`../../images/logoSlackHeader.png`)} className="imageLogoModal" />
                </div>
                <div className="navBar">
                  <a className="linkHeader"> <span className="navBarLetters">Product</span> </a>
                  <a className="linkHeader"> <span className="navBarLetters">Pricing</span></a>
                  <a className="linkHeader"> <span className="navBarLetters">Support</span></a>
                  <button className="buttonHeader"> <span className="navBarLetters">Your team</span></button>
                </div>
              </div>

            </div>
          </div>

        </div>
        <div className="row backgroundElemnts">
          <div className="image-background row">
            <div className="col-md-12">

            </div>
          </div>
          <div className="background row">
            <div className="col-md-12">

            </div>
          </div>

        </div>

        <div className="modalLogin">

          <div className="containerLogoModal">
            <img src={require(`../../images/logoModal.png`)} className="imageLogoModal" />
            <div className="textModal">Sign in</div>
          </div>

          <div className="containerInputsModal">
            <form onSubmit={handleSubmit(this.props.handleFormSubmit.bind(this))}>
              {this.props.renderAlert()}
              <div className="inputRectangleUser">
                <Field name="email" className="rectangleInputUser" component="input" type="text" placeholder="Enter your email" />
              </div>
              <div className="inputRectangle">
                <Field name="password" className="rectangleInput" component="input" type="password" placeholder="Entrer your password" />
                <div className="rectangleSubmitArrow">
                  <img src={require(`../../images/loginarrow.svg`)} className="arrowSubmit" />
                </div>
              </div>
            </form>

            <div className="informationText">
            </div>

          </div>

        </div>

      </div>
    );
  }
};

export default Login;


// import React from 'react';
// import './_login.scss';

// import { connect } from 'react-redux';
// import io from 'socket.io-client';
// // import appStyle from '../components/app/_app.scss'
// import axios from 'axios'
// import Login from '../components/login/login'
// import { loginUser } from '../actions/index';
// import { Field, reduxForm } from 'redux-form';

// import logo from '../../images/slacklogo.svg';
// import arrow from '../../images/loginarrow.svg';
// import menuLogo from '../../images/miniLogo.png';

// class Login extends React.Component {
//   render() {
//     return (
      // <div className='container-fluid'>
      //   <div className='row'>
      //     <div className='navBar row'>
      //       <div className='col-md-12'>
      //         <div className='logo'>
      //           <img src={ menuLogo } alt='Slack' />
      //         </div>
      //         <div className='navBarLinks'>
      //           <ul className='none'>
      //             <li>
      //               <li className='navBar--list'>
      //                 <a className='links' href=''>Product</a>
      //               </li>
      //               <li className='navBar--list'>
      //                 <a className='links' href=''>Pricing</a>
      //               </li>
      //               <li className='navBar--list'>
      //                 <a className='links' href=''>Support</a>
      //               </li>
      //               <li className='navBar--list'>
      //                 <a className='links rectangle' href=''>Your Team</a>
      //               </li>
      //             </li>
      //           </ul>
      //         </div>
      //       </div>
      //     </div>
      //     <div className='image-background row'>
      //       <div className='col-md-12' />
      //     </div>
      //     <div className=''>
      //       <div className='col-md-12' />
      //     </div>
      //   </div>
      //   <div>
      //     <div className='modalLogin' >
      //       <form onSubmit={ handleSubmit(this.handleFormSubmit.bind(this)) }>
      //         { this.renderAlert() }
      //         <div className='col-md-4 col-md-offset-4' >
      //           <img className='imageLogo' src={ logo } alt='Slack' />
      //         </div>
      //         <div className='col-md-8 col-md-offset-2 center' >
      //           <h3 className='title'>Sign in</h3>
      //         </div>
      //         <div className='col-md-8 col-md-offset-2 center'>
      //           <input className='inputEmail' type='text' placeholder='User name' />
      //         </div>
      //         <div className='col-md-8 col-md-offset-2 center'>
      //           <input className='inputText' type='text' placeholder='Password' />
      //           <button className='buttonArrow' href='#' id='' >
      //             <img className='imgArrow' src={ arrow } alt='Login' />
      //           </button>
      //         </div>
      //         <div className='col-md-8 col-md-offset-2 center'>
      //           {/*<p className='p__login--center'>You do not have an account?</p>
      //           <p className='p__login--left'>Sign up </p>*/}
      //         </div>
      //       </form>
      //     </div>
      //   </div>
      // </div>
//     );
//   }
// }

// export default Login;
