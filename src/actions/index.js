import axios from 'axios';
import { browserHistory } from 'react-router';
//import cookie from 'react-cookie';
import Cookies from 'universal-cookie';
import store from '../store';
import {
  AUTH_USER,
  AUTH_ERROR,
  UNAUTH_USER,
  PROTECTED_TEST,
  SET_USER,
  SET_ALL_USERS,
} from './types';

const API_URL = 'https://evening-meadow-64939.herokuapp.com/api';
const API_URL_ROUTES = 'https://evening-meadow-64939.herokuapp.com/routes';

export function errorHandler(dispatch, error, type) {
  let errorMessage = '';

  if (error.data.error) {
    errorMessage = error.data.error;
  } else if (error.data) {
    errorMessage = error.data;
  } else {
    errorMessage = error;
  }
}

function setUser(user) {
  console.log(`estoy en setUser con el usuario ${user}`);
  return { type: SET_USER, user };
}
export function loginUser({ email, password }) {
  console.log('ESTOY EN LOGIN');
  return function (dispatch) {
    axios
      .post(`${API_URL}/auth/login`, { email, password })
      .then((response) => {
        dispatch({
          type: SET_USER,
          user: response.data.user,
        });
        dispatch({
          type: AUTH_USER,
        });
        dispatch({
          type: SET_USER_LOGGED,
          userLogged: true,
        });
        const cookies = new Cookies();
        cookies.set('token', response.data.user, { path: '/' });
      });
  };
}

export function setUserLogged(object) {
  dispatch({
    type: 'SET_USER_LOGGED',
    userLogged: object,
  });
}

/* Method called from this module by fetchAllUsers()  */
function setAllUsers(allUsers) {
  return { type: SET_ALL_USERS, allUsers };
}
/* Method to get all the users in the database */
export function fetchAllUsers() {
  return function (dispatch) {
    axios
      .get(`${API_URL_ROUTES}/users`)
      .then((response) => {
        dispatch({ type: 'SET_ALL_USERS', allUsers: response.data });
      })
      .catch(error => console.log('Axios error: ', error));
  };
}

export function getUser({ id }) {
  return (dispatch) => {
    console.log('GET', id);
  };
}
