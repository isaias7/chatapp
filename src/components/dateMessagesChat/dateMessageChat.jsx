import React from 'react';
import Message from '../messageChat/messageChat';
import './_dateMessageChat.scss';

class DateMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className='row'>
        <div className='col-md-2 col-md-offset-5'>
          <h2 className='dateMessage'>
            Today
          </h2>
        </div>
        <div className='col-md-12'>
          <Message />
        </div>
      </div>
    );
  }
}

export default DateMessage;
