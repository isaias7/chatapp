import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import io from 'socket.io-client';
import axios from 'axios';
import Home from '../components/home/Home';
import Cookies from 'universal-cookie';
import store from '../store';
import { SET_USER, SET_OTHER_USER_ID } from '../actions/types';
import { fetchAllUsers, fetchAllCurrentMessages, fetchMessagesForEveryone, sendNewMessage, sendNewMessageBroadcast } from '../actions/index';
import { changeMessageType, updateMessagesFromSocket, updateMessagesBroadcastFromSocket, getUserSelectedData, getUserEmisorData } from '../actions/index';
import PropTypes from 'prop-types';

let socket = null;

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      directoryReady: false,
    };
  }
  componentWillMount() {
    //connection to socket by socket.io-client
    socket = io.connect('https://evening-meadow-64939.herokuapp.com/api');
    // Send the id of the current user to the socket of the server side
    if (this.props.user !== null && this.props.user !== undefined) {
      socket.emit('connected', this.props.user.user._id);
    }

    // Socket listen when sendMessage action is activate by the server side and receive the message data
    socket.on('sendMessage', (username, content, idReceiver, hour) => {
    });

    // Socket listen when updateMessages action is activate by the server side and call a method to update the information of a private message with the data that received
    socket.on('updateMessages', (username, content, idReceiver, hour) => {
      this.props.updateMessagesFromSocket(username, content, idReceiver, hour);
    });

    // Socket listen when updateMessagesBroadcast action is activate by the server side and call a method to update the message of type general
    socket.on('updateMessagesBroadcast', (username, content, idReceiver, hour, channel) => {
      this.props.updateMessagesBroadcastFromSocket(username, content, idReceiver, hour, channel);
    });
  }
  componentDidMount() {
    this.props.loadAllUsers();
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
  user: PropTypes.object,
};

// Specifies the default values for props:
HomeContainer.defaultProps = {
  allUsers: [{}],
  user: {},
  setDirectoryReady: false,
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
