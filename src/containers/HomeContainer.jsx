import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import io from 'socket.io-client';
import axios from 'axios';
import Home from '../components/home/home';
import Cookies from 'universal-cookie';
import store from '../store';
import { SET_USER } from '../actions/types';
import { setUserLogged } from '../actions/index';
import { fetchAllUsers } from '../actions/index';
import PropTypes from 'prop-types';

let socket = null;

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      directoryReady: false,
    }
  }

  componentDidMount() {
    this.props.loadAllUsers();
  }

  componentWillMount() {
    const cookies = new Cookies();
    const token = cookies.get('token');
    if (token) { store.dispatch({ type: SET_USER, user: token, }); }
  }

  render() {
    const { allUsers, user } = this.props;
    return (
      <Home
        allUsers={ allUsers }
        directoryReady={ this.state.directoryReady }
        user={ user }
      />
    );
  }
}

HomeContainer.propTypes = {
  loadAllUsers: PropTypes.func,
  allUsers: PropTypes.arrayOf(PropTypes.object),
  user: PropTypes.object
};

// Specifies the default values for props:
HomeContainer.defaultProps = {
  allUsers: [{}],
  user: {},
  setDirectoryReady: false
};

const mapStateToProps = (state) => {
  return {
    allUsers: state.allUsers,
    user: state.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadAllUsers: () => dispatch(fetchAllUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
