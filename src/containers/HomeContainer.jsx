// import React, { Component } from 'react';
// import axios from 'axios';

// import { Home } from '../components/home';
// // import './ProfileContainer.scss'

// // Use decorators if needed
// // @observer
// export default class HomeContainer extends Component {
//   // Initialize state here (ES7) or in a constructor method (ES6)
//   constructor(props) {
//     super(props);
//     this.state = {
//       bretes: []
//     }
//   }

//   // Declare propTypes as static properties as early as possible
//   static propTypes = {}

//   // Default props below propTypes
//   static defaultProps = {}

//   componentWillMount() {
//     const self = this;
//     axios
//       .get('http://localhost:3000/api/slack/users')
//       .then(function (response) {
//         self.setState({
//           bretes: response.data
//         });
//       })
//       .catch(function (err) {
//         console.log(err);
//       });
//   }

//   render() {
//     // Destructure props for readability
//     return (
//       <Home bretes={ this.state.bretes } />
//     )
//   }
// }

// // module.exports = HomeContainer;
