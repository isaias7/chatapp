import React from 'react';
import ReactDOM from 'react-dom';
import './_mainChat.scss';
import Messages from '../dateMessagesChat/dateMessagesChat';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }
  componentDidMount() {
    this.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }
  scrollToBottom = () => {
    const messagesContainer = ReactDOM.findDOMNode(this.messagesContainer);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  };
  render() {
    return (
      <div className='col-md-7 col-sm-8 col-xs-8'>
        <main className='main__position'>
          <div className='row'>
            <div 
            ref={(el) => { this.messagesContainer = el; }} 
            className='col-md-12 main main__center mainChat scrollbar' id='style-1'>
              <Messages />
            </div>
          </div>
        </main>
        <footer>
          <div className='row'>
            <div className='col-md-12 footer__center'>
              <div className='messageEntry'>
                <button className='buttonPlus' href='#' id='' >
                  <img className='imgPlus' src={require(`../../images/plus.svg`)} />
                </button>
                <input className='inputMessage' type='text' placeholder='Message' />
                <button className='buttonSmile' href='#' id='' >
                  <img className='imgSmile' src={require(`../../images/smile.svg`)} />
                </button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Chat;
