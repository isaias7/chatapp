import React from 'react';
import './_messageChat.scss';
import Harry from '../../images/harry.png'
import Hermione from '../../images/hermione.png'

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        {/*ESTE ES OTRO MSJ*/}
        <div className='row message'>
          <div className='col-md-2'>
            <img className='imgMessage' src={ Hermione } alt='User' />
          </div>
          <div className='col-md-10'>
            <div className='messageTitle'>
              <h4 className='name__style'> Maria</h4>
              <h5 className='time__style'> 11:55 am</h5>
            </div>
            <p className='p__style'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio at mollitia praesentium est nulla? Incidunt aliquam, nostrum optio, error quod veritatis architecto recusandae explicabo perferendis corporis, tenetur harum facere deserunt.
            </p>
          </div>
        </div>
        <div className='row message'>
          <div className='col-md-2'>
            <img className='imgMessage' src={ Hermione } alt='User' />
          </div>
          <div className='col-md-10'>
            <div className='messageTitle'>
              <h4 className='name__style'> Maria</h4>
              <h5 className='time__style'> 11:55 am</h5>
            </div>
            <p className='p__style'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio at mollitia praesentium est nulla? Incidunt aliquam, nostrum optio, error quod veritatis architecto recusandae explicabo perferendis corporis, tenetur harum facere deserunt.
            </p>
          </div>
        </div>
        {/*SON EJEMPLOS*/}
        <div className='row message'>
          <div className='col-md-2'>
            <img className='imgMessage' src={ Harry } alt='User' />
          </div>
          <div className='col-md-10'>
            <div className='messageTitle'>
              <h4 className='name__style'> Juan</h4>
              <h5 className='time__style'> 12:21 pm</h5>
            </div>
            <p className='p__style'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio at mollitia praesentium est nulla? Incidunt aliquam, nostrum optio, error quod veritatis architecto recusandae explicabo perferendis corporis, tenetur harum facere deserunt.
            </p>
          </div>
        </div>
        {/*ESTO DEBERIA HACERSE CON UN MAP*/}
        <div className='row message'>
          <div className='col-md-2'>
            <img className='imgMessage' src={ Hermione } alt='User' />
          </div>
          <div className='col-md-10'>
            <div className='messageTitle'>
              <h4 className='name__style'> Maria</h4>
              <h5 className='time__style'> 12:40 pm</h5>
            </div>
            <p className='p__style'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio at mollitia praesentium est nulla? Incidunt aliquam, nostrum optio, error quod veritatis architecto recusandae explicabo perferendis corporis, tenetur harum facere deserunt.
            </p>
          </div>
        </div>
        {/*OTRO EJEMPLO A PATA*/}
        <div className='row message'>
          <div className='col-md-2'>
            <img className='imgMessage' src={ Harry } alt='User' />
          </div>
          <div className='col-md-10'>
            <div className='messageTitle'>
              <h4 className='name__style'> Juan</h4>
              <h5 className='time__style'> 12:41 pm</h5>
            </div>
            <p className='p__style'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio at mollitia praesentium est nulla? Incidunt aliquam, nostrum optio, error quod veritatis architecto recusandae explicabo perferendis corporis, tenetur harum facere deserunt.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Message;