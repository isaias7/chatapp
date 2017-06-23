import React from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import appStyle from '../components/app/_app.scss';
import axios from 'axios';
import Login from '../components/login/login';
import { loginUser } from '../actions/index';
import { Field, reduxForm } from 'redux-form';

const form = reduxForm({
  form: 'login',
});

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleFormSubmit(formProps) {
    this.props.loginUser(formProps);
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div>
          <span>
            <strong>Error!</strong> {this.props.errorMessage}
          </span>
        </div>
      );
    }
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='navBar row'>
            <div className='col-md-12'>
              <div className='logo'>
                <img src={ require('../images/logoSlackHeader.png') } alt='Logo' />
              </div>
              <div className='navBarLinks'>
                <ul className='unorderList'>
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
                    <div className='navBar-button'>
                      <button className='buttonHeader'>
                        <span className='navBarLetters'>Your team</span>
                      </button>
                    </div>
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
            <form onSubmit={ handleSubmit(this.handleFormSubmit.bind(this)) }>
              {this.renderAlert()}
              <div className='col-md-4 col-md-offset-4' >
                <img src={ require('../images/logoModal.png') } className='imageLogoModal' alt='Slack' />
              </div>
              <div className='col-md-8 col-md-offset-2 center' >
                <h3 className='title'>Sign in to your team</h3>
              </div>
              <div className='col-md-8 col-md-offset-2 center'>
                <Field name='email' className='inputEmail' component='input' type='text' placeholder='User name' />
              </div>
              <div className='col-md-8 col-md-offset-2 center'>
                <div>
                  <Field name='password' className='inputPwd' component='input' type='text' placeholder='Password' />
                  <button className='buttonArrow' href='#' id='' type='submit' >
                    <img src={ require('../images/loginarrow.svg') } className='arrowSubmit' alt='Login' />
                  </button>
                </div>
              </div>
              <div className='col-md-8 col-md-offset-2 center'>
                {/*<p className='p__login--center'>You do not have an account?</p>
                 <p className='p__login--left'>Sign up </p>*/}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error,
    message: state.auth.message,
  };
}

export default connect(mapStateToProps, { loginUser })(form(LoginContainer));
