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
//       <div className='container-fluid'>
//         <div className='row'>
//           <div className='navBar row'>
//             <div className='col-md-12'>
//               <div className='logo'>
//                 <img src={ menuLogo } alt='Slack' />
//               </div>
//               <div className='navBarLinks'>
//                 <ul className='none'>
//                   <li>
//                     <li className='navBar--list'>
//                       <a className='links' href=''>Product</a>
//                     </li>
//                     <li className='navBar--list'>
//                       <a className='links' href=''>Pricing</a>
//                     </li>
//                     <li className='navBar--list'>
//                       <a className='links' href=''>Support</a>
//                     </li>
//                     <li className='navBar--list'>
//                       <a className='links rectangle' href=''>Your Team</a>
//                     </li>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div className='image-background row'>
//             <div className='col-md-12' />
//           </div>
//           <div className=''>
//             <div className='col-md-12' />
//           </div>
//         </div>
//         <div>
//           <div className='modalLogin' >
//             <form onSubmit={ handleSubmit(this.handleFormSubmit.bind(this)) }>
//               { this.renderAlert() }
//               <div className='col-md-4 col-md-offset-4' >
//                 <img className='imageLogo' src={ logo } alt='Slack' />
//               </div>
//               <div className='col-md-8 col-md-offset-2 center' >
//                 <h3 className='title'>Sign in</h3>
//               </div>
//               <div className='col-md-8 col-md-offset-2 center'>
//                 <input className='inputEmail' type='text' placeholder='User name' />
//               </div>
//               <div className='col-md-8 col-md-offset-2 center'>
//                 <input className='inputText' type='text' placeholder='Password' />
//                 <button className='buttonArrow' href='#' id='' >
//                   <img className='imgArrow' src={ arrow } alt='Login' />
//                 </button>
//               </div>
//               <div className='col-md-8 col-md-offset-2 center'>
//                 {/*<p className='p__login--center'>You do not have an account?</p>
//                 <p className='p__login--left'>Sign up </p>*/}
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Login;
