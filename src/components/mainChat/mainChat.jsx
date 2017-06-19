import React from 'react';
import './_mainChat.scss';
import Messages from '../dateMessagesChat/dateMessageChat';
import Smile from '../../images/smile.svg';
import Plus from '../../images/plus.svg';

class MainChat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className='col-md-7 '>
        <main className='main__position'>
          <div className='row'>
            <div className='col-md-12 main main__center mainChat scrollbar' id='style-1'>
              <Messages />
            </div>
          </div>
        </main>
        <footer>
          <div className='row'>
            <div className='col-md-12 footer__center'>
              <div className='messageEntry'>
                <button className='buttonPlus' href='#' id='' >
                  <img className='imgPlus' src={ Plus } alt='More' />
                </button>
                <input className='inputMessage' type='text' placeholder='Message' />
                <button className='buttonSmile' href='#' id='' >
                  <img className='imgSmile' src={ Smile } alt='Emojis' />
                </button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default MainChat;
