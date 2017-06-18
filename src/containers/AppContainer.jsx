import React from 'react';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    // this state things
  }
  componentWillMount() {
    //all methods in this page
  }
  render() {
    return (
      <div>
        <div>
          <h2>ROOMS</h2>
          <div className='chatContainer' id='rooms' />
        </div>
        <div>
          <div id='conversation'>
            {/*<h4>{this.state.userName + ': ' + this.state.data} </h4>*/}
            <h4>`{ this.state.userName } : { this.state.data }` </h4>
          </div>
          <input type='text' className='form-control' id='data' />
          <button className='button' id='datasend'>Send</button>
        </div>
      </div>
    );
  }
}

export default AppContainer;


// <input onChange={this.handleOnChangeMessage} onKeyPress={this.handleOnKeyPress} type="text" className="form-control" id="data" />
// <button onClick={this.handleOnClickButton} className="button" id="datasend"> Send</button>
